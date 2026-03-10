import AboutMe from "@/components/AboutMe";
import WhatIBring from "@/components/WhatIBring";
import WhyTestGorilla from "@/components/WhyTestGorilla";
import CaseStudy from "@/components/CaseStudy";
import Approach from "@/components/Approach";
import SocialStrategy from "@/components/SocialStrategy";
import ContentSamples from "@/components/ContentSamples";
import AIWorkflow from "@/components/AIWorkflow";
import First30Days from "@/components/First30Days";
import WhereHeaded from "@/components/WhereHeaded";

export default function ExportPage() {
  return (
    <main className="bg-[#121212] min-h-screen pb-24">
      <div className="py-32 px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
          Akshara Singh <br className="md:hidden" />
          <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500 block mt-4">
            Brand Communications & Social Media Portfolio
          </span>
        </h1>
        <p className="text-neutral-300 text-lg md:text-2xl mt-8 max-w-2xl mx-auto tracking-wide leading-relaxed">
          Building brand presence through thoughtful communication, audience-first content, and execution with purpose.
        </p>
      </div>

      <AboutMe />
      <WhatIBring />
      <WhyTestGorilla />
      <CaseStudy />
      <Approach />
      <SocialStrategy />
      <ContentSamples />
      <AIWorkflow />
      <First30Days />
      <WhereHeaded />
    </main>
  );
}
