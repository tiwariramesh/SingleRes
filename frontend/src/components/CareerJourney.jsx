import React from 'react';
import { motion } from 'framer-motion';

const CareerJourney = ({ experiences = [], timelineSteps = [] }) => {

    // Sort experiences by order just in case, though API sorts it.
    const sortedExperiences = [...experiences].sort((a, b) => (a.order || 0) - (b.order || 0));

    // Calculate dynamic timeline steps if we have sufficient experience data
    // We filter experiences that have a startDate
    const validExperiences = sortedExperiences.filter(exp => exp.startDate);

    let renderedSteps = timelineSteps;

    // If we have valid experiences with dates, we can try to build a better timeline
    if (validExperiences.length > 0) {
        // Sort to get the earliest start date
        const sortedByDate = [...validExperiences].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        const startYear = new Date(sortedByDate[0].startDate).getFullYear();
        const endYear = 2026; // User-defined current year for 10-year span
        const totalSpan = Math.max(endYear - startYear, 1);

        renderedSteps = sortedByDate.map((exp) => {
            const expYear = new Date(exp.startDate).getFullYear();
            const year = expYear.toString();
            const label = exp.timelineRole || exp.role.split(' ').slice(0, 2).join(' ');

            // Calculate position
            let pos;
            if (year === "2020") {
                pos = "50%";
            } else {
                pos = `${((expYear - startYear) / totalSpan) * 100}%`;
            }

            return { year, label, pos };
        });

        // Add PRESENT marker at the end
        renderedSteps.push({
            year: "2026",
            label: "PRESENT",
            pos: "100%",
            isEnd: true
        });
    }

    return (
        <section id="experience" className="py-16 bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900/50 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-5xl font-black text-pmi-navy dark:text-white tracking-tight mb-4">
                        Career <span className="text-pmi-blue dark:text-blue-400">Journey.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-slate-400 font-medium">
                        Progressive impact across global organizations and transformative initiatives
                    </p>
                </div>

                {/* Horizontal Timeline (Desktop) */}
                {renderedSteps.length > 0 && (
                    <div className="hidden lg:block relative mb-24 mt-12 px-4">
                        {/* Main Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-pmi-blue to-pmi-blue dark:from-slate-700 dark:via-blue-500 dark:to-blue-500 rounded-full" />

                        {/* Steps */}
                        <div className="relative w-full h-12">
                            {renderedSteps.map((step, i) => (
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
                )}

                {/* Left-Aligned Timeline Layout */}
                <div className="relative mt-16 px-4 md:px-0">
                    <div className="space-y-12">
                        {sortedExperiences.map((exp, index) => {
                            // Handle description parsing (markdown list to array)
                            const descPoints = typeof exp.description === 'string'
                                ? exp.description.split('\n').map(s => s.replace(/^-\s*/, '').trim()).filter(s => s)
                                : (Array.isArray(exp.description) ? exp.description : []);

                            // Handle Date formatting
                            let displayDate = exp.dateRange; // Fallback
                            if (exp.startDate) {
                                const start = new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                                const end = exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
                                displayDate = `${start} - ${end}`;
                            }

                            // Handle Duration calculation if missing
                            let duration = exp.duration;
                            if ((!duration || duration === 'Current') && exp.startDate) {
                                const start = new Date(exp.startDate);
                                const end = exp.endDate ? new Date(exp.endDate) : new Date();
                                const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
                                const years = Math.floor(diffMonths / 12);
                                const months = diffMonths % 12;
                                duration = years > 0 ? `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}` : `${months} mo${months > 1 ? 's' : ''}`;
                            }

                            // Handle Color (fallback)
                            const colorClass = exp.color || "bg-pmi-blue";
                            const textColorClass = colorClass.replace('bg-', 'text-');

                            return (
                                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-0">

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
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerJourney;
