import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-darker">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-primary/10 blur-[180px] -z-10" />
      
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
           <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-black mb-8">Ready to collaborate?</p>
           <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase text-white leading-[0.95]">
             Let&apos;s build something <br /><span className="text-gradient">impactful</span> together.
           </h2>
           <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
             I&apos;m currently open to <span className="text-white">MERN Stack internships</span>, software engineering roles, and full-stack collaborations.
           </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-stretch">
          {/* Contact Info */}
          <div className="space-y-6">
             <div className="glass p-12 rounded-[3.5rem] border-white/5 flex flex-col items-center text-center group hover:border-primary/40 transition-all h-full justify-center">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                   <Mail size={32} />
                </div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-4">Direct Message</p>
                <p className="text-2xl font-black text-white break-all">tejastambe683@gmail.com</p>
                <a href="mailto:tejastambe683@gmail.com" className="mt-10 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-2 text-sm font-bold text-white hover:bg-white/10 transition-all">
                  Send Email <ExternalLink size={14} />
                </a>
             </div>

             <div className="flex gap-6">
                <a href="https://github.com/TejasTambe8080" target="_blank" rel="noreferrer" className="flex-1 glass p-8 rounded-[2.5rem] border-white/5 flex flex-col items-center group hover:border-white/20 transition-all">
                   <FaGithub size={28} className="text-slate-400 group-hover:text-white transition-colors mb-3" />
                   <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/tejas-tambe-29b335290/" target="_blank" rel="noreferrer" className="flex-1 glass p-8 rounded-[2.5rem] border-white/5 flex flex-col items-center group hover:border-secondary transition-all">
                   <FaLinkedin size={28} className="text-slate-400 group-hover:text-secondary transition-colors mb-3" />
                   <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">LinkedIn</span>
                </a>
             </div>
          </div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass p-12 md:p-14 rounded-[4rem] relative border-white/10 shadow-2xl text-left"
          >
             <h3 className="text-3xl font-black text-white mb-10 tracking-tight">Quick Inquiry</h3>
             <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary outline-none transition-all text-white placeholder:text-slate-700 font-medium" placeholder="John Doe" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary outline-none transition-all text-white placeholder:text-slate-700 font-medium" placeholder="john@example.com" />
                   </div>
                </div>
                <div className="space-y-3">
                   <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Your Message</label>
                   <textarea className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 h-48 focus:border-primary outline-none transition-all text-white placeholder:text-slate-700 resize-none font-medium" placeholder="How can I help you today?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary py-7 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-primary/90 transition-all hover:shadow-[0_20px_60px_rgba(139,92,246,0.4)] hover:-translate-y-1">
                   Dispatch Message <Send size={22} />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

