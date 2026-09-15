# Loading fallback

- Target: src/app/loading.tsx
- Evidence: original route Suspense fallback serialized in docs/research/clean.html, byte offset59733.
- Interaction model: automatic Next.js route loading fallback, removed when route resolves. No artificial delay.
- DOM: centered flex column with one animated GIF.
- Container classes: `flex flex-col items-center justify-center gap-10 h-[calc(100dvh-96.5px)] tablet:h-[calc(100dvh-80px)] desktop:h-[calc(100dvh-80px)] w-full pb-20`.
- Image: `/_next/static/media/loading-crop.91c4276b.gif`,134×79, alt `loading`, priority. Downloaded unchanged to public/assets/reference/media/loading-crop.91c4276b.gif.
- States: the GIF supplies its own frame animation; no generated spinner.
- Screenshot: transient state is retained from original serialized markup rather than artificially holding a loader on a fast static route.
- Breakpoints: mobile below768; tablet768–1079; desktop1080+.
