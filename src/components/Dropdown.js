import { useState } from "react";
import { GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({options, value, onChange}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    const renderOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" 
                 key={option.value} 
                 onClick={() => handleClick(option)}
            >
                {option.label}
            </div>
        );
    }); 

    return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && 
                <Panel className="absolute top-full">
                    {renderOptions}
                </Panel>}
        </div>
    );
};

export default Dropdown;