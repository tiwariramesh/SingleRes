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
        <section id="resume" className="py-16 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-black text-pmi-navy dark:text-white tracking-tight">
                        Professional <span className="text-pmi-blue dark:text-blue-400">Resume.</span>
                    </h2>
                    <p className="text-muted-foreground dark:text-slate-400 font-light mt-2 text-xs">
                        Download my latest resume in your preferred format
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="surface-card flex items-center justify-between gap-3 p-4 md:p-6">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-brand/10 text-brand">
                                <FileText size={20} className="md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">Visual PDF</h3>
                                <p className="text-[10px] md:text-[11px] uppercase tracking-wider text-muted-foreground">Human-focused</p>
                            </div>
                        </div>
                        <Button
                            asChild
                            className="h-9 rounded-lg px-4 text-xs md:h-10 md:rounded-xl md:px-5 md:text-sm font-semibold"
                        >
                            <a href="https://github.com/tiwariramesh/SingleRes/raw/main/src/assets/RameshTiwari_Resume_PDF.pdf" download>
                                <Download size={14} className="md:mr-1" /> <span className="hidden md:inline">Download</span>
                            </a>
                        </Button>
                    </div>

                    <div className="surface-card flex items-center justify-between gap-3 p-4 md:p-6">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                <FileType size={20} className="md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">Plain text</h3>
                                <p className="text-[10px] md:text-[11px] uppercase tracking-wider text-muted-foreground">ATS-friendly</p>
                            </div>
                        </div>
                        <Button
                            onClick={handleDownloadATS}
                            variant="outline"
                            className="h-9 rounded-lg px-4 text-xs md:h-10 md:rounded-xl md:px-5 md:text-sm font-semibold hover:border-[#6A317F] hover:bg-[#6A317F] hover:text-white"
                        >
                            <span className="md:hidden">Export</span>
                            <span className="hidden md:inline">Download</span>
                        </Button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Verified and updated: Feb 2026</p>
                </div>

                <hr className="mt-8 mx-auto w-full max-w-lg border-border" />
            </div>
        </section>
    );
};

export default ResumeSection;
