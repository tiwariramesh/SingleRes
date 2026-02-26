import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const TimelineItem = ({
    exp,
    displayDate,
    colorValue,
    descPoints
}) => {
    return (
        <div className="interactive flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card p-6 shadow-sm group hover:-translate-y-1">
            <div className="relative mb-6">
                <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted shadow-sm">
                        {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-foreground text-background">
                                <span className="text-[8px] font-bold">{exp.company?.substring(0, 2).toUpperCase()}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="mb-2 break-words font-display text-xl font-bold leading-tight text-foreground">
                            {exp.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <h5 className="text-xs font-extrabold" style={{ color: colorValue }}>
                                {exp.company}
                            </h5>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block"></span>
                            <span className="text-[11px] font-black text-pmi-blue dark:text-blue-400 uppercase tracking-tight">
                                {displayDate}
                            </span>
                            {duration && (
                                <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                                    {duration}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ul className="space-y-2 relative z-10 flex-grow">
                {descPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: colorValue }} />
                        <span className="text-xs">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
