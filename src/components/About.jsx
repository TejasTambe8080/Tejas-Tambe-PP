import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-square rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
             <div className="w-full h-full flex items-center justify-center text-8xl grayscale group-hover:grayscale-0 transition-all duration-700">
               👨‍💻
             </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-3xl -z-10" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
           <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center gap-4 tracking-tighter uppercase text-white">
             <span className="w-12 h-[2px] bg-primary rounded-full" /> About Me
           </h2>
           <div className="space-y-6 text-xl text-slate-400 leading-relaxed font-medium">
             <p>
               I am a <span className="text-white font-bold">Full Stack Developer</span> and an <span className="text-white font-bold">Artificial Intelligence & Data Science student</span>, focused on building real-world applications that solve practical problems.
             </p>
             <p>
               I work mainly with the <span className="text-white">MERN stack</span> and have developed projects like logistics platforms, AI-based fitness systems, and real-time networking applications. Along with development, I have a strong foundation in <span className="text-white">Data Structures, OOP, and system design</span>.
             </p>
             <p>
               My interest lies in combining software engineering with AI to create scalable and intelligent systems that improve user experience and efficiency. I enjoy building products end-to-end — from idea to deployment — and continuously improving performance, design, and usability.
             </p>
             <p className="pt-4 text-white font-bold border-t border-white/5">
                Solved <span className="text-primary text-2xl font-black">100+ DSA</span> problems and built multiple production-level applications like <span className="text-secondary italic">ShipXO</span>.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

