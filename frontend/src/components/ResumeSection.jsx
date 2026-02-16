import React from 'react';
import { Layout, FileText, Download } from 'lucide-react';

const ResumeSection = () => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl font-black text-pmi-navy tracking-tight">
                        Professional <span className="text-pmi-blue">Resume.</span>
                    </h2>
                    <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
                        Download my resume in the format that best suits your needs. Whether you prefer a visual aesthetic or a machine-readable version.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Visual CV */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-border group hover:shadow-2xl transition-all duration-500">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-3xl bg-pmi-purple/10 flex items-center justify-center text-pmi-purple">
                                <Layout size={40} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-pmi-navy">Visual CV</h3>
                                <p className="text-muted-foreground font-medium mt-2">Enhanced with modern design</p>
                            </div>
                            <ul className="text-left space-y-3 w-full border-y border-border py-6 px-4">
                                <li className="flex items-center gap-3 text-sm font-bold text-pmi-navy/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pmi-purple" /> Dynamic & Interactive
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-pmi-navy/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pmi-purple" /> Best for Human Viewers
                                </li>
                            </ul>
                            <button className="w-full py-5 rounded-2xl bg-pmi-navy text-white font-black flex items-center justify-center gap-3 hover:bg-black transition-colors shadow-lg shadow-pmi-navy/20">
                                <Download size={20} /> Download Visual CV
                            </button>
                        </div>
                    </div>

                    {/* ATS Version */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-border group hover:shadow-2xl transition-all duration-500">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-3xl bg-pmi-green/10 flex items-center justify-center text-pmi-green">
                                <FileText size={40} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-pmi-navy">ATS Version</h3>
                                <p className="text-muted-foreground font-medium mt-2">Optimized for algorithms</p>
                            </div>
                            <ul className="text-left space-y-3 w-full border-y border-border py-6 px-4">
                                <li className="flex items-center gap-3 text-sm font-bold text-pmi-navy/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pmi-green" /> ATS Friendly Structure
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-pmi-navy/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pmi-green" /> High Readability Score
                                </li>
                            </ul>
                            <button className="w-full py-5 rounded-2xl bg-white text-pmi-navy border-2 border-border font-black flex items-center justify-center gap-3 hover:border-pmi-green hover:text-pmi-green transition-all">
                                <Download size={20} /> Download Plain Text
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
