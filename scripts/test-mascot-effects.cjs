/*
 * Executes the actual component with deterministic timers and minimal hook/JSX stubs.
 * This verifies state timing, event handlers and emitted element props. It does not
 * render DOM/CSS, execute Framer Motion, decode images, or emulate React concurrency.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const sourcePath = path.resolve(__dirname, '../src/components/GlobalMascotEffects.jsx');
const code = ts.transpileModule(fs.readFileSync(sourcePath, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
}).outputText;

function mount({ month = 9, day = 15, storage = new Map() } = {}) {
  let now = 0, nextTimer = 1, cursor = 0, tree, dirty = true;
  const hooks = [], timers = new Map(), listeners = new Map(), effects = [];
  const equalDeps = (a, b) => a && b && a.length === b.length && a.every((v, i) => Object.is(v, b[i]));
  const react = {
    useState(initial) {
      const index = cursor++;
      if (!(index in hooks)) hooks[index] = typeof initial === 'function' ? initial() : initial;
      return [hooks[index], next => {
        const value = typeof next === 'function' ? next(hooks[index]) : next;
        if (!Object.is(value, hooks[index])) { hooks[index] = value; dirty = true; }
      }];
    },
    useRef(initial) { const index = cursor++; return hooks[index] ||= { current: initial }; },
    useCallback(callback, deps) {
      const index = cursor++;
      if (!hooks[index] || !equalDeps(hooks[index].deps, deps)) hooks[index] = { callback, deps };
      return hooks[index].callback;
    },
    useEffect(effect, deps) {
      const index = cursor++;
      if (!hooks[index] || !equalDeps(hooks[index].deps, deps)) {
        const old = hooks[index]; hooks[index] = { deps, cleanup: old?.cleanup };
        effects.push(() => { hooks[index].cleanup?.(); hooks[index].cleanup = effect(); });
      }
    },
  };
  const jsx = { Fragment: 'Fragment', jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) };
  const window = {
    innerWidth: 1440,
    addEventListener(name, listener) { if (!listeners.has(name)) listeners.set(name, new Set()); listeners.get(name).add(listener); },
    removeEventListener(name, listener) { listeners.get(name)?.delete(listener); },
  };
  class FixedDate extends Date { getMonth() { return month - 1; } getDate() { return day; } }
  const context = {
    exports: {}, Date: FixedDate, window,
    sessionStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) },
    setTimeout(callback, delay) { const id = nextTimer++; timers.set(id, { callback, at: now + delay }); return id; },
    clearTimeout(id) { timers.delete(id); },
    require(name) {
      if (name === 'react') return react;
      if (name === 'react/jsx-runtime') return jsx;
      if (name === 'framer-motion') return { AnimatePresence: 'AnimatePresence', motion: { img: 'motion.img', div: 'motion.div' } };
      if (name === 'next/image') return 'NextImage';
      throw new Error(`Unexpected dependency: ${name}`);
    },
  };
  vm.runInNewContext(code, context, { filename: sourcePath });
  function render() {
    let remaining = 20;
    while (dirty) {
      assert.ok(remaining-- > 0, 'render should settle'); dirty = false; cursor = 0;
      tree = context.exports.default();
      while (effects.length) effects.shift()();
    }
  }
  render();
  return {
    storage,
    nodes(predicate) {
      const found = [];
      function walk(node) {
        if (Array.isArray(node)) { node.forEach(walk); return; }
        if (!node || typeof node !== 'object') return;
        if (predicate(node)) found.push(node);
        walk(node.props?.children);
      }
      walk(tree); return found;
    },
    text(text) { return this.nodes(node => node.props?.children === text).length > 0; },
    event(name, payload = {}) { for (const callback of [...(listeners.get(name) || [])]) callback(payload); render(); },
    advance(ms) {
      const target = now + ms;
      while (true) {
        const next = [...timers].filter(([, timer]) => timer.at <= target).sort((a, b) => a[1].at - b[1].at || a[0] - b[0])[0];
        if (!next) break;
        now = next[1].at; timers.delete(next[0]); next[1].callback(); render();
      }
      now = target;
    },
    unmount() { for (const hook of hooks) hook?.cleanup?.(); },
    listenerCount() { return [...listeners.values()].reduce((sum, set) => sum + set.size, 0); },
  };
}

const IDLE = '뭐 하고 있어요? 👀';
const PARADE = '🎮 코나미 코드 발동! 픽케어 퍼레이드! 🐾';
const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let scenarios = 0;
function check(name, test) { test(); scenarios++; console.log(`PASS ${name}`); }

check('idle appears at 180000ms, remains through 3999ms, dismisses at 4000ms', () => {
  const app = mount(); assert.equal(app.text(IDLE), false);
  app.advance(179999); assert.equal(app.text(IDLE), false);
  app.advance(1); assert.equal(app.text(IDLE), true);
  assert.equal(app.nodes(n => n.props?.alt === '궁금한 픽케어')[0].props.src, '/characters/[2D]set_motion_04.webp');
  app.advance(3999); assert.equal(app.text(IDLE), true);
  app.advance(1); assert.equal(app.text(IDLE), false);
});

for (const event of ['mousemove', 'mousedown', 'touchstart', 'scroll', 'keydown']) {
  check(`${event} restarts inactivity timer and immediately dismisses an open idle popup`, () => {
    const app = mount(); app.advance(179999); app.event(event, { code: 'KeyX' });
    app.advance(179999); assert.equal(app.text(IDLE), false);
    app.advance(1); assert.equal(app.text(IDLE), true);
    app.event(event, { code: 'KeyX' }); assert.equal(app.text(IDLE), false);
    app.advance(179999); assert.equal(app.text(IDLE), false);
    app.advance(1); assert.equal(app.text(IDLE), true);
  });
}

check('only the full exact keyboard sequence shows six parade images; disappears at 6000ms', () => {
  const app = mount();
  for (const code of sequence.slice(0, -1)) { app.event('keydown', { code }); assert.equal(app.text(PARADE), false); }
  app.event('keydown', { code: sequence.at(-1) }); assert.equal(app.text(PARADE), true);
  const images = app.nodes(node => node.type === 'motion.img');
  assert.equal(images.length, 6);
  for (let index = 0; index < 6; index++) {
    assert.equal(images[index].props.src, `/characters/[2D]set_motion_0${index + 1}.webp`);
    assert.equal(images[index].props.animate.x[1], 1520);
    assert.equal(images[index].props.transition.delay, 0.3 * index);
  }
  app.advance(5999); assert.equal(app.text(PARADE), true);
  app.advance(1); assert.equal(app.text(PARADE), false);
});

check('wrong key resets keyboard sequence; a fresh correct sequence still works', () => {
  const app = mount();
  sequence.slice(0, 4).forEach(code => app.event('keydown', { code }));
  app.event('keydown', { code: 'KeyX' });
  sequence.slice(4).forEach(code => app.event('keydown', { code }));
  assert.equal(app.text(PARADE), false);
  sequence.forEach(code => app.event('keydown', { code })); assert.equal(app.text(PARADE), true);
});

for (const [month, day, greeting] of [[1, 1, '새해 복 많이 받으세요! 🎉'], [10, 4, '세계 동물의 날을 축하합니다! 🐾'], [12, 25, '메리 크리스마스! 🎄']]) {
  check(`calendar ${month}/${day}: 30 confetti, exact greeting, 5000ms lifetime, session suppression`, () => {
    const storage = new Map(), app = mount({ month, day, storage });
    assert.equal(app.text(greeting), true);
    assert.equal(app.nodes(node => node.props?.className === 'absolute animate-confetti-fall').length, 30);
    const key = `pickcare-confetti-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    assert.equal(storage.get(key), 'shown');
    app.advance(4999); assert.equal(app.text(greeting), true);
    app.advance(1); assert.equal(app.text(greeting), false);
    assert.equal(app.nodes(node => node.props?.className === 'absolute animate-confetti-fall').length, 0);
    app.unmount();
    const remount = mount({ month, day, storage });
    assert.equal(remount.text(greeting), false);
    assert.equal(remount.nodes(node => node.props?.className === 'absolute animate-confetti-fall').length, 0);
  });
}

check('ordinary dates have no calendar greeting; unmount removes all event listeners', () => {
  const app = mount(); assert.equal(app.storage.size, 0);
  assert.equal(app.nodes(node => node.props?.className === 'absolute animate-confetti-fall').length, 0);
  assert.equal(app.listenerCount(), 5); app.unmount(); assert.equal(app.listenerCount(), 0);
});

console.log(`Verified ${scenarios} deterministic state/event scenarios against the actual component source.`);
console.log('Limits: no DOM/CSS rendering, Framer Motion interpolation/exit timing, image decoding, or React concurrent/StrictMode simulation.');
