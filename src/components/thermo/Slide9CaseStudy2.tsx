import React from "react";
import { Activity, LayoutList, GitMerge, FileCheck } from "lucide-react";

export default function Slide9CaseStudy2() {
    return (
        <section className="min-h-screen bg-light-grey text-foreground flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-gray-200 py-20">
            <div className="max-w-6xl w-full">
                <div className="text-sm font-semibold tracking-widest text-steel mb-4 uppercase">Case Study 02</div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-2">CRM Workflow Discipline &amp; Cross-Functional Coordination</h2>
                <div className="text-xl text-gray-500 font-medium mb-12">Project Base: Cashfree / PhonePe</div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12 mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-navy mb-4 border-b border-gray-100 pb-4">Context</h3>
                            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                In high-volume onboarding and customer communication environments, workflow continuity depends heavily on visibility, follow-up discipline, and quick coordination across internal teams.
                            </p>

                            <h3 className="text-2xl font-bold text-navy mb-4 border-b border-gray-100 pb-4">My Role</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                I helped maintain stage-wise clarity across communication flows, ensured structured follow-ups, tracked progress through CRM systems, and worked with internal teams whenever blockers interrupted movement.
                            </p>
                        </div>

                        <div className="bg-light-grey p-8 rounded-lg">
                            <h3 className="text-xl font-bold text-navy mb-6">What I Handled</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <Activity className="text-steel shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">CRM-based tracking and communication continuity</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <LayoutList className="text-steel shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">Stage visibility and structured follow-up</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <GitMerge className="text-steel shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">Coordination across operations, product, engineering, and support teams</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FileCheck className="text-steel shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">Reduction of delays caused by missing information or unresolved issues</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-navy text-white p-8 rounded-lg flex gap-6 items-center">
                    <div className="hidden md:block w-2 bg-steel h-full min-h-[4rem]"></div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Why It Matters</h3>
                        <p className="text-blue-100 text-lg">
                            This work demonstrates strong execution hygiene — the ability to keep processes moving, maintain clarity across stakeholders, and support better customer journey continuity in complex environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
