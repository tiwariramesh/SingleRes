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
        <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] p-6 group relative overflow-hidden h-full transition-all duration-300"
        >
            {/* Header: Role, Company, Dates */}
            <div className="relative mb-6">
                <div className="flex items-start gap-4">
                    {/* Small Logo */}
                    <div className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center shrink-0 overflow-hidden mt-1">
                        {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white" style={{ backgroundColor: colorValue }}>
                                <span className="font-bold text-[8px]">{exp.company?.substring(0, 2).toUpperCase()}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="text-[17px] font-black text-pmi-navy dark:text-white group-hover:text-pmi-blue dark:group-hover:text-blue-400 transition-colors leading-tight mb-2 break-words">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Points */}
            <ul className="space-y-2 relative z-10 flex-grow">
                {descPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: colorValue }} />
                        <span className="text-xs">{point}</span>
                    </li>
                ))}
            </ul>

            {/* Minimal Decorative Gradient blob */}
            <div
                className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full opacity-5 blur-2xl pointer-events-none"
                style={{ backgroundColor: colorValue }}
            />
        </motion.div>
    );
};
