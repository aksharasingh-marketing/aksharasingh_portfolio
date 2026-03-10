"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudy() {
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
            04 / Case Study
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            Throttle Theory.
          </h2>
          <p className="text-neutral-400 text-xl md:text-2xl max-w-2xl">
            An early-stage brand built around identity, culture, and community-led storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8 text-neutral-300 text-xl leading-relaxed"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">The Challenge</h3>
              <p>Create a brand identity that felt culturally sharp and emotionally engaging while still being structured enough to support social content, campaigns, and long-term connection.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">My Role</h3>
              <p>My contribution focused on brand direction, audience-focused messaging, digital marketing support, campaign thinking, and communication consistency across touchpoints. I worked on shaping how the brand should feel, what it should say, and how it should show up.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Key Learning</h3>
              <p className="italic text-neutral-400">"A brand becomes memorable through the consistency of its message, the distinctiveness of its tone, and the clarity of the world it creates for its audience."</p>
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-32 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-8">
              <h4 className="text-lg font-medium text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">What I Worked On</h4>
              <ul className="space-y-4">
                {[
                  "Brand positioning and messaging direction",
                  "Audience understanding & tone of voice",
                  "Promotional campaign support across digital",
                  "Social media content direction",
                  "Meta Ads & Google Ads support",
                  "GA4-based performance & funnel observation",
                  "CRM and remarketing workflow support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-neutral-400">
                    <ArrowUpRight className="w-5 h-5 mr-3 text-neutral-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
