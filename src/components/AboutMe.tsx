"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="bg-[#121212] py-32 px-6 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
            01 / Introduction
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">Me.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-8 text-neutral-300 text-xl md:text-2xl leading-relaxed"
        >
          <p>
            I am a marketing and brand-focused professional with experience across digital campaigns, customer-facing communication, audience engagement, and early-stage brand building. My work sits at the intersection of <span className="text-white font-medium">storytelling, strategy, and execution</span>. I am especially interested in how brands communicate, how audiences respond, and how consistent messaging can shape trust, recall, and long-term brand value.
          </p>
          <p>
            Through my experience in digital marketing and entrepreneurial brand building, I have developed a strong interest in brand communications, social media, content-led growth, and audience-first storytelling. I enjoy translating ideas into communication that feels <span className="text-white font-medium">clear, intentional, and relevant</span> to the people it is meant for.
          </p>
          <p className="border-l-2 border-white/20 pl-6 text-neutral-400 italic mt-8 font-light">
            "What excites me most about this kind of work is the opportunity to contribute both creatively and practically — by helping brands show up with a stronger voice, more thoughtful content, and more meaningful audience connection."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
