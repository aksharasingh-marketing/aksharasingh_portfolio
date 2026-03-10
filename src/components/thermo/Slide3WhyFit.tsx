import React from "react";
import { LineChart, Users, Repeat, CheckSquare } from "lucide-react";

export default function Slide3WhyFit() {
    const blocks = [
        {
            title: "Campaign Execution",
            description: "Experience supporting campaigns and workflows across paid media, digital communication, and audience engagement.",
            icon: <CheckSquare className="w-8 h-8 text-steel mb-4" />
        },
        {
            title: "Performance Mindset",
            description: "Hands-on exposure to GA4, funnel analysis, campaign observation, and conversion-focused improvements.",
            icon: <LineChart className="w-8 h-8 text-steel mb-4" />
        },
        {
            title: "CRM & Process Discipline",
            description: "Strong at structured follow-ups, stage tracking, workflow continuity, and supporting movement through complex journeys.",
            icon: <Repeat className="w-8 h-8 text-steel mb-4" />
        },
        {
            title: "Cross-Functional Collaboration",
            description: "Worked with design, operations, engineering, product, and support teams to solve execution bottlenecks and improve continuity.",
            icon: <Users className="w-8 h-8 text-steel mb-4" />
        }
    ];

    return (
        <section className="min-h-screen bg-white text-foreground flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-light-grey py-20">
            <div className="max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 flex items-center gap-4">
                    <span className="w-12 h-1 bg-steel inline-block"></span>
                    Why I’m a Strong Fit
                </h2>

                <p className="text-xl text-gray-600 mb-12 max-w-3xl">
                    My background aligns strongly with roles that require structured marketing execution, cross-functional coordination, analytics-led decision-making, and support across multiple digital channels.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {blocks.map((block, index) => (
                        <div key={index} className="p-8 border border-gray-100 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                            {block.icon}
                            <h3 className="text-xl font-semibold text-navy mb-3">{block.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{block.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-navy text-white p-6 rounded-lg text-lg font-medium shadow-sm">
                    I bring a balance of analytical thinking, execution discipline, and adaptability — all of which are important in large, matrixed organizations.
                </div>
            </div>
        </section>
    );
}
