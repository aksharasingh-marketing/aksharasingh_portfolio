"use client";

import { motion } from "framer-motion";

const questions = [
  {
    title: "What does the brand stand for?",
    description: "A strong communication system starts with clarity around identity. Before creating content, I think about what the brand wants to be known for, what it values, and what it should feel like to the audience.",
    delay: 0.2
  },
  {
    title: "Who is the audience, really?",
    description: "I think about the audience not as a demographic box, but as people with context, intent, and expectations. Good communication respects their attention and gives them a reason to care.",
    delay: 0.3
  },
  {
    title: "What should this piece of communication do?",
    description: "Every piece of content should have a job. It might be building awareness, strengthening trust, inviting engagement, or making the brand more memorable. Clarity of purpose improves clarity of communication.",
    delay: 0.4
  }
];

export default function Approach() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
              05 / Methodology
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              My Approach to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">Communications.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xl max-w-md mt-6 md:mt-0 leading-relaxed border-l border-white/10 pl-6 hidden md:block">
            I believe brand communication should do more than simply inform. It should help shape perception, build familiarity, and create a consistent emotional and strategic impression over time.
          </p>
        </motion.div>

        <p className="text-neutral-400 text-xl max-w-md mb-12 leading-relaxed border-l border-white/10 pl-6 md:hidden">
            I believe brand communication should do more than simply inform. It should help shape perception, build familiarity, and create a consistent emotional and strategic impression over time.
        </p>

        <div className="space-y-6">
          {questions.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: q.delay, ease: "easeOut" }}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row gap-6 md:items-center hover:bg-white/[0.04] transition-colors duration-500 transform-gpu will-change-[opacity,transform]"
            >
              <div className="text-3xl font-bold text-white/20 md:w-16 shrink-0">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{q.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">{q.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-neutral-500 font-light italic">
            "I am drawn to communication that feels clear without being flat, strategic without sounding forced, human without becoming vague, and creative without losing purpose."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
