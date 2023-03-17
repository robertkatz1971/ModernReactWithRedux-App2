import useSort from '../hooks/use-sort';
import Table from './Table';
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';

const SortableTable = (props) => {

    const { config, data } = props;
    const {sortByLabel, sortBy, sortOrder, sortedData} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => sortByLabel(column.label)}>
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