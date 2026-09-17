<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## CSS system warning (important)

`public/assets/reference.css` is a **static template CSS file** (inlined via `readFileSync` in `src/app/layout.tsx`). It is NOT regenerated from Tailwind at build time. Only utility classes that happen to exist in that file render — arbitrary values like `text-[#162033]` or `max-w-[820px]` may silently no-op.

When adding components, verify classes exist in `reference.css`, or add rules to the "utility patch" block at the bottom of `src/app/globals.css`. Custom semantic classes (`.faq-*`, `.guide-*`) live in `globals.css`.

`tablet:` variants in `reference.css` apply only at 768–1079px — pair them with `desktop:` variants or define your own in `globals.css` (the patch uses `min-width:768px` semantics).
