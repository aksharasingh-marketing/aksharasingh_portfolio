import React from "react";

export default function Slide6Experience() {
    const experiences = [
        {
            company: "Throttle Theory",
            role: "Founder, Marketing Project",
            description: "Built digital awareness campaigns, supported audience growth, monitored funnel behavior using GA4, and aligned campaign messaging with creative direction and conversion goals."
        },
        {
            company: "Cashfree Payments",
            role: "Workflow & Communication Support",
            description: "Supported onboarding and communication workflows, maintained execution continuity, and collaborated with internal teams to resolve blockers and improve journey flow."
        },
        {
            company: "PhonePe",
            role: "CRM & Operations Flow",
            description: "Managed high-volume prospect and merchant communication, CRM follow-ups, onboarding support, and structured workflow tracking."
        },
        {
            company: "Viral Fission / Simplilearn",
            role: "Campaign Support",
            description: "Contributed to campaign execution, lead nurturing, audience engagement, and conversion-oriented communication in high-volume environments."
        }
    ];

    return (
        <section className="min-h-screen bg-light-grey text-foreground flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-gray-200 py-20">
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 flex items-center gap-4">
                    <span className="w-12 h-1 bg-steel inline-block"></span>
                    Experience Snapshot
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white p-8 rounded border-l-4 border-steel shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold text-navy mb-1">{exp.company}</h3>
                            <div className="text-sm text-steel font-semibold uppercase tracking-wider mb-4">{exp.role}</div>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{exp.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-navy rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white text-center md:text-left">
                    <div className="flex-1 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4">
                        <div className="font-bold text-3xl mb-1">12%</div>
                        <div className="text-xs uppercase tracking-wider text-blue-200">conversion improvement supported</div>
                    </div>
                    <div className="flex-1 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4 md:pl-4">
                        <div className="font-bold text-3xl mb-1">10+</div>
                        <div className="text-xs uppercase tracking-wider text-blue-200">campuses covered in campaigns</div>
                    </div>
                    <div className="flex-1 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4 md:pl-4">
                        <div className="font-bold text-3xl mb-1">5,000+</div>
                        <div className="text-xs uppercase tracking-wider text-blue-200">participants engaged</div>
                    </div>
                    <div className="flex-1 md:pl-4">
                        <div className="font-bold text-3xl mb-1">50+</div>
                        <div className="text-xs uppercase tracking-wider text-blue-200">merchant-related workflow exposure</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
