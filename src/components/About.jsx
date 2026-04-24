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
          <div className="aspect-square rounded-3xl bg-slate-800/50 overflow-hidden border border-white/10 group">
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
           <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center gap-4 tracking-tight">
             <span className="w-12 h-[2px] bg-primary rounded-full" /> About Me
          </h2>
           <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              I am a <span className="text-white font-medium">Full Stack Developer</span> and <span className="text-white font-medium">AI & Data Science student</span> focused on building polished web apps that balance good design, useful logic, and reliable performance.
            </p>
            <p>
              With a strong foundation in <span className="text-white font-medium">MERN Stack</span>, I enjoy turning product ideas into clean experiences, from logistics tools to AI-enhanced networking and analytics workflows.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-sm">Pune, India</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <h4 className="text-white font-bold mb-1">Specialization</h4>
                <p className="text-sm">Product Engineering</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
