import React from 'react';
import { FileText, Download, FileType } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
    return (
        <section id="resume" className="py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-pmi-navy dark:text-white tracking-tight">
                        Professional <span className="text-pmi-blue dark:text-blue-400">Resume.</span>
                    </h2>
                    <p className="text-muted-foreground dark:text-slate-400 font-medium mt-2 text-sm md:text-base">
                        Download my latest resume in your preferred format
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Visual CV */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl flex items-center justify-between gap-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-pmi-blue/10 dark:bg-pmi-blue/20 flex items-center justify-center text-pmi-blue dark:text-blue-400 shrink-0">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-pmi-navy dark:text-slate-100 leading-tight">Visual PDF</h3>
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Human-Focused</p>
                            </div>
                        </div>
                        <Button
                            asChild
                            className="h-10 px-5 rounded-xl bg-pmi-navy hover:bg-black dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-pmi-navy/5"
                        >
                            <a href="https://github.com/tiwariramesh/SingleRes/raw/main/src/assets/RameshTiwari_Resume_PDF.pdf" download>
                                <Download size={16} /> Download
                            </a>
                        </Button>
                    </div>

                    {/* ATS Version */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl flex items-center justify-between gap-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                                <FileType size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-pmi-navy dark:text-slate-100 leading-tight">Plain Text</h3>
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">ATS-Friendly</p>
                            </div>
                        </div>
                        <Button
                            asChild
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold text-sm flex items-center gap-2 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 hover:border-emerald-500 transition-all hover:scale-[1.02]"
                        >
                            <a href="https://github.com/tiwariramesh/SingleRes/raw/main/src/assets/RameshTiwari_Resume_ATS.txt" download>
                                <Download size={16} /> Download
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Verified & Updated: Feb 2026</p>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
