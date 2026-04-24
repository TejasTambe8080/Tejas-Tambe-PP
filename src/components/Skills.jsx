import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/projects';
import { FaCode, FaServer, FaWandMagicSparkles } from 'react-icons/fa6';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiFigma,
  SiTensorflow,
  SiPostman,
  SiGoogleanalytics,
} from 'react-icons/si';

const icons = {
  Frontend: FaCode,
  Backend: FaServer,
  Tools: FaWandMagicSparkles,
};

const skillIcons = {
  React: SiReact,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Git: SiGit,
  Figma: SiFigma,
  "Power BI": SiGoogleanalytics,
  "TensorFlow.js": SiTensorflow,
  "REST APIs": SiPostman,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-black mb-4">Skill Stack</p>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white uppercase leading-none">The <span className="text-gradient">Arsenal</span></h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            A specialized collection of technologies I leverage to engineer <span className="text-white italic">high-performance</span> digital systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-card p-10 relative group overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-700"
            >
              <div className="mb-10 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform text-primary text-2xl group-hover:bg-primary/10">
                {React.createElement(icons[skillGroup.category])}
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">{skillGroup.category}</h3>
              <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">Systematic mastery of standard-grade technologies.</p>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-widest bg-white/5 border border-white/5 rounded-xl text-slate-400 hover:border-primary/30 hover:text-white transition-all cursor-default"
                  >
                    {skillIcons[skill] ? React.createElement(skillIcons[skill], { size: 14, className: "group-hover:text-primary transition-colors" }) : null}
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

