"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll only within this component's height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale image from 1 to 1.15 over the scroll distance
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  // Section 1 (0% to 40% scroll): Initial Title
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  // Section 2 (50% scroll to bottom): Text Reveal
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Background Image with Zoom */}
        <motion.img
          style={{ scale, opacity: imageOpacity }}
          src="/sequence/frame_000_delay-0.066s.webp"
          alt="Akshara Singh Background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        
        {/* Text Container */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6 w-full h-full">
          
          {/* Section 1: Initial Hero View */}
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
          </motion.div>

          {/* Section 2: First Scroll Interaction */}
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

        </div>
        
        {children}
      </div>
    </div>
  );
}
