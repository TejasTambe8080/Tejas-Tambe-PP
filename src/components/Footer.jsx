import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-darker">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-xl font-bold tracking-tighter">TEJAS <span className="text-primary italic">.</span></p>
          <p className="text-sm text-slate-500 mt-2">© {new Date().getFullYear()} Designed & Built by Tejas Tambe</p>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
