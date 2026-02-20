import React from 'react';
import { motion } from 'framer-motion';

export const TimelineItem = ({
    exp,
    displayDate,
    duration,
    colorClass,
    textColorClass,
    descPoints
}) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">

            {/* LEFT: Metadata (Logo, Date, Duration) */}
            <div className="w-full md:w-64 flex flex-col md:items-end md:text-right shrink-0 md:pr-8 md:py-2">
                {/* Logo Placeholder */}
                <div className="hidden md:flex mb-3 items-center justify-end">
                    <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center overflow-hidden">
                        {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                        ) : (
                            <div className={`w-full h-full flex items-center justify-center ${colorClass} text-white`}>
                                <span className="font-bold text-xs">{exp.company?.substring(0, 2).toUpperCase()}</span>
                            </div>
                        )}
                    </div>
                </div>

                <h4 className="text-lg font-black text-slate-700 dark:text-white leading-tight mb-1">{displayDate}</h4>
                <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${!exp.endDate ? 'bg-emerald-500/10 text-emerald-600' : `${colorClass.replace('bg-', 'bg-opacity-10 ')} ${textColorClass}`}`}>
                    {duration}
                </span>
            </div>

            {/* CENTER: Line & Connector */}
            <div className="hidden md:block relative w-12 shrink-0">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400/30 dark:bg-slate-700 -translate-x-1/2" />
                {/* Connector Dot */}
                <div className={`absolute top-6 left-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 shadow-md -translate-x-1/2 z-10 ${colorClass}`} />
            </div>

            {/* RIGHT: Card Content */}
            <div className="flex-1 pb-8 md:pb-0">
                <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-[1.5rem] p-6 md:p-8 group relative overflow-hidden"
                >
                    {/* Mobile Logo & Meta Header */}
                    <div className="flex md:hidden items-center gap-4 mb-4 pb-4 border-b border-slate-50 dark:border-slate-700">
                        <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                            {exp.logo ? (
                                <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                            ) : (
                                <div className={`w-10 h-10 flex items-center justify-center ${colorClass} text-white`}>
                                    <span className="font-bold text-xs">{exp.company?.substring(0, 2).toUpperCase()}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-slate-800 dark:text-white">{displayDate}</h4>
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{duration}</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-2xl font-black text-pmi-navy dark:text-white group-hover:text-pmi-blue dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                        <h5 className={`text-base font-black ${textColorClass}`}>
                            {exp.company}
                        </h5>
                    </div>

                    <ul className="space-y-2.5">
                        {descPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                                {/* Custom colored bullet */}
                                <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${colorClass}`} />
                                <span className="text-sm">{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Decorative Gradient Blob */}
                    <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 blur-2xl ${colorClass}`} />
                </motion.div>
            </div>

        </div>
    );
};
