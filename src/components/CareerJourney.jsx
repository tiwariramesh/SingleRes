import React from 'react';
import { useTimelineData } from '@/hooks/useTimelineData';
import { TimelineScale } from './career/TimelineScale';
import { TimelineItem } from './career/TimelineItem';

const CareerJourney = ({ experiences = [] }) => {

    const { sortedExperiences, renderedSteps } = useTimelineData(experiences);

    return (
        <section id="experience" className="py-16 bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900/50 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-4xl font-black text-pmi-navy dark:text-white tracking-tight mb-4">
                        Career <span className="text-pmi-blue dark:text-blue-400">Journey.</span>
                    </h2>
                    <p className="text-xs text-muted-foreground dark:text-slate-400 font-light">
                        Progressive impact across global organizations and transformative initiatives
                    </p>
                </div>

                {/* Horizontal Timeline (Desktop) */}
                <TimelineScale steps={renderedSteps} />

                <div className="relative mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
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

                            const colorValue = exp.color || "#005FB9";

                            return (
                                <TimelineItem
                                    key={index}
                                    exp={exp}
                                    displayDate={displayDate}
                                    colorValue={colorValue}
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
