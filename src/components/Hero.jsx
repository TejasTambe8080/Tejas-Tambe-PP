import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Database, Layout, Shapes } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  const stats = [
    { label: 'DSA Solutions', value: '100+', icon: Code2 },
    { label: 'Live Projects', value: '4+', icon: Database },
    { label: 'Academic CGPA', value: '9.36', icon: Layout },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] border border-primary/30 rounded-full bg-primary/10 text-primary shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            <Sparkles size={14} className="animate-pulse" /> Engineering the future
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black mb-8 tracking-tighter leading-[0.85] text-white">
            Building <span className="text-gradient">Scalable</span> <br />
            Web Apps with <br />
            <span className="outline-text">MERN & AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-6 max-w-xl leading-relaxed font-bold">
            Full Stack Developer | <span className="text-white italic">AI & Data Science Student</span>
          </p>

          <p className="text-sm md:text-base text-slate-500 mb-12 max-w-lg leading-relaxed font-medium border-l-2 border-primary/30 pl-6 py-1">
             Focused on building <span className="text-white font-bold">scalable, real-world applications</span> with clean architecture and performance.
          </p>

          <div className="flex flex-wrap gap-6 mb-20">
            <Link to="projects" smooth={true} duration={500} offset={-90}>
              <button className="btn-premium">
                View Proof of Work <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-90}>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </div>

          {/* Trust Signals & Micro-Stats */}
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="flex flex-col group cursor-default"
              >
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black text-white mb-1 group-hover:text-primary transition-colors">{stat.value}</span>
                    <span className="text-primary font-bold text-xl">+</span>
                </div>
                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-600 group-hover:text-slate-400 transition-colors">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Visual Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="animate-float">
            <div className="relative glass-card p-4 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50" />
              
              <div className="rounded-[2rem] overflow-hidden bg-[#020617]/90 p-8 min-h-[550px] border border-white/5 relative z-10">
                <div className="flex items-center justify-between mb-12">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/30" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                        <div className="w-3 h-3 rounded-full bg-green-500/30" />
                    </div>
                    <div className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        System.Status: Active
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="h-12 w-2/3 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl" />
                    <div className="grid grid-cols-2 gap-6">
                        <div className="h-40 glass rounded-3xl p-6 flex flex-col justify-end">
                            <Shapes size={24} className="text-secondary mb-4" />
                            <div className="h-2 w-20 bg-white/10 rounded mb-2" />
                            <div className="h-1.5 w-12 bg-white/5 rounded" />
                        </div>
                        <div className="h-40 glass rounded-3xl p-6 flex flex-col justify-end">
                            <div className="h-10 w-10 rounded-full bg-primary/20 mb-4 animate-pulse" />
                            <div className="h-2 w-16 bg-white/10 rounded mb-2" />
                            <div className="h-1.5 w-10 bg-white/5 rounded" />
                        </div>
                    </div>
                    <div className="h-32 glass rounded-3xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div className="h-2 w-32 bg-white/10 rounded" />
                            <div className="h-4 w-4 bg-secondary/50 rounded-full animate-ping" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-1.5 w-full bg-white/5 rounded" />
                            <div className="h-1.5 w-3/4 bg-white/5 rounded" />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_70%)] animate-pulse" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}



