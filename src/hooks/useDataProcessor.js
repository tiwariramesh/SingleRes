import { useMemo } from 'react';

/**
 * Custom hook to filter and sort profile data.
 * @param {Object} data - The raw data array (e.g., experiences, education).
 * @param {Object} options - Sorting and filtering options.
 * @returns {Array} - Processed data.
 */
export const useDataProcessor = (data = [], options = {}) => {
    const processedData = useMemo(() => {
        if (!data) return [];

        let result = [...data];

        // Filter by 'showInList' or similar flags if present logic existed (mock data usually clean)
        // Add filtering logic here if needed

        // Sort by order
        if (options.sortByOrder) {
            result.sort((a, b) => (a.order || 0) - (b.order || 0));
        }

        // Sort by date logic (if applicable)
        if (options.sortByDate) {
            result.sort((a, b) => new Date(b.startDate || b.date) - new Date(a.startDate || a.date));
        }

        return result;

    }, [data, options]);

    return processedData;
};
