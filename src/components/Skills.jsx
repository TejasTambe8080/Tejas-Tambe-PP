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
    <section id="skills" className="py-24 px-6 bg-slate-900/25">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">Skill stack</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Built for frontend, backend, and tooling</h2>
          <p className="text-slate-400">The stack below reflects how I ship product work: clean interfaces, reliable servers, and tools that help the work move faster.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2rem] relative group overflow-hidden border border-white/10 hover:border-primary/40 transition-all"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform text-primary text-xl">
                {React.createElement(icons[skillGroup.category])}
              </div>
              <h3 className="text-2xl font-bold mb-3">{skillGroup.category}</h3>
              <p className="text-sm text-slate-400 mb-6">A focused set of tools I use to build and ship work in that layer.</p>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300 hover:border-primary/50 hover:text-white transition-all cursor-default"
                  >
                    {skillIcons[skill] ? React.createElement(skillIcons[skill], { size: 14 }) : null}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
