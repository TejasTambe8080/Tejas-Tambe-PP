import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[100] bg-darker flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-xs space-y-8">
        <div className="flex justify-between items-end">
           <h1 className="text-3xl font-black tracking-tighter">TEJAS <span className="text-primary italic">.</span></h1>
           <span className="text-slate-500 font-mono text-sm">{progress}%</span>
        </div>
        
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
           <motion.div 
             className="absolute top-0 left-0 h-full bg-primary"
             initial={{ width: 0 }}
             animate={{ width: `${progress}%` }}
           />
        </div>

        <p className="text-xs text-slate-600 uppercase tracking-widest text-center animate-pulse">Initializing Interface</p>
      </div>
    </motion.div>
  );
}
