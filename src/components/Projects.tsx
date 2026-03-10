"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  { 
    title: "Throttle Theory", 
    description: "Co-founded an F1-inspired D2C apparel brand. Managed digital acquisition campaigns and Instagram-led content to build pre-launch engagement.", 
    gradient: "from-blue-900/40 via-purple-900/40 to-black",
    tags: ["D2C", "Meta Ads", "GA4", "CRM"]
  },
  { 
    title: "Cashfree Payments", 
    description: "Coordinated B2B onboarding workflows from first conversation to activation. Segmented prospects and streamlined workstreams across multiple teams.", 
    gradient: "from-emerald-900/40 via-teal-900/40 to-black",
    tags: ["Inbound Hunting", "Cross-functional", "Onboarding"]
  },
  { 
    title: "PhonePe", 
    description: "Managed high-volume merchant outreach and acquisition. Customized messaging to convert leads across channels and deployed CRM systems to boost retention.", 
    gradient: "from-orange-900/40 via-red-900/40 to-black",
    tags: ["Inside Sales", "CRM", "Retention"]
  },
  { 
    title: "Simplilearn Solutions", 
    description: "Led consultative communication and structured CRM follow-ups with prospective learners to significantly improve lead-to-enrollment outcomes.", 
    gradient: "from-slate-800/40 via-zinc-800/40 to-black",
    tags: ["Consultative Sales", "Workflows", "Lead Nurturing"]
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] py-32 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Experience & Ventures</h2>
          <p className="text-neutral-400 text-xl max-w-2xl mb-16">
            A track record of scaling digital brands, acquiring B2B merchants, and optimizing performance marketing funnels.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-[background-color,border-color,box-shadow] duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] flex flex-col transform-gpu will-change-[opacity,transform]"
            >
              <div className={`aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-black/50 border border-white/5 relative ${proj.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <ExternalLink className="w-12 h-12 text-white/30 group-hover:text-white/80 transition-colors duration-500 group-hover:scale-110 transform" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-white mb-3 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-3">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-neutral-300 bg-white/5 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
