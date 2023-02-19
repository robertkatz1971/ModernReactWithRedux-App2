import { useState } from "react";

const Accordion = ({items}) => {

    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderItems = items.map((item, index) => {
        const isExpanded = (index === expandedIndex); 

        return ( 
            <div key={item.id}>
                <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );  
    });

    return (
        <div>
            {renderItems}
        </div>
    )
}

export default Accordion;