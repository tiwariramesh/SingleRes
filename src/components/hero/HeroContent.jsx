import React from 'react';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroContent = ({ title, subtitle, bio }) => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pmi-blue/5 dark:bg-pmi-blue/20 border border-pmi-blue/10 dark:border-pmi-blue/30 text-pmi-blue dark:text-blue-300 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pmi-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pmi-blue"></span>
                </span>
                Available for Collaboration
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-pmi-navy dark:text-white leading-tight tracking-tight">
                    {/* Gradient Title */}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pmi-blue via-pmi-blue to-cyan-500 dark:from-blue-400 dark:to-cyan-300" dangerouslySetInnerHTML={{ __html: title || "Agile Project Manager" }} />
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-pmi-navy/70 dark:text-slate-300 tracking-tight leading-tight">
                    {subtitle}
                </h2>
            </div>

            <div className="text-base md:text-lg text-muted-foreground dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0" dangerouslySetInnerHTML={{ __html: bio }} />

            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                <Button
                    size="lg"
                    className="liquid-button h-12 px-8 rounded-2xl font-black text-sm tracking-wide bg-pmi-blue hover:bg-pmi-blue/90 flex items-center gap-2"
                    onClick={() => scrollToSection('experience')}
                >
                    Professional Journey <Icons.ArrowRight size={16} />
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="liquid-outline-button h-12 px-8 rounded-2xl font-black text-sm tracking-wide"
                    onClick={() => scrollToSection('contact')}
                >
                    Contact Me
                </Button>
            </div>
        </div>
    );
};
