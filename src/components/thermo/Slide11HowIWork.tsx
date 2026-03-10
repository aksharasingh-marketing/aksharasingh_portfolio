import React from "react";

export default function Slide11HowIWork() {
    const steps = [
        {
            num: "01",
            title: "Understand the objective",
            desc: "I start by identifying the real purpose of the campaign: awareness, engagement, lead generation, conversion, or nurturing."
        },
        {
            num: "02",
            title: "Clarify the audience and message",
            desc: "I focus on what the audience needs to understand, why the message matters, and how the campaign should be positioned."
        },
        {
            num: "03",
            title: "Align workflows and assets",
            desc: "Campaign performance improves when teams, timelines, creatives, and messaging all move in the same direction."
        },
        {
            num: "04",
            title: "Track movement and identify gaps",
            desc: "I observe where the funnel weakens, where workflows slow down, and where better coordination can improve outcomes."
        },
        {
            num: "05",
            title: "Refine continuously",
            desc: "I believe in optimizing based on signals, not assumptions — improving what the data and workflow patterns reveal."
        }
    ];

    return (
        <section className="min-h-screen bg-light-grey text-foreground flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-gray-200 py-20">
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-16 flex items-center gap-4">
                    <span className="w-12 h-1 bg-steel inline-block"></span>
                    How I Approach Marketing Execution
                </h2>

                <div className="space-y-8 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                            <div className="text-4xl md:text-5xl font-black text-gray-300 group-hover:text-steel transition-colors">
                                {step.num}
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded flex-1 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end">
                    <div className="bg-navy text-white p-6 rounded-lg text-lg font-medium max-w-2xl border-l-4 border-steel">
                        I like marketing environments where execution is clear, collaborative, and measurable.
                    </div>
                </div>
            </div>
        </section>
    );
}
