"use client";

import { motion } from "framer-motion";

export default function SocialStrategy() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
            06 / Social & Content
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter max-w-2xl mb-6">
            Social Media <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">Strategy Thinking.</span>
          </h2>
          <p className="text-neutral-400 text-xl max-w-2xl">
            For me, social media is not just a publishing channel — it is where brand voice, audience attention, trust, and consistency meet in public.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Channel Clarity</h3>
              <div className="space-y-6">
                <div className="border-l border-white/10 pl-6">
                  <h4 className="text-white font-medium text-xl mb-2">LinkedIn</h4>
                  <p className="text-neutral-400">Best for thought leadership, brand credibility, category perspective, and employer-facing insights.</p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <h4 className="text-white font-medium text-xl mb-2">Instagram</h4>
                  <p className="text-neutral-400">Best for emotional connection, visual storytelling, brand familiarity, and lighter but memorable communication.</p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <h4 className="text-white font-medium text-xl mb-2">YouTube / Community</h4>
                  <p className="text-neutral-400">Best for depth, education, trust-building, and audience value over time.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Content Pillars for TestGorilla</h3>
              <p className="text-neutral-400 mb-6">I believe social presence becomes stronger when it is built around repeatable themes rather than random posting. Some strong pillars could be:</p>
              <ul className="space-y-3">
                {[
                  "Fair hiring education",
                  "Employer insights and category thought leadership",
                  "Candidate empowerment",
                  "Product-adjacent awareness",
                  "Brand culture and external credibility"
                ].map((pillar, i) => (
                  <li key={i} className="flex items-center text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 shrink-0" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Consistency & Engagement</h3>
              <p className="text-neutral-400">
                Strong social brands do not only broadcast well. They respond well. Community engagement shows whether a brand feels human, responsive, and confident in public conversation. The goal is not just to post more — it is to communicate more clearly and consistently.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
