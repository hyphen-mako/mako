/*
 * Regression tests for the actual visual-value hooks, executed through a small
 * synchronous React hook host and real Framer Motion MotionValue objects.
 * Entrance-animation progress is simulated with MotionValue.set; this harness
 * does not render DOM/CSS or test interpolation, paint, or concurrent React.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const { motionValue } = require('framer-motion');
assert.equal(typeof motionValue, 'function', 'real MotionValue factory must be available');
const filename = path.resolve(__dirname, '../src/lib/useVisualValue.js');
const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

function createHost() {
  let cursor = 0, renderCount = 0, stateUpdateCount = 0;
  const slots = [], effects = [];
  const same = (left, right) => left && right && left.length === right.length && left.every((value, index) => Object.is(value, right[index]));
  const context = {
    exports: {},
    require(name) {
      if (name === 'react') return {
        useCallback(callback, deps) {
          const index = cursor++;
          if (!slots[index] || !same(slots[index].deps, deps)) slots[index] = { deps, callback };
          return slots[index].callback;
        },
        useEffect(effect, deps) {
          const index = cursor++;
          if (!slots[index] || !same(slots[index].deps, deps)) {
            const cleanup = slots[index]?.cleanup;
            slots[index] = { deps, cleanup };
            effects.push(() => { slots[index].cleanup?.(); slots[index].cleanup = effect(); });
          }
        },
        useState(initial) {
          const index = cursor++;
          if (!slots[index]) slots[index] = { value: initial };
          return [slots[index].value, value => { stateUpdateCount++; slots[index].value = value; }];
        },
      };
      if (name === 'framer-motion') return {
        useMotionValue(initial) {
          const index = cursor++;
          if (!slots[index]) slots[index] = { value: motionValue(initial) };
          return slots[index].value;
        },
      };
      throw new Error(`Unexpected dependency: ${name}`);
    },
  };
  vm.runInNewContext(code, context, { filename });
  return {
    hooks: context.exports,
    render(component) { cursor = 0; renderCount++; const result = component(context.exports); while (effects.length) effects.shift()(); return result; },
    unmount() { for (const slot of slots) { slot?.cleanup?.(); if (slot) slot.cleanup = undefined; } },
    get renderCount() { return renderCount; },
    get stateUpdateCount() { return stateUpdateCount; },
  };
}

let scenarios = 0;
function check(name, test) { test(); scenarios++; console.log(`PASS ${name}`); }

check('visual value supports direct and functional updates using the latest value', () => {
  const host = createHost();
  const [value, set] = host.render(hooks => hooks.useVisualValue(2));
  assert.equal(value.get(), 2);
  set(4); assert.equal(value.get(), 4);
  set(previous => previous * 3); assert.equal(value.get(), 12);
  set(previous => previous + 5); assert.equal(value.get(), 17);
  let observed;
  set(previous => { observed = previous; return previous; });
  assert.equal(observed, 17); assert.equal(value.get(), 17);
  assert.equal(host.renderCount, 1); assert.equal(host.stateUpdateCount, 0);
});

check('value and setter identity survive parent renders; changing initial argument does not reset state', () => {
  const host = createHost();
  const first = host.render(hooks => hooks.useVisualValue(1));
  first[1](0.25);
  const second = host.render(hooks => hooks.useVisualValue(99));
  assert.strictEqual(second[0], first[0]); assert.strictEqual(second[1], first[1]);
  assert.equal(second[0].get(), 0.25); assert.equal(host.stateUpdateCount, 0);
});

check('many visual updates emit MotionValue changes without scheduling React state updates', () => {
  const host = createHost();
  const [value, set] = host.render(hooks => hooks.useVisualValue(0));
  let changes = 0;
  const unsubscribe = value.on('change', () => changes++);
  for (let index = 1; index <= 100; index++) set(index / 100);
  set(1);
  assert.equal(changes, 100); assert.equal(value.get(), 1);
  assert.equal(host.renderCount, 1); assert.equal(host.stateUpdateCount, 0);
  unsubscribe();
});

check('delayed and in-flight entrance values survive repeated parent renders', () => {
  const host = createHost();
  const component = hooks => {
    const [master, setMaster] = hooks.useVisualValue(1);
    return { master, setMaster, fade: hooks.useEntranceFade(master) };
  };
  const original = host.render(component);
  assert.equal(original.fade.get(), 1);
  original.fade.set(0); // motion initial opacity and entrance delay
  for (let index = 0; index < 8; index++) {
    const rerender = host.render(component);
    assert.strictEqual(rerender.fade, original.fade); assert.equal(rerender.fade.get(), 0);
  }
  original.fade.set(0.37); // midway through the entrance animation
  for (let index = 0; index < 8; index++) assert.equal(host.render(component).fade.get(), 0.37);
  assert.equal(original.master.get(), 1); assert.equal(host.stateUpdateCount, 0);
  host.unmount();
});

check('separate entrance fades do not mutate the master or one another; scroll updates reach each fade', () => {
  const host = createHost();
  const { master, setMaster, fades } = host.render(hooks => {
    const [master, setMaster] = hooks.useVisualValue(1);
    return { master, setMaster, fades: [hooks.useEntranceFade(master), hooks.useEntranceFade(master), hooks.useEntranceFade(master)] };
  });
  assert.equal(new Set([master, ...fades]).size, 4);
  fades[0].set(0); fades[1].set(0.35); fades[2].set(0.8);
  assert.equal(master.get(), 1); assert.deepEqual(fades.map(value => value.get()), [0, 0.35, 0.8]);
  setMaster(0.62); assert.equal(master.get(), 0.62); assert.deepEqual(fades.map(value => value.get()), [0.62, 0.62, 0.62]);
  fades[1].set(0.9); assert.equal(master.get(), 0.62); assert.deepEqual(fades.map(value => value.get()), [0.62, 0.9, 0.62]);
  setMaster(previous => previous / 2); assert.deepEqual(fades.map(value => value.get()), [0.31, 0.31, 0.31]);
  assert.equal(host.renderCount, 1); assert.equal(host.stateUpdateCount, 0);
  host.unmount();
});

check('unmount unsubscribes every entrance fade from later master changes', () => {
  const host = createHost();
  const master = motionValue(1);
  const fades = host.render(hooks => [hooks.useEntranceFade(master), hooks.useEntranceFade(master)]);
  master.set(0.6); assert.deepEqual(fades.map(value => value.get()), [0.6, 0.6]);
  host.unmount();
  master.set(0.2); assert.deepEqual(fades.map(value => value.get()), [0.6, 0.6]);
});

check('changing master unsubscribes the old source and subscribes the new one', () => {
  const host = createHost();
  const first = motionValue(1), second = motionValue(0.8);
  const fade = host.render(hooks => hooks.useEntranceFade(first));
  host.render(hooks => hooks.useEntranceFade(second));
  first.set(0.2); assert.equal(fade.get(), 1);
  second.set(0.4); assert.equal(fade.get(), 0.4);
  host.unmount(); second.set(0.1); assert.equal(fade.get(), 0.4);
});

console.log(`Verified ${scenarios} visual-value regression scenarios with actual helper source and real MotionValue objects.`);
console.log('Limits: synchronous hook host; simulated entrance progress; no DOM/CSS, animation interpolation, paint or React concurrency coverage.');
