import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function Approach() {
  const steps = [
    {
      title: 'Problem-First Thinking',
      desc: 'I start by dissecting the "why" before the "how". Understanding the pain point ensures the code serves a real purpose.',
      icon: Lightbulb,
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/10'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Building with the future in mind. I prioritize clean, modular code and robust backend systems that can grow with the user base.',
      icon: Code2,
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      title: 'Clean UI + Performance',
      desc: 'Aesthetics meet speed. I design interfaces that are as fast as they are beautiful, ensuring a friction-less user journey.',
      icon: Rocket,
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 font-bold mb-4">The Methodology</p>
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            My Development <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Engineering isn't just about writing syntax — it's about solving problems through intentional design and architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-10 rounded-[3rem] border-white/5 hover:border-white/10 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <step.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
