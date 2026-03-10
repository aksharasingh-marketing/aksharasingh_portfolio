import React from "react";

export default function Slide5Tools() {
    return (
        <section className="min-h-screen bg-white text-foreground flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-light-grey py-20">
            <div className="max-w-5xl w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 flex items-center gap-4">
                    <span className="w-12 h-1 bg-steel inline-block"></span>
                    Tools &amp; Platform Exposure
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Section 1 */}
                    <div className="bg-light-grey rounded-lg p-8 border border-gray-200 hover:border-steel transition-colors">
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-300 pb-3">Advertising &amp; Analytics</h3>
                        <ul className="space-y-4 text-gray-700 font-medium">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-steel"></div>Google Ads</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-steel"></div>Meta Ads Manager</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-steel"></div>Google Analytics 4</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-light-grey rounded-lg p-8 border border-gray-200 hover:border-steel transition-colors">
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-300 pb-3">CRM &amp; Workflow</h3>
                        <ul className="space-y-4 text-gray-700 font-medium">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-steel"></div>Salesforce CRM</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-steel"></div>Zoho CRM</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="bg-light-grey rounded-lg p-8 border border-gray-200 hover:border-steel transition-colors">
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-300 pb-3">Reporting &amp; Execution</h3>
                        <ul className="space-y-4 text-gray-700 font-medium">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-steel"></div>Excel &amp; Google Sheets</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-steel"></div>Microsoft 365</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-steel"></div>Canva</li>
                        </ul>
                    </div>
                </div>

                <div className="text-sm md:text-base text-gray-500 italic border-l-2 border-gray-300 pl-4 py-1">
                    Familiar with campaign reporting workflows, CRM-led coordination, and marketing technology fundamentals; quick to learn enterprise tools and systems.
                </div>
            </div>
        </section>
    );
}
