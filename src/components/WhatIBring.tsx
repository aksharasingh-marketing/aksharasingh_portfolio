"use client";

import { motion } from "framer-motion";

const blocks = [
  {
    title: "Brand Storytelling",
    description: "I care about how brands sound, what they stand for, and how communication builds memory and trust.",
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    title: "Audience Awareness",
    description: "I naturally think about who the message is for, how it should feel, and why it should matter to them.",
    gradient: "from-purple-500/10 to-transparent"
  },
  {
    title: "Execution Discipline",
    description: "I value consistency, structure, follow-through, and clear communication behind every creative output.",
    gradient: "from-emerald-500/10 to-transparent"
  },
  {
    title: "Growth Mindset",
    description: "I bring curiosity, adaptability, and a strong willingness to learn, improve, and contribute meaningfully.",
    gradient: "from-amber-500/10 to-transparent"
  }
];

export default function WhatIBring() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center md:text-left md:flex md:items-end md:justify-between"
        >
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest text-center md:text-left">
              02 / Core Strengths
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter max-w-2xl">
              What I Bring <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">to the Table.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xl max-w-md mt-6 md:mt-0 text-left">
            I bring a combination of creative thinking, structured execution, and audience-focused communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blocks.map((block, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-10 hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-500 group flex flex-col h-full transform-gpu will-change-[opacity,transform]`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${block.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`} />
              
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight relative z-10">
                {block.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-lg group-hover:text-neutral-300 transition-colors duration-300 relative z-10">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
