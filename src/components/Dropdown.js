import { useState } from "react";

const Dropdown = ({options, selection, onSelect}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    const renderOptions = options.map((option) => {
        return (
            <div key={option.value} onClick={() => handleClick(option)}>
                {option.label}
            </div>
        );
    }); 

    let content = 'Select...';
    if (selection) {
        content = selection.label;
    }

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)}>{content}</div>
            {isOpen && <div>{renderOptions}</div>}
        </div>
    );
};

export default Dropdown;