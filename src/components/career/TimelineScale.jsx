import React from 'react';

export const TimelineScale = ({ steps }) => {
    if (!steps || steps.length === 0) return null;

    return (
        <div className="hidden lg:block relative mb-32 mt-12 px-6">
            <div className="absolute left-6 right-6 top-[8px] h-[4px] rounded-full bg-border/60" />
            <div className="absolute left-6 right-6 top-[8px] h-[4px] rounded-full bg-gradient-to-r from-[#005FB9] via-[#3F37C9] to-[#60A5FA] opacity-90" />

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
                        <div
                            className={`z-10 h-4 w-4 rounded-full border-2 border-white/90 bg-gradient-to-br from-[#005FB9] to-[#3F37C9] shadow-md ${step.isStart ? 'ml-0' : step.isEnd ? 'mr-0' : ''}`}
                        />

                        <div className={`absolute -top-9 w-32 ${step.isStart ? 'text-left' : step.isEnd ? 'text-right' : 'text-center'}`}>
                            <span className={`block font-display text-sm font-semibold tracking-tight ${step.isEnd ? 'text-[#3F37C9] dark:text-blue-400' : 'text-foreground/80'}`}>
                                {step.year} {step.isEnd ? '(PRESENT)' : ''}
                            </span>
                        </div>

                        <div className={`mt-4 w-32 md:w-40 ${step.isStart ? 'text-left' : step.isEnd ? 'text-right' : 'text-center'}`}>
                            <span className={`block text-xs font-semibold tracking-wide leading-tight ${step.isEnd ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {step.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
