import { useMemo } from 'react';

export const useTimelineData = (experiences = [], timelineSteps = []) => {
    return useMemo(() => {
        // Sort by order for card display (usually reverse-chronological)
        const sortedExperiences = [...experiences].sort((a, b) => (a.order || 0) - (b.order || 0));

        let renderedSteps = [];

        if (timelineSteps.length > 0) {
            const sortedTimelineSteps = [...timelineSteps].sort((a, b) => (a.order || 0) - (b.order || 0));
            const stepCount = sortedTimelineSteps.length;

            renderedSteps = sortedTimelineSteps.map((step, index) => {
                const pos = stepCount === 1 ? '0%' : `${(index / (stepCount - 1)) * 100}%`;

                return {
                    year: step.year,
                    label: step.label,
                    pos,
                    isStart: index === 0,
                    isEnd: index === stepCount - 1,
                };
            });
        }

        return { sortedExperiences, renderedSteps };
    }, [experiences, timelineSteps]);
};
