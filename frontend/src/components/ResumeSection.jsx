import React from 'react';
import { Layout, FileText, Download, MousePointer2, Cpu, FileJson, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
    return (
        <section id="resume" className="py-16 bg-gradient-to-b from-white to-slate-50/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-14">
                    <h2 className="text-4xl md:text-5xl font-black text-pmi-navy tracking-tight">
                        Professional <span className="text-pmi-blue">Resume.</span>
                    </h2>
                    <p className="text-muted-foreground font-medium mt-3 text-base md:text-lg">
                        Download my detailed credentials in formats optimized for your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Visual CV */}
                    <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-full bg-white/60">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-pmi-blue flex items-center justify-center text-white shadow-xl shadow-pmi-blue/30">
                                <Layout size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-pmi-navy leading-none">Visual CV</h3>
                                <p className="text-[11px] font-black text-pmi-blue tracking-[0.1em] uppercase mt-2">Designed for Humans</p>
                            </div>
                        </div>

                        <div className="space-y-4 flex-grow">
                            {/* File Info Box */}
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/50 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-pmi-blue/10 flex items-center justify-center text-pmi-blue shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-pmi-blue animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-pmi-navy">Ramesh_Tiwari_Resume.pdf</p>
                                    <p className="text-[10px] font-bold text-slate-400">Portable Document Format • 250 KB</p>
                                </div>
                            </div>

                            {/* Tip Box */}
                            <div className="p-5 rounded-2xl bg-pmi-blue/[0.03] border border-pmi-blue/5 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-pmi-blue shrink-0">
                                    <Sparkles size={18} />
                                </div>
                                <p className="text-[13px] font-medium text-slate-600 leading-relaxed pt-1">
                                    <span className="font-black text-pmi-navy">Pro Tip:</span> Ideal for direct applications, portfolio links, and human recruiters.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 space-y-4">
                            <Button className="w-full h-14 rounded-2xl bg-pmi-navy hover:bg-black text-white font-black flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-pmi-navy/10">
                                <Download size={20} /> Download Visual PDF
                            </Button>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last Refined: February 16, 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* ATS Version */}
                    <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-full bg-white/60">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-600/30">
                                <Cpu size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-pmi-navy leading-none">ATS Version</h3>
                                <p className="text-[11px] font-black text-emerald-600 tracking-[0.1em] uppercase mt-2">Designed for Bots</p>
                            </div>
                        </div>

                        <div className="space-y-4 flex-grow">
                            {/* File Info Box */}
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/50 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-600 shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-pmi-navy">Ramesh_Tiwari_ATS.txt</p>
                                    <p className="text-[10px] font-bold text-slate-400">Clean Text Format • 45 KB</p>
                                </div>
                            </div>

                            {/* Tip Box */}
                            <div className="p-5 rounded-2xl bg-emerald-600/[0.03] border border-emerald-600/5 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                                    <MousePointer2 size={18} />
                                </div>
                                <p className="text-[13px] font-medium text-slate-600 leading-relaxed pt-1">
                                    <span className="font-black text-pmi-navy">Bot-Ready:</span> Stripped of styling to ensure 100% parsing accuracy in ATS systems.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 space-y-4">
                            <Button variant="outline" className="w-full h-14 rounded-2xl bg-white border-2 border-slate-200 text-pmi-navy font-black flex items-center justify-center gap-3 transition-all hover:border-pmi-navy hover:scale-[1.02] active:scale-95">
                                <Download size={20} /> Download Plain Text
                            </Button>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last Refined: February 16, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
