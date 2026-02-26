import React from 'react';

export const TimelineScale = ({ steps }) => {
    if (!steps || steps.length === 0) return null;

    return (
        <div className="hidden lg:block relative mb-32 mt-12 px-6">
            {/* Main Line with Gradient */}
            <div className="absolute top-[8px] left-6 right-6 h-[3px] bg-slate-200 dark:bg-slate-800 rounded-full" />
            <div className="absolute top-[8px] left-6 right-6 h-[3px] bg-gradient-to-r from-slate-300 via-pmi-blue to-pmi-blue dark:from-slate-700 dark:via-blue-500 dark:to-blue-500 rounded-full opacity-80" />

            {/* Steps Markers */}
            <div className="relative w-full px-6">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className={`absolute top-0 flex flex-col items-center ${step.isStart ? 'items-start' : step.isEnd ? 'items-end' : ''}`}
                        style={{
                            left: step.pos,
                            transform: step.isStart ? 'none' : step.isEnd ? 'translateX(-100%)' : 'translateX(-50%)'
                        }}
                    >
                        {/* Dot / Marker */}
                        <div className={`w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-[3px] border-pmi-blue dark:border-blue-500 shadow-sm z-10 ${step.isStart ? 'ml-0' : step.isEnd ? 'mr-0' : ''}`} />

                        {/* Date Above Line */}
                        <div className={`absolute -top-9 w-32 ${step.isStart ? 'text-left' : step.isEnd ? 'text-right' : 'text-center'}`}>
                            <span className="block text-[13px] font-black text-pmi-navy/80 dark:text-white/80 tracking-tight">
                                {step.year} {step.isEnd ? '(PRESENT)' : ''}
                            </span>
                        </div>

                        {/* Role Below Line */}
                        <div className={`mt-4 w-32 md:w-40 ${step.isStart ? 'text-left' : step.isEnd ? 'text-right' : 'text-center'}`}>
                            <span className={`block text-[11px] font-black tracking-widest leading-tight ${step.isEnd ? 'text-pmi-blue dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`}>
                                {step.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
