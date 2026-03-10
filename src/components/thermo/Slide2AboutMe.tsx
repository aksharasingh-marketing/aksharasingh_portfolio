import React from "react";

export default function Slide2AboutMe() {
    return (
        <section className="min-h-screen bg-light-grey text-foreground flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-gray-200 py-20">
            <div className="max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 flex items-center gap-4">
                    <span className="w-12 h-1 bg-steel inline-block"></span>
                    About Me
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                        I am a digital marketing and campaign execution professional with experience across paid media support, CRM workflows, funnel optimization, stakeholder coordination, and performance reporting. My work has involved supporting campaign planning, improving communication workflows, analyzing audience behavior, and contributing to structured execution across fast-paced business environments.
                    </p>
                    <p>
                        I am particularly interested in roles where marketing is both creative and measurable — where campaign success depends not only on messaging and execution, but also on alignment, reporting, and continuous optimization. I enjoy working on marketing systems that are organized, data-aware, and built to support meaningful business outcomes.
                    </p>
                    <p>
                        My experience across digital campaigns, onboarding environments, customer-facing workflows, and cross-functional collaboration has helped me build a practical understanding of how to support end-to-end execution while maintaining clarity, consistency, and performance focus.
                    </p>
                </div>
            </div>
        </section>
    );
}
