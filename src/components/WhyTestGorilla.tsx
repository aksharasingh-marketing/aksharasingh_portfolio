"use client";

import { motion } from "framer-motion";

export default function WhyTestGorilla() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
            03 / Alignment
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">TestGorilla.</span>
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
            What draws me to TestGorilla is the combination of <span className="text-white font-medium">mission, scale, and brand opportunity</span>. Helping make hiring faster and fairer is meaningful work, and it is the kind of mission that deserves clear, memorable, and human communication.
          </p>
          <p>
            I see this role as a strong fit because it brings together the areas I am most interested in: brand communication, social media, audience engagement, content execution, and modern workflow thinking. I am especially excited to help the brand feel more relevant, consistent, and recognizable across channels like LinkedIn, Instagram, and YouTube.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-12 border-t border-white/10">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h4 className="text-white font-semibold text-xl mb-2">Creative Drive</h4>
              <p className="text-neutral-400 text-lg">Strong writing, content support, and brand voice sensitivity to create memorable moments.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h4 className="text-white font-semibold text-xl mb-2">Operational Rigor</h4>
              <p className="text-neutral-400 text-lg">Campaign thinking, cross-functional collaboration, and consistency in public execution.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
