import React from 'react';

export const TimelineScale = ({ steps }) => {
    if (!steps || steps.length === 0) return null;

    return (
        <div className="hidden lg:block relative mb-24 mt-12 px-4">
            {/* Main Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-pmi-blue to-pmi-blue dark:from-slate-700 dark:via-blue-500 dark:to-blue-500 rounded-full" />

            {/* Steps */}
            <div className="relative w-full h-12">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="absolute top-0 transform -translate-x-1/2 flex flex-col items-center"
                        style={{ left: step.pos }}
                    >
                        {/* Dot */}
                        <div className="w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-4 border-pmi-blue dark:border-blue-500 -mt-1.5 mb-3 shadow-sm" />
                        {/* Labels */}
                        <div className="text-center w-28 md:w-32">
                            <span className="block text-sm font-black text-pmi-navy dark:text-white">
                                {step.isEnd ? "" : step.year}
                            </span>
                            <span className={`block text-[10px] md:text-xs font-bold mt-1 uppercase tracking-wide px-1 ${step.isEnd ? 'text-pmi-blue dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 line-clamp-2 md:whitespace-normal'}`}>
                                {step.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
