import { useState, useEffect, useRef } from "react";
import { GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({options, value, onChange}) => {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current?.contains(event.target)) {
                setIsOpen(false);
            };
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };

    }, []);

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
        <div className="w-48 relative" ref={divEl}>
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