'use client'
import { useEffect,useState } from 'react';import { motion,AnimatePresence } from 'framer-motion';
export default function LoadingScreen(){const [s,set]=useState(true);useEffect(()=>{const t=setTimeout(()=>set(false),2500);return()=>clearTimeout(t)},[]);return <AnimatePresence>{s&&<motion.div exit={{opacity:0}} className='fixed inset-0 z-[70] bg-bg grid place-items-center'><h1 className='text-6xl font-black text-primary animate-glitch neon-text'>DEV FRAOL</h1></motion.div>}</AnimatePresence>}
