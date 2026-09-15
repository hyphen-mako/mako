# FloatingQuestion

Extracted from the original homepage floating question wrapper without geometry changes. Fixed bottom 80px, horizontal centering, max width 700px, horizontal padding 24px, z-index 100. Entrance y 20→0 and opacity transitions use 0.6s easeOut. Target opacity follows the existing footer calculation; target below 0.1 disables pointer events. Own opacity MotionValue and subscription avoid homepage rerenders. On target change stop and replace the current tween; unsubscribe and stop on unmount. The memoized QuestionInput retains original submission/placeholder behavior.
