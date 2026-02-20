import { useMemo } from 'react';

export const useTimelineData = (experiences = [], timelineSteps = []) => {
    return useMemo(() => {
        // Sort experiences by order
        const sortedExperiences = [...experiences].sort((a, b) => (a.order || 0) - (b.order || 0));

        // Calculate dynamic timeline steps
        const validExperiences = sortedExperiences.filter(exp => exp.startDate);
        let renderedSteps = timelineSteps;

        if (validExperiences.length > 0) {
            const sortedByDate = [...validExperiences].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
            const startYear = new Date(sortedByDate[0].startDate).getFullYear();
            const endYear = 2026;
            const totalSpan = Math.max(endYear - startYear, 1);

            renderedSteps = sortedByDate.map((exp) => {
                const expYear = new Date(exp.startDate).getFullYear();
                const year = expYear.toString();
                const label = exp.timelineRole || exp.role.split(' ').slice(0, 2).join(' ');

                let pos;
                if (year === "2020") {
                    pos = "50%";
                } else {
                    pos = `${((expYear - startYear) / totalSpan) * 100}%`;
                }

                return { year, label, pos };
            });

            renderedSteps.push({
                year: "2026",
                label: "PRESENT",
                pos: "100%",
                isEnd: true
            });
        }

        return { sortedExperiences, renderedSteps };
    }, [experiences, timelineSteps]);
};
