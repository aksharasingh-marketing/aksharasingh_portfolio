"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1 (0% scroll): Center
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2 (30% scroll): Left aligned
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3 (60% scroll): Right aligned
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6 w-full h-full">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
          Akshara Singh <br className="md:hidden" />
          <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500 block mt-2">
            Brand Communications & Social Media Portfolio
          </span>
        </h1>
        <p className="text-neutral-300 text-lg md:text-2xl mt-6 max-w-2xl mx-auto tracking-wide leading-relaxed">
          Building brand presence through thoughtful communication, audience-first content, and execution with purpose.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col justify-center items-start text-left w-full h-full px-4 md:px-0"
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            I build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">trust & reach.</span>
          </h2>
          <p className="text-neutral-400 mt-6 text-xl md:text-2xl leading-relaxed">
            Specializing in brand storytelling, social media thinking, and content execution designed to build recall.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col justify-center items-end text-right w-full h-full px-4 md:px-0"
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            Connecting <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">creativity & execution.</span>
          </h2>
          <p className="text-neutral-400 mt-6 text-xl md:text-2xl leading-relaxed">
            From early-stage brand building to audience engagement. I understand channels, clarity, and brand voice.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
