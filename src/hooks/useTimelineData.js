import { useMemo } from 'react';

export const useTimelineData = (experiences = [], timelineSteps = []) => {
    return useMemo(() => {
        // Sort experiences by startDate to find true timeline bounds
        const sortedByDate = [...experiences]
            .filter(exp => exp.startDate)
            .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

        // Sort by order for the card display (usually reverse-chronological)
        const sortedExperiences = [...experiences].sort((a, b) => (a.order || 0) - (b.order || 0));

        let renderedSteps = [];

        if (sortedByDate.length > 0) {
            const firstExp = sortedByDate[0];
            const lastExp = sortedByDate[sortedByDate.length - 1];

            const startDate = new Date(firstExp.startDate);
            const startTime = startDate.getTime();

            // Current time for the 'PRESENT' calculation
            const endTime = new Date().getTime();
            const totalDuration = endTime - startTime;

            renderedSteps = sortedByDate.map((exp, index) => {
                const expDate = new Date(exp.startDate);
                const year = expDate.getFullYear().toString();
                const label = exp.timelineRole || exp.role.split(' ').slice(0, 2).join(' ');

                let pos;
                if (index === 0) {
                    pos = "0%";
                } else if (index === sortedByDate.length - 1 && !exp.endDate) {
                    pos = "100%";
                } else {
                    const diff = expDate.getTime() - startTime;
                    pos = `${(diff / totalDuration) * 100}%`;
                }

                return {
                    year,
                    label,
                    pos,
                    isStart: index === 0,
                    isEnd: index === sortedByDate.length - 1 && !exp.endDate
                };
            });
        }

        return { sortedExperiences, renderedSteps };
    }, [experiences]);
};
