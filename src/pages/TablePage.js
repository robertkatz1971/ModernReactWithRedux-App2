import SortableTable from '../components/SortableTable';

const fruits = [
    {name: 'Orange', color: 'bg-orange-500', score: 5},
    {name: 'Apple', color: 'bg-red-500', score: 3},
    {name: 'Banana', color: 'bg-yellow-500', score: 1},
    {name: 'Lime', color: 'bg-green-500', score: 4},
];

const config = [
    { label: 'Name', 
      render: (fruit) => fruit.name, 
      sortValue: (fruit) => fruit.name 
    },
    { label: 'Color', 
      render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}></div> 
    },
    { label: 'Score', 
      render: (fruit) => fruit.score, 
      sortValue: (fruit) => fruit.score
    },
];

const getKey = (fruit) => {
    return fruit.name;
}

const TablePage = () => {

    return (
        <div>
            <SortableTable data={fruits} config={config} getKey={getKey} />
        </div>
    );

}

export default TablePage;