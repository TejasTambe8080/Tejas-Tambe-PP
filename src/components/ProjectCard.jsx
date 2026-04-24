import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ShieldCheck, Zap, Globe, Target } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative glass rounded-[2.5rem] overflow-hidden flex flex-col h-full border-white/5 hover:border-primary/30 transition-all duration-500"
    >
      {/* Project Image at Top */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
        
        <div className="absolute top-6 left-6">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-primary/30 pl-4 py-1">
            <span className="text-slate-200 font-bold italic block mb-1">Why it matters:</span>
            {project.whyItMatters}
          </p>
        </div>

        {/* Case Study Details */}
        <div className="space-y-6 mb-8 flex-grow">
          <div className="grid gap-4">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                <Target size={16} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Problem</span>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{project.problem}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-secondary">
                <Zap size={16} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">What I Built</span>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{project.whatIBuilt}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-green-400">
                <Globe size={16} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Result</span>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{project.result}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[9px] uppercase font-bold text-slate-500">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
             <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-primary transition-all">
               <ArrowUpRight size={18} />
             </a>
             <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-secondary transition-all">
               <ExternalLink size={18} />
             </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

