"use client";

import { motion } from "framer-motion";

export default function First30Days() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
            09 / Onboarding
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            My First <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">30 Days.</span>
          </h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto leading-relaxed">
            If I joined TestGorilla, my first month would focus on understanding the brand deeply, identifying opportunities, and building momentum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden transform-gpu will-change-[opacity,transform]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full" />
            <div className="text-teal-400 font-bold mb-4">Days 1–10</div>
            <h3 className="text-2xl font-bold text-white mb-6">Understand</h3>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-start"><span className="mr-2 text-teal-500">•</span> Study brand voice and messaging style</li>
              <li className="flex items-start"><span className="mr-2 text-teal-500">•</span> Review LinkedIn, Instagram, and YouTube presence</li>
              <li className="flex items-start"><span className="mr-2 text-teal-500">•</span> Identify working themes & consistency gaps</li>
              <li className="flex items-start"><span className="mr-2 text-teal-500">•</span> Understand audiences: companies, teams, candidates</li>
            </ul>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden transform-gpu will-change-[opacity,transform]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
            <div className="text-emerald-400 font-bold mb-4">Days 10–20</div>
            <h3 className="text-2xl font-bold text-white mb-6">Organize</h3>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span> Map content pillars and recurring themes</li>
              <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span> Identify opportunities for stronger TOFU content</li>
              <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span> Understand engagement patterns & community signals</li>
              <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span> Identify AI workflow efficiencies</li>
            </ul>
          </motion.div>

          {/* Phase 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden transform-gpu will-change-[opacity,transform]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="text-blue-400 font-bold mb-4">Days 20–30</div>
            <h3 className="text-2xl font-bold text-white mb-6">Contribute</h3>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-start"><span className="mr-2 text-blue-500">•</span> Support content creation with stronger consistency</li>
              <li className="flex items-start"><span className="mr-2 text-blue-500">•</span> Help develop a repeatable communication rhythm</li>
              <li className="flex items-start"><span className="mr-2 text-blue-500">•</span> Support audience engagement thoughtfully</li>
              <li className="flex items-start"><span className="mr-2 text-blue-500">•</span> Drive content moments that build reach & recall</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
