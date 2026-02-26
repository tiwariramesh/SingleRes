import React from 'react';
import { FileText, Download, FileType } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
    const handleDownloadATS = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://raw.githubusercontent.com/tiwariramesh/SingleRes/main/src/assets/RameshTiwari_Resume_ATS.txt');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'RameshTiwari_Resume_ATS.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download failed:', error);
            window.open('https://raw.githubusercontent.com/tiwariramesh/SingleRes/main/src/assets/RameshTiwari_Resume_ATS.txt', '_blank');
        }
    };

    return (
        <section id="resume" className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-black text-pmi-navy dark:text-white tracking-tight">
                        Professional <span className="text-pmi-blue dark:text-blue-400">Resume.</span>
                    </h2>
                    <p className="text-muted-foreground dark:text-slate-400 font-light mt-2 text-xs">
                        Download my latest resume in your preferred format
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="surface-card flex items-center justify-between gap-4 p-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground leading-tight">Visual PDF</h3>
                                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Human-focused</p>
                            </div>
                        </div>
                        <Button
                            asChild
                            className="h-10 rounded-xl px-5 text-sm font-semibold"
                        >
                            <a href="https://github.com/tiwariramesh/SingleRes/raw/main/src/assets/RameshTiwari_Resume_PDF.pdf" download>
                                <Download size={16} /> Download
                            </a>
                        </Button>
                    </div>

                    <div className="surface-card flex items-center justify-between gap-4 p-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                <FileType size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground leading-tight">Plain text</h3>
                                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">ATS-friendly</p>
                            </div>
                        </div>
                        <Button
                            onClick={handleDownloadATS}
                            variant="outline"
                            className="h-10 rounded-xl px-5 text-sm font-semibold hover:border-[#6A317F] hover:bg-[#6A317F] hover:text-white"
                        >
                            Download
                        </Button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Verified and updated: Feb 2026</p>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
