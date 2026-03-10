"use client";

import { motion } from "framer-motion";

export default function WhereHeaded() {
  return (
    <section className="bg-[#121212] py-32 px-6 relative z-20 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-900/10 to-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
            10 / The Future
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-tight">
            Where I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500 italic">Headed.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-8 text-neutral-300 text-xl md:text-2xl leading-relaxed text-left md:text-center max-w-3xl mx-auto mb-20"
        >
          <p>
            My long-term goal is to build a career at the intersection of <span className="text-white font-medium">brand, communication, and growth.</span> I want to become someone who helps shape how brands are understood, remembered, and trusted — not only through good content, but through clear positioning and stronger audience connection over time.
          </p>
          <p>
            Right now, I am focused on becoming excellent at execution, strengthening my thinking, and contributing to teams and brands that value clarity, consistency, and meaningful communication.
          </p>
        </motion.div>

        {/* Contact Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-12 max-w-2xl mx-auto backdrop-blur-md"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
          <p className="text-neutral-400 mb-10">Thank you for taking the time to view my portfolio. I’m excited by opportunities involving brand communication and content-led growth.</p>
          
          <div className="space-y-3 font-medium">
            <p className="text-white text-xl">Akshara Singh</p>
            <p className="text-neutral-300">8904129529</p>
            <p className="text-neutral-300">akshara.singh.marketing@gmail.com</p>
            <a href="https://www.linkedin.com/in/akshara-singh-" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors inline-block pt-2">
              linkedin.com/in/akshara-singh-
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
