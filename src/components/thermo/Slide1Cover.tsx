import React from "react";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Slide1Cover() {
    return (
        <section className="min-h-screen bg-white text-foreground flex flex-col justify-center px-8 md:px-20 lg:px-32 border-b border-light-grey pb-10">
            <div className="max-w-4xl pt-20">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy mb-4">
                    AKSHARA SINGH
                </h1>
                <h2 className="text-2xl md:text-3xl text-steel font-medium mb-6">
                    Paid Media & Marketing Operations Portfolio
                </h2>
                <div className="w-24 h-1 bg-navy mb-8"></div>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-16 leading-relaxed">
                    B2B Campaign Execution | Paid Media Support | CRM Workflows | Performance Reporting
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-gray-700 font-medium">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-steel" />
                        <span>Bengaluru, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-steel" />
                        <a href="mailto:akshara.singh.marketing@gmail.com" className="hover:text-navy transition-colors">
                            akshara.singh.marketing@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-steel" />
                        <a href="tel:+919980834519" className="hover:text-navy transition-colors">
                            +91-9980834519
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-steel" />
                        <a href="https://linkedin.com/in/aksharasingh" target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-auto pt-20 text-xs text-gray-400 uppercase tracking-widest font-semibold">
                Portfolio tailored for Marketing / Paid Media / Campaign Operations roles
            </div>
        </section>
    );
}
