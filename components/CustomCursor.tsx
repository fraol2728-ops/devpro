'use client'
import { useEffect,useState } from 'react'
export default function CustomCursor(){const [p,set]=useState({x:0,y:0});useEffect(()=>{const f=(e:MouseEvent)=>set({x:e.clientX,y:e.clientY});window.addEventListener('mousemove',f);return()=>window.removeEventListener('mousemove',f)},[]);return <>{['w-2 h-2 bg-secondary','w-8 h-8 border border-secondary/70'].map((c,i)=><div key={i} className={`fixed rounded-full pointer-events-none z-[60] ${c}`} style={{left:p.x-(i?16:4),top:p.y-(i?16:4),boxShadow:'0 0 18px #00f5ff',transition:'transform .08s'}}/>)}</>}
