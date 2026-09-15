"use client";
import {useCallback,useEffect} from 'react';
import {useMotionValue} from 'framer-motion';
// Continuous scroll values update Motion's DOM renderer without reconciling the page.
export function useVisualValue(initial) {
  const value=useMotionValue(initial);
  const set=useCallback(next=>value.set(typeof next==='function'?next(value.get()):next),[value]);
  return [value,set];
}

// Entrance animations own their opacity. Only scroll changes may override it;
// a useTransform identity would reset an in-flight entrance on every React render.
export function useEntranceFade(scrollOpacity) {
  const opacity=useMotionValue(scrollOpacity.get());
  useEffect(()=>scrollOpacity.on('change',value=>opacity.set(value)),[opacity,scrollOpacity]);
  return opacity;
}
