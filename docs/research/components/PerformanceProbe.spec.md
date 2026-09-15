# Optional performance probe

Development/QA instrumentation enabled only by ?perf=1. Normal homepage produces no probe UI, animation frame loop or observer. Explicit audit mode offers Reset measurement and a hidden JSON output containing root commits, scroll events, frame intervals and long tasks. Measurements remain in this browser; no network transmission or persistence. Cancels RAF, interval, observer and scroll listener on unmount. This is a QA addition, not an element in the reference design.
