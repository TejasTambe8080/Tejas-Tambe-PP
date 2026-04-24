import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4">Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight uppercase">
            Selected <span className="text-gradient">Products</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-3xl">
            I don't just write code — I build solutions that address technical hurdles and business needs. Each project represents a commitment to performance, security, and scalability.
          </p>
        </div>

        {/* Featured Project: ShipXO */}
        {featuredProject && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="relative glass rounded-[3rem] overflow-hidden border-white/10 group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Visual side */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-darker via-transparent to-transparent hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent lg:hidden" />
                  
                  <div className="absolute top-8 left-8 flex gap-3">
                    <span className="px-4 py-2 bg-primary/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                      Featured Project
                    </span>
                    <span className="px-4 py-2 bg-darker/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                      SaaS Platform
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                    {featuredProject.title}
                  </h3>
                  
                  <div className="space-y-8 mb-12">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-2">
                        <ShieldCheck size={14} /> The Problem
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {featuredProject.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-secondary font-bold mb-3 flex items-center gap-2">
                        <Zap size={14} /> The Solution
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {featuredProject.whatIBuilt}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-green-400 font-bold mb-3 flex items-center gap-2">
                        <Globe size={14} /> The Impact
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {featuredProject.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href={featuredProject.live} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-darker rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-colors">
                      Live Demo <ExternalLink size={18} />
                    </a>
                    <a href={featuredProject.github} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
                      View Code <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

