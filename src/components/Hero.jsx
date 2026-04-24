import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, Code2, Database, Layout } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  const stats = [
    { label: 'DSA Solutions', value: '100+', icon: Code2 },
    { label: 'Live Projects', value: '4+', icon: Database },
    { label: 'Academic CGPA', value: '9.36', icon: Layout },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.15),transparent_30%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold uppercase tracking-[0.25em] border border-primary/20 rounded-full bg-primary/5 text-primary"
          >
            <Sparkles size={14} className="animate-pulse" /> Available for opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-[0.9] text-white">
            I build <span className="text-gradient">scalable</span> web products using <span className="text-gradient">MERN & AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
            Transforming complex requirements into <span className="text-white italic">high-performance</span> digital experiences with a focus on architecture and user-centric design.
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <Link to="projects" smooth={true} duration={500} offset={-90}>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:scale-105 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] transition-all duration-300">
                Explore My Work <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-90}>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all duration-300">
                Let's Talk
              </button>
            </Link>
          </div>

          {/* Micro-Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass rounded-[3rem] p-4 bg-slate-900/60 border-white/20 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Mockup Code/UI UI */}
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-darker/80 p-8 min-h-[500px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                
                <div className="space-y-4">
                  <div className="h-6 w-3/4 bg-white/5 rounded-lg animate-pulse" />
                  <div className="h-20 w-full bg-white/5 rounded-2xl animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-primary/20 rounded-2xl border border-primary/20" />
                    <div className="h-32 bg-secondary/20 rounded-2xl border border-secondary/20" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/40 flex items-center justify-center">
                    <Brain size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-white/10 rounded mb-2" />
                    <div className="h-2 w-16 bg-white/5 rounded" />
                  </div>
                </div>
                <div className="h-8 w-8 rounded-lg bg-white/10" />
              </div>
            </div>
          </div>

          {/* Decorative Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-[conic-gradient(from_0deg,transparent,rgba(139,92,246,0.3),transparent)] animate-[spin_10s_linear_infinite]" />
        </motion.div>
      </div>
    </section>
  );
}

