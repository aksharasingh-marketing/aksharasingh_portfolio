"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Brand & Content",
    skills: [
      "Brand Communications", "Content Creation", "Brand Voice", 
      "Marketing Communications", "Audience Engagement", "Newsletter Support", 
      "Brand Consistency"
    ]
  },
  {
    title: "Social & Growth",
    skills: [
      "Social Media Management", "Social Publishing", "Community Engagement", 
      "Instagram Marketing", "Campaign Optimization"
    ]
  },
  {
    title: "Tools & Analytics",
    skills: [
      "Google Ads", "Meta Ads", "Google Analytics 4 (GA4)", 
      "CRM", "Mailchimp", "Advanced Excel"
    ]
  },
  {
    title: "Collaboration & Workflows",
    skills: [
      "AI-assisted Content Workflows", "Cross-functional Collaboration", "Lead Nurturing", 
      "Content Performance Analysis", "Client Communication", "Remote Collaboration"
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Skills & Expertise</h2>
          <p className="text-neutral-400 text-xl max-w-2xl">
            A comprehensive toolkit spanning brand communication, growth marketing, and cross-functional leadership.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 hover:bg-white/[0.04] transition-colors duration-500 transform-gpu will-change-[opacity,transform]"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-start text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                    <span className="mr-3 text-neutral-600 group-hover:text-white transition-colors duration-300">▹</span>
                    <span className="leading-snug">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
