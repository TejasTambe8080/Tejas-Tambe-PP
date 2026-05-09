import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 glass-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-24 relative">
          <div className="absolute -top-10 -left-10 text-[10rem] font-black outline-text opacity-10 pointer-events-none select-none">
            WORK
          </div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-black mb-4 ml-1">Portfolio</p>
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase text-white leading-none">
            Selected <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
            Dedicated to building <span className="text-white">scalable systems</span> and <span className="text-white">intelligent solutions</span>.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-32"
          >
            <div className="relative glass-card overflow-hidden group border border-white/5">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-0">
                {/* Content side */}
                <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative bg-[#020617]/40 ring-1 ring-inset ring-white/5 order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-5 py-2 bg-primary/90 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-2xl">
                      Featured Project
                    </span>
                    <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">{project.category}</p>
                  </div>

                  <h3 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-xl text-slate-400 mb-12 font-medium">{project.whyItMatters}</p>
                  
                  <div className="space-y-10 mb-14">
                    <div className="group/item">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary font-black mb-3 flex items-center gap-3">
                        <span className="w-8 h-px bg-primary/30 group-hover/item:w-12 transition-all" /> Problem
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-lg font-medium group-hover/item:text-slate-200 transition-colors">
                        {project.problem}
                      </p>
                    </div>
                    
                    <div className="group/item">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black mb-3 flex items-center gap-3">
                        <span className="w-8 h-px bg-secondary/30 group-hover/item:w-12 transition-all" /> Solution
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-lg font-medium group-hover/item:text-slate-200 transition-colors">
                        {project.whatIBuilt}
                      </p>
                    </div>

                    <div className="group/item">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-green-400 font-black mb-3 flex items-center gap-3">
                        <span className="w-8 h-px bg-green-400/30 group-hover/item:w-12 transition-all" /> Impact
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-lg font-medium group-hover/item:text-slate-200 transition-colors">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-5 mt-4">
                    <a href={project.live} target="_blank" rel="noreferrer" className="px-12 py-5 bg-primary/20 backdrop-blur-md border border-primary/30 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary hover:shadow-[0_20px_50px_rgba(139,92,246,0.5)] transition-all duration-300">
                      Live Product <ExternalLink size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300">
                      View Code <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

                {/* Visual side */}
                <div className="relative h-[450px] lg:h-auto overflow-hidden order-1 lg:order-2">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-[#020617] via-transparent to-transparent hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent lg:hidden" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}



