import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/projects';
import { Trophy, Award, Zap, Code, ShieldCheck } from 'lucide-react';

const icons = [<ShieldCheck />, <Zap />, <Trophy />, <Award />];

export default function Achievements() {
  return (
    <section id="technical-footprint" className="py-24 px-6 relative bg-darker/50">
       <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
           <div className="max-w-2xl">
             <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4">Milestones</p>
             <h2 className="text-4xl md:text-6xl font-black tracking-tight">Technical <span className="text-gradient">Recognition</span></h2>
           </div>
           <p className="text-slate-400 text-lg max-w-md">
             Beyond code, these milestones represent core commitment to growth, community involvement, and systematic learning.
           </p>
         </div>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glass rounded-[2.5rem] border-white/5 flex flex-col items-center text-center group hover:border-primary/30 transition-all hover:-translate-y-2 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary border border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                  {icons[idx % icons.length]}
                </div>
                <p className="text-base text-slate-300 group-hover:text-white transition-colors font-medium leading-relaxed">{text}</p>
              </motion.div>
            ))}
         </div>
       </div>
    </section>
  );
}

