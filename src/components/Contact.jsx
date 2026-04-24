import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-darker">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-primary/10 blur-[180px] -z-10" />
      
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
           <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6">Connect</p>
           <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
             Let&apos;s build something <span className="text-gradient">impactful</span> together.
           </h2>
           <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
             I&apos;m currently open to <span className="text-white font-bold">MERN Stack internships</span>, full-stack collaborations, and software engineering roles where quality is non-negotiable.
           </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-stretch">
          {/* Contact Info */}
          <div className="space-y-4">
             <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col items-center text-center group hover:border-primary/40 transition-all h-full justify-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                   <Mail size={28} />
                </div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Direct Message</p>
                <p className="text-xl font-bold text-white break-all">tejastambe683@gmail.com</p>
                <a href="mailto:tejastambe683@gmail.com" className="mt-6 flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
                  Send Email <ExternalLink size={14} />
                </a>
             </div>

             <div className="flex gap-4">
                <a href="https://github.com/TejasTambe8080" target="_blank" rel="noreferrer" className="flex-1 glass p-6 rounded-[2rem] border-white/5 flex flex-col items-center group hover:border-white/20 transition-all">
                   <FaGithub size={24} className="text-slate-400 group-hover:text-white transition-colors mb-2" />
                   <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/tejas-tambe-29b335290/" target="_blank" rel="noreferrer" className="flex-1 glass p-6 rounded-[2rem] border-white/5 flex flex-col items-center group hover:border-secondary transition-all">
                   <FaLinkedin size={24} className="text-slate-400 group-hover:text-secondary transition-colors mb-2" />
                   <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">LinkedIn</span>
                </a>
             </div>
          </div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass p-10 md:p-12 rounded-[3.5rem] relative border-white/10 shadow-2xl text-left"
          >
             <h3 className="text-2xl font-bold text-white mb-8">Quick Inquiry</h3>
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary outline-none transition-all text-white placeholder:text-slate-700" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary outline-none transition-all text-white placeholder:text-slate-700" placeholder="john@example.com" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Your Message</label>
                   <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 h-44 focus:border-primary outline-none transition-all text-white placeholder:text-slate-700 resize-none" placeholder="How can I help you today?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary py-6 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/80 transition-all hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)]">
                  Dispatch Message <Send size={20} />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

