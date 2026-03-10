import Slide1Cover from "@/components/thermo/Slide1Cover";
import Slide2AboutMe from "@/components/thermo/Slide2AboutMe";
import Slide3WhyFit from "@/components/thermo/Slide3WhyFit";
import Slide4CoreCompetencies from "@/components/thermo/Slide4CoreCompetencies";
import Slide5Tools from "@/components/thermo/Slide5Tools";
import Slide6Experience from "@/components/thermo/Slide6Experience";
import Slide78CaseStudy1 from "@/components/thermo/Slide78CaseStudy1";
import Slide9CaseStudy2 from "@/components/thermo/Slide9CaseStudy2";
import Slide10CaseStudy3 from "@/components/thermo/Slide10CaseStudy3";
import Slide11HowIWork from "@/components/thermo/Slide11HowIWork";
import Slide12Closing from "@/components/thermo/Slide12Closing";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-steel/30 selection:text-navy font-sans">
      <Slide1Cover />
      <Slide2AboutMe />
      <Slide3WhyFit />
      <Slide4CoreCompetencies />
      <Slide5Tools />
      <Slide6Experience />
      <Slide78CaseStudy1 />
      <Slide9CaseStudy2 />
      <Slide10CaseStudy3 />
      <Slide11HowIWork />
      <Slide12Closing />
    </main>
  );
}
