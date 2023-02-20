import { useState } from "react";
import { VscChevronDown,  VscChevronLeft} from "react-icons/vsc";

const Accordion = ({items}) => {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        if (expandedIndex === index) {
            index = -1;
        }
        setExpandedIndex(index);
    };

    const renderItems = items.map((item, index) => {
        const isExpanded = (index === expandedIndex); 
        const icon = <span className="text-2xl">{isExpanded ? <VscChevronDown /> : <VscChevronLeft />}</span>

        return ( 
            <div key={item.id}>
                <div 
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
                    onClick={() => handleClick(index)}
                >      
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );  
    });

    return (
        <div className="border-x border-t rounded">
            {renderItems}
        </div>
    )
}

export default Accordion;