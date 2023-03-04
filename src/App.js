import { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {

    const [selection, setSelection] = useState(null);
    const [carSelection, setCarSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option);
    };

    const handleCarSelection = (option) => {
        setCarSelection(option);
    };

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'},
    ]
    const carOptions = [
        { label: 'Chevy', value: 'chevy'},
        { label: 'Buick', value: 'buick'},
        { label: 'Ford', value: 'ford'},
    ]

    return (
        <div className="flex">
            <Dropdown 
                options={options} 
                value={selection} 
                onChange={handleSelection} 
            />
            <Dropdown 
                options={carOptions} 
                value={carSelection} 
                onChange={handleCarSelection} 
            />
        </div>
    );
}

export default App;