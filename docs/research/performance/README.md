# Animation performance revision — 2026-09-15

## Changes

Continuous scroll opacity/translation values now use MotionValue subscriptions instead of scheduling a render of the entire homepage. Entrance fades have independent MotionValues so unrelated renders cannot bypass the original delay. Guide cards and question inputs are memoized; card data, hover context, submission callbacks and placeholder arrays are stable. The unused useScroll subscription was removed.

Lenis now cancels its requestAnimationFrame loop on cleanup. Desktop listeners and the Lenis instance follow the 1080px breakpoint. Cleanup clears the instance-specific card lock; source thresholds and animation timings remain unchanged.

## Reproducible measurement

Production before/after builds, Chrome, 1440×900, foreground tab, intro completed. Open /?perf=1, reset the measurement, scroll down 0.35 viewport pages eight times with 250ms intervals, then allow 1200ms to settle. The optional probe records root React commits, frame intervals and long tasks into #performance-sample. It is inactive on normal URLs.

Warm comparison (`warm-comparison.json`):

| Metric | Before | After |
|---|---:|---:|
| Homepage React commits | 46 | 19 |
| Scroll events | 90 | 89 |
| Scroll-frame p95 | 17.7ms | 17.6ms |
| Scroll frames >50ms | 0 | 0 |
| Long tasks | 0 | 0 |

Root commits decreased 58.7%. This is not a 59% FPS improvement: measured frame intervals were similar on this machine. One earlier cold after-run contained a >50ms frame; the retained initial runs and warm run show that variance. Hardware, browser and load affect results.

## Fidelity and regression checks

- Original delayed face entrance remained hidden through the early sampled states; both versions reached opacity 1 by the final 3400ms sample. Actual reload/hydration starting times differ, so this is not frame synchronization.
- Settled guide-card geometry, opacity and transform matrices matched before/after. Raster comparison had small image-edge differences (12,640 pixels; maximum channel difference 14), so this check does not establish exact pixel identity.
- 390px native scrolling, live resize to 1440px Lenis scrolling, and return to 390px native scrolling worked. Lenis classes disappeared on mobile; no console errors were observed.
- Seven actual-helper tests cover independent entrance fades, stable setters, subscriptions, cleanup and avoiding React state updates for continuous values. Twelve mascot-effect tests cover timers and holiday/session behavior.
- Source height/bottom animations and deliberate intro/card scroll gates remain intact to preserve the original visual behavior.
