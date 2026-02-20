import React from 'react';
import { useTimelineData } from '@/hooks/useTimelineData';
import { TimelineScale } from './career/TimelineScale';
import { TimelineItem } from './career/TimelineItem';

const CareerJourney = ({ experiences = [], timelineSteps = [] }) => {

    const { sortedExperiences, renderedSteps } = useTimelineData(experiences, timelineSteps);

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
                <TimelineScale steps={renderedSteps} />

                {/* Left-Aligned Timeline Layout */}
                <div className="relative mt-16 px-4 md:px-0">
                    <div className="space-y-12">
                        {sortedExperiences.map((exp, index) => {
                            // Logic moved here for now or could be further extracted
                            const descPoints = typeof exp.description === 'string'
                                ? exp.description.split('\n').map(s => s.replace(/^-\s*/, '').trim()).filter(s => s)
                                : (Array.isArray(exp.description) ? exp.description : []);

                            let displayDate = exp.dateRange;
                            if (exp.startDate) {
                                const start = new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                                const end = exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
                                displayDate = `${start} - ${end}`;
                            }

                            let duration = exp.duration;
                            if ((!duration || duration === 'Current') && exp.startDate) {
                                const start = new Date(exp.startDate);
                                const end = exp.endDate ? new Date(exp.endDate) : new Date();
                                const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
                                const years = Math.floor(diffMonths / 12);
                                const months = diffMonths % 12;
                                duration = years > 0 ? `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}` : `${months} mo${months > 1 ? 's' : ''}`;
                            }

                            const colorClass = exp.color || "bg-pmi-blue";
                            const textColorClass = colorClass.replace('bg-', 'text-');

                            return (
                                <TimelineItem
                                    key={index}
                                    exp={exp}
                                    displayDate={displayDate}
                                    duration={duration}
                                    colorClass={colorClass}
                                    textColorClass={textColorClass}
                                    descPoints={descPoints}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerJourney;
