import React from "react";
import { Users, TrendingUp, Presentation } from "lucide-react";

export default function Slide10CaseStudy3() {
    return (
        <section className="min-h-screen bg-white text-foreground flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-light-grey py-20">
            <div className="max-w-6xl w-full">
                <div className="text-sm font-semibold tracking-widest text-steel mb-4 uppercase">Case Study 03</div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-2">Campaign Execution at Scale with Measurable Outcomes</h2>
                <div className="text-xl text-steel font-medium mb-12">Project Base: Viral Fission / Simplilearn</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold text-navy mb-4 border-b border-gray-200 pb-2">Objective</h3>
                        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                            Support campaign execution across multiple locations while maintaining coordination quality, stakeholder alignment, and audience engagement.
                        </p>

                        <h3 className="text-2xl font-bold text-navy mb-4 border-b border-gray-200 pb-2">My Contribution</h3>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                            I contributed to planning and executing campaigns across 10+ campuses, coordinating stakeholders, supporting outreach and communication, and conducting campaign audits and research to improve execution quality.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            I also worked on lead nurturing and structured communication workflows that supported better movement through the conversion funnel.
                        </p>
                    </div>

                    <div className="bg-light-grey rounded-lg p-8 border border-gray-200 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-navy mb-8 text-center">Outcomes</h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 p-4 bg-white rounded shadow-sm border border-gray-100">
                                <Presentation className="text-steel w-8 h-8 shrink-0" />
                                <span className="font-semibold text-lg text-navy">Executed campaigns across 10+ campuses</span>
                            </div>

                            <div className="flex items-center gap-6 p-4 bg-white rounded shadow-sm border border-gray-100">
                                <Users className="text-steel w-8 h-8 shrink-0" />
                                <span className="font-semibold text-lg text-navy">Engaged 5,000+ participants</span>
                            </div>

                            <div className="flex items-center gap-6 p-4 bg-white rounded shadow-sm border border-gray-100">
                                <TrendingUp className="text-steel w-8 h-8 shrink-0" />
                                <span className="font-semibold text-lg text-navy">Supported 12% improvement in conversion outcomes</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-navy text-white p-6 md:p-8 rounded-lg text-lg font-medium">
                    <span className="text-blue-300 font-bold block mb-2 uppercase tracking-wide text-sm">What This Shows</span>
                    This case study reflects my ability to work in execution-heavy environments where scale, consistency, follow-through, and reporting all matter.
                </div>
            </div>
        </section>
    );
}
