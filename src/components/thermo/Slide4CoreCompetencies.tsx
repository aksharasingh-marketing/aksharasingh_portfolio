import React from "react";

export default function Slide4CoreCompetencies() {
    const competencies = [
        "Paid Media Support",
        "B2B Marketing",
        "Campaign Execution",
        "CRM Workflows",
        "Funnel Optimization",
        "Lead Nurturing",
        "Performance Reporting",
        "Google Analytics 4",
        "Google Ads",
        "Meta Ads",
        "Stakeholder Communication",
        "Cross-Functional Coordination",
        "Brand Consistency",
        "Marketing Operations"
    ];

    return (
        <section className="min-h-screen bg-navy text-white flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-navy py-20">
            <div className="max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="w-12 h-1 bg-steel inline-block"></span>
                    Core Competencies
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
                    {competencies.map((comp, index) => (
                        <div key={index} className="bg-white/10 border border-white/20 p-4 rounded text-center text-sm md:text-base font-medium px-6 py-4 hover:bg-white/20 transition-colors">
                            {comp}
                        </div>
                    ))}
                </div>

                <div className="text-xl text-blue-100 font-light max-w-3xl border-l-4 border-steel pl-6 py-2">
                    I work best in environments where execution needs to be structured, measurable, and aligned across teams.
                </div>
            </div>
        </section>
    );
}
