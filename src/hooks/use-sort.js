import { useState } from "react";
const useSort = (data, config) => {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        if (label === sortBy) {
            if (sortOrder === null) {
                setSortOrder('asc');
                setSortBy(label);
            } else if (sortOrder === 'asc') {
                setSortOrder('desc');
                setSortBy(label);
            } else {
                setSortOrder(null);
                setSortBy(null);
            }
        } else {
            setSortBy(label);
            setSortOrder('asc');
        }
    };

    let sortedData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1: -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return {
        sortByLabel: handleClick,
        sortBy,
        sortOrder,
        sortedData,
    }
};

export default useSort;