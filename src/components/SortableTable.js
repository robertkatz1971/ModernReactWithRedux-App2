import { useState } from 'react';
import Table from './Table';
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';

const SortableTable = (props) => {

    const { config, data } = props;

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

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label)}>
                <div className='flex items-center'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        };
    });

    return (
        <Table {...props} config={updatedConfig} data={sortedData} />
    );
};

const getIcons = (label, sortBy, sortOrder) => {
    if (sortBy !== label) {
        return <div>
                    <GoArrowSmallUp />
                    <GoArrowSmallDown />
               </div>;
    } 
    if (sortOrder === 'asc') {
        return <div><GoArrowSmallUp /></div>;
    } else if (sortOrder === 'desc') {
        return <div><GoArrowSmallDown /></div>;
    } else {
        return <div>
                    <GoArrowSmallUp />
                    <GoArrowSmallDown />
               </div>;
    }
};

export default SortableTable;