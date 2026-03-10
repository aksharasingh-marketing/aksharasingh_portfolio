import ScrollyCanvas from "@/components/ScrollyCanvas";
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

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/30 selection:text-white">
      <ScrollyCanvas />
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
