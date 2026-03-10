import React from "react";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Slide12Closing() {
    return (
        <section className="min-h-screen bg-navy text-white flex flex-col justify-center px-8 md:px-20 lg:px-32 py-20">
            <div className="max-w-5xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-steel inline-block"></span>
                    What I Bring Forward
                </h2>

                <div className="space-y-6 text-xl text-blue-100 font-light mb-16 leading-relaxed max-w-4xl">
                    <p>
                        I bring a combination of campaign support experience, paid media exposure, CRM discipline, stakeholder coordination, and analytical thinking. I am especially motivated by roles where marketing contributes to larger business impact through structured execution, clear communication, and continuous performance improvement.
                    </p>
                    <p>
                        I am looking for opportunities where I can contribute to multi-channel marketing efforts, strengthen campaign delivery, and grow further in analytics-led, cross-functional environments.
                    </p>
                </div>

                <div className="bg-white/10 border border-white/20 p-8 rounded-lg mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Akshara Singh</h3>
                        <div className="text-steel font-medium mb-4 flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Bengaluru, India
                        </div>
                        <div className="space-y-2 text-blue-200">
                            <a href="mailto:akshara.singh.marketing@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-steel" /> akshara.singh.marketing@gmail.com
                            </a>
                            <a href="tel:+919980834519" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-steel" /> +91-9980834519
                            </a>
                            <a href="https://linkedin.com/in/aksharasingh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5 text-steel" /> LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="text-right border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8 text-2xl font-light text-blue-100">
                        Thank you for your time <br />and consideration.
                    </div>
                </div>

                <div className="flex justify-center text-xs text-white/40 tracking-widest uppercase mt-20">
                    Akshara Singh • Marketing &amp; Operations Portfolio
                </div>
            </div>
        </section>
    );
}
