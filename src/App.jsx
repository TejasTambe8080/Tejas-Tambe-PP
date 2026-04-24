import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Approach from "./components/Approach";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2500);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-primary/30 relative overflow-hidden noise-bg">
      {/* Dynamic Background Gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-secondary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="cursor-glow" />
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;

