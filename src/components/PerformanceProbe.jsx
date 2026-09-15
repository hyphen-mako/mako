"use client";
import {useEffect, useRef, useState} from 'react';
let audit = null;
export function recordHomeCommit() {
  if (audit) audit.commits++;
}
function fresh() { return {started:performance.now(),commits:0,scrollEvents:0,frames:[],scrollFrames:[],longTasks:[],lastScroll:-Infinity}; }
export default function PerformanceProbe() {
  const output=useRef(null);
  const [active,setActive]=useState(false);
  useEffect(()=>{
    if(new URLSearchParams(location.search).get('perf')!=='1')return;
    setActive(true); audit=fresh();
    let raf=0,previous=performance.now();
    const scroll=()=>{audit.scrollEvents++;audit.lastScroll=performance.now();};
    const frame=now=>{const delta=now-previous;previous=now;if(document.visibilityState==='visible'&&delta<250){audit.frames.push(delta);if(now-audit.lastScroll<150)audit.scrollFrames.push(delta);}raf=requestAnimationFrame(frame);};
    const observer=new PerformanceObserver(list=>{for(const e of list.getEntries())audit.longTasks.push(e.duration);});
    if(PerformanceObserver.supportedEntryTypes.includes('longtask'))observer.observe({type:'longtask'});
    const timer=setInterval(()=>{
      if(!output.current)return;
      const summarize=arr=>{const a=[...arr].sort((a,b)=>a-b);return {count:a.length,p50:a[Math.floor(a.length*.5)]||0,p95:a[Math.floor(a.length*.95)]||0,over25ms:a.filter(x=>x>25).length,over50ms:a.filter(x=>x>50).length};};
      output.current.textContent=JSON.stringify({elapsed:performance.now()-audit.started,commits:audit.commits,scrollEvents:audit.scrollEvents,frames:summarize(audit.frames),scrollFrames:summarize(audit.scrollFrames),longTasks:audit.longTasks,scrollY,viewport:[innerWidth,innerHeight],visibility:document.visibilityState});
    },250);
    window.addEventListener('scroll',scroll,{passive:true});raf=requestAnimationFrame(frame);
    return()=>{cancelAnimationFrame(raf);clearInterval(timer);observer.disconnect();window.removeEventListener('scroll',scroll);audit=null;};
  },[]);
  if(!active)return null;
  return <aside style={{position:'fixed',bottom:4,right:4,zIndex:100001,font:'11px system-ui',background:'#fff',padding:4,border:'1px solid #ddd'}}><button data-testid="perf-reset" onClick={()=>{audit=fresh();}}>Reset measurement</button><output id="performance-sample" ref={output} hidden/></aside>;
}
