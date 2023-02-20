import { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {

    const [selection, setSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option);
    };

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'},
    ]
    return (
        <Dropdown 
            options={options} 
            selection={selection} 
            onSelect={handleSelection} 
        />
    );
}

export default App;