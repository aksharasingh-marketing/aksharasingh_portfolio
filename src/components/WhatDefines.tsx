"use client";

import { motion } from "framer-motion";

const traits = [
  {
    title: "Audience-First Thinking",
    description: "I believe strong communication begins with understanding the audience. Before thinking about content formats or campaign ideas, I think about who the brand is speaking to, what they care about, what they notice, and what would make them stop, feel, trust, or engage.",
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    title: "Brand Sensitivity",
    description: "I pay close attention to brand voice, perception, tone, and consistency. I am naturally interested in how a brand feels to people — not just what it says. I care about whether the communication feels aligned, memorable, and true to the identity the brand wants to build.",
    gradient: "from-purple-500/10 to-transparent"
  },
  {
    title: "Creative Execution",
    description: "I enjoy turning ideas into tangible outputs — from messaging and campaign directions to social content, structured plans, and growth-focused execution. I like work that moves from concept to reality.",
    gradient: "from-emerald-500/10 to-transparent"
  },
  {
    title: "Structure and Ownership",
    description: "Along with creativity, I value organization. I am comfortable managing trackers, follow-ups, workflows, and execution details because I believe good ideas only create impact when they are supported by consistency and structure.",
    gradient: "from-orange-500/10 to-transparent"
  },
  {
    title: "Curiosity and Growth",
    description: "I am always interested in learning more — about people, consumer behavior, digital culture, branding, and what makes communication effective. I approach work with curiosity, openness, and a desire to improve continuously.",
    gradient: "from-pink-500/10 to-transparent"
  },
  {
    title: "Meaningful Impact",
    description: "I am drawn to work that goes beyond activity for the sake of activity. I want the things I create or contribute to to have a purpose — whether that purpose is stronger visibility, better storytelling, more engagement, or clearer communication.",
    gradient: "from-amber-500/10 to-transparent"
  }
];

export default function WhatDefines() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            What Defines <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">My Work</span>
          </h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
            The core principles and mindset that shape how I approach every project, campaign, and brand communication effort.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {traits.map((trait, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-500 group flex flex-col h-full transform-gpu will-change-[opacity,transform]`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${trait.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`} />
              
              <div className="text-white/20 font-bold text-6xl mb-4 leading-none group-hover:text-white/30 transition-colors duration-500">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight relative z-10">
                {trait.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300 relative z-10">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
