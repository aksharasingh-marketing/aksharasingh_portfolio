"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, MessageSquare } from "lucide-react";

export default function ContentSamples() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
            07 / Execution
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter max-w-2xl mb-6">
            Sample <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Brand Content.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* LinkedIn Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#161616] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors transform-gpu will-change-[opacity,transform]"
          >
            <div className="flex items-center mb-6 text-blue-400">
              <Linkedin className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">LinkedIn Strategy</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-6">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  "Hiring is one of the most important decisions a company makes — and one of the easiest places for bias, inconsistency, and inefficiency to hide. <br/><br/>
                  The future of hiring will belong to companies that make their process not just faster, but fairer. The brands shaping that future will not win only with technology. They will win with trust."
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  "Top-of-funnel content should not feel like filler. It should build familiarity before it asks for action. <br/><br/>
                  The best brand content does not always sell directly. Sometimes its job is to make the right audience remember you, trust you, and want to hear from you again."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Instagram Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#161616] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors transform-gpu will-change-[opacity,transform]"
          >
            <div className="flex items-center mb-6 text-pink-500">
              <Instagram className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Instagram Concept</h3>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-medium">Carousel Flow</h4>
              <div className="flex flex-wrap gap-2 text-sm text-neutral-400">
                <span className="px-3 py-1 bg-white/5 rounded-full">Slide 1: Fair hiring is not just a process improvement.</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">Slide 2: It is a brand statement.</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">Slide 4: It shows what kind of company you are.</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">Slide 7: They build credibility in the moments that matter.</span>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-3">Post Caption</h4>
                <p className="text-neutral-300 text-sm italic">
                  How a company hires says a lot about how it thinks. Great hiring communication is not only clear — it is respectful, consistent, and human. That is what people remember.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#161616] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors transform-gpu will-change-[opacity,transform]"
          >
            <div className="flex items-center mb-6 text-amber-500">
              <Mail className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">TOFU Newsletter</h3>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-neutral-500 text-sm block mb-1">Subject Line</span>
                <span className="text-white font-medium block">What the strongest brands understand about hiring trust</span>
              </div>
              <div className="mb-6">
                <span className="text-neutral-500 text-sm block mb-1">Preview Text</span>
                <span className="text-neutral-300 block text-sm">Why fair, consistent hiring is becoming part of brand reputation.</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-6">
                <p className="text-neutral-400 text-sm leading-relaxed">
                  "Hiring is no longer just an operational function. It is part of how a company is experienced, remembered, and talked about. Every hiring interaction reflects something larger: how clearly a company communicates, how fairly it evaluates people, and how seriously it takes trust."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Community Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#161616] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors transform-gpu will-change-[opacity,transform]"
          >
            <div className="flex items-center mb-6 text-emerald-500">
              <MessageSquare className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">Community Engagement</h3>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-emerald-500 uppercase font-bold tracking-widest block mb-1">Positive Comment</span>
                <p className="text-neutral-300 text-sm border-l-2 border-emerald-500/50 pl-3">"Thank you — that means a lot. We care deeply about making communication clearer and more useful..."</p>
              </div>
              <div>
                <span className="text-xs text-blue-500 uppercase font-bold tracking-widest block mb-1">Curious Audience</span>
                <p className="text-neutral-300 text-sm border-l-2 border-blue-500/50 pl-3">"That's a great question. The goal is to make the hiring process more structured and fair without adding unnecessary friction."</p>
              </div>
              <div>
                <span className="text-xs text-pink-500 uppercase font-bold tracking-widest block mb-1">Critical Response</span>
                <p className="text-neutral-300 text-sm border-l-2 border-pink-500/50 pl-3">"Appreciate the honest perspective. Conversations like this matter... It's exactly why clarity and fairness in hiring are so important."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
