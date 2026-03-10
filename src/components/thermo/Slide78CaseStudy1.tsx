import React from "react";
import { MoveRight } from "lucide-react";

export default function Slide78CaseStudy1() {
    return (
        <section className="min-h-screen bg-navy text-white flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-navy py-20">
            <div className="max-w-6xl w-full">
                <div className="text-sm font-semibold tracking-widest text-blue-300 mb-4 uppercase">Case Study 01</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Paid Media Support &amp; Funnel Optimization</h2>
                <div className="text-xl text-steel font-medium mb-12">Project: Throttle Theory</div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold border-b border-white/20 pb-2 mb-4 text-blue-100">Objective</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Build early-stage awareness, attract relevant traffic, and create a smoother journey from discovery to interest.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold border-b border-white/20 pb-2 mb-4 text-blue-100">What I Worked On</h3>
                            <p className="text-gray-300 leading-relaxed">
                                I supported campaign planning, creative alignment, audience direction, message clarity, and traffic-to-landing-page continuity. Alongside awareness-building activity, I reviewed user movement through the funnel to understand where attention was dropping and how campaign flow could be improved.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold border-b border-white/20 pb-2 mb-4 text-blue-100">What This Demonstrates</h3>
                            <p className="text-gray-300 leading-relaxed">
                                This work reflects my ability to think about paid media not just as ad delivery, but as part of a larger user journey involving targeting, messaging, experience, and follow-up.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                        <h3 className="text-xl font-bold mb-6 text-blue-100">My Contribution</h3>
                        <ul className="space-y-6 text-gray-200">
                            <li className="flex gap-4">
                                <MoveRight className="text-steel shrink-0 mt-1" />
                                <span>Supported awareness campaigns across Instagram, Google Ads, and Meta Ads</span>
                            </li>
                            <li className="flex gap-4">
                                <MoveRight className="text-steel shrink-0 mt-1" />
                                <span>Helped align messaging and visual direction with campaign objectives</span>
                            </li>
                            <li className="flex gap-4">
                                <MoveRight className="text-steel shrink-0 mt-1" />
                                <span>Used GA4 to observe traffic behavior and drop-off points</span>
                            </li>
                            <li className="flex gap-4">
                                <MoveRight className="text-steel shrink-0 mt-1" />
                                <span>Improved landing-page and remarketing relevance for stronger conversion support</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white text-navy p-8 rounded-lg mt-8">
                    <h3 className="text-2xl font-bold mb-6">Key Learnings from Campaign Execution</h3>
                    <p className="text-gray-600 mb-6 font-medium">This experience strengthened my understanding of how campaign performance improves when creative decisions are supported by funnel logic and audience relevance.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div className="border-l-2 border-steel pl-4">
                            <strong className="block mb-1 text-base">Message-Platform Alignment Matters</strong>
                            Campaign messaging performs better when it matches both audience expectation and platform behavior.
                        </div>
                        <div className="border-l-2 border-steel pl-4">
                            <strong className="block mb-1 text-base">Traffic Quality Focus</strong>
                            Effective awareness is about relevance, not just reach or vanity metrics.
                        </div>
                        <div className="border-l-2 border-steel pl-4">
                            <strong className="block mb-1 text-base">Post-Click Experience</strong>
                            Landing-page continuity is critical to keeping campaign intent intact.
                        </div>
                        <div className="border-l-2 border-steel pl-4">
                            <strong className="block mb-1 text-base">Data Drives Logic</strong>
                            GA4 helped identify where engagement weakened and where follow-up logic could be improved.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
