export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative glass-card overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/20 transition-all duration-700 hover:-translate-y-2 shadow-2xl"
    >
      {/* Project Image at Top */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
        />
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90 transition-opacity duration-500" />
        
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white">
            {project.category}
          </span>
        </div>

        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
             <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-2xl">
                <ArrowUpRight size={24} />
             </div>
        </div>
      </div>

      {/* Project content */}
      <div className="p-10 flex flex-col flex-grow relative bg-white/[0.01]">
        <div className="mb-10">
          <h3 className="text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tighter">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-white/10 shrink-0" />
            <p className="text-slate-500 text-[11px] uppercase font-black tracking-widest">Case Overview</p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            {project.whyItMatters}
          </p>
        </div>

        {/* Case Study Details */}
        <div className="space-y-6 mb-10 flex-grow">
          <div className="grid gap-3">
            {[
                { icon: Target, color: 'text-primary', label: 'Problem', text: project.problem },
                { icon: Zap, color: 'text-secondary', label: 'Solution', text: project.whatIBuilt }
            ].map((item, i) => (
                <div key={i} className="p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex gap-4">
                    <div className={`shrink-0 w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center ${item.color}`}>
                        <item.icon size={16} />
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">{item.label}</span>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{item.text}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
          <div className="flex flex-wrap gap-3">
            {project.tech.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] uppercase font-black tracking-widest text-slate-500 hover:text-primary transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
             <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
               <FaGithub size={20} />
             </a>
             <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
               <ExternalLink size={20} />
             </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


