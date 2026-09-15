"use client";
import {memo,useEffect} from 'react';
import {animate,motion,useMotionValue,useTransform} from 'framer-motion';
import QuestionInput from './QuestionInput';
function FloatingQuestion({targetOpacity,...inputProps}) {
  const opacity=useMotionValue(0);
  const pointerEvents=useTransform(targetOpacity,value=>value<0.1?'none':'auto');
  useEffect(()=>{
    let animation;
    const update=value=>{
      animation?.stop();
      animation=animate(opacity,value,{duration:0.6,ease:'easeOut'});
    };
    update(targetOpacity.get());
    const unsubscribe=targetOpacity.on('change',update);
    return()=>{unsubscribe();animation?.stop();};
  },[opacity,targetOpacity]);
  return <motion.div className="fixed bottom-20 left-0 right-0 mx-auto w-full max-w-[700px] px-6 z-[100]" initial={{y:20}} animate={{y:0}} transition={{duration:0.6,ease:'easeOut'}} style={{opacity,pointerEvents}}>
    <QuestionInput {...inputProps}/>
  </motion.div>;
}
export default memo(FloatingQuestion);
