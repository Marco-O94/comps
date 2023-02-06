import { useState } from 'react';

function Accordion({ items }) {
const [expandedIndex, setExpandedIndex] = useState(0);

    const handleClick = () => {

    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        
        return (
            <div key={item.id}>
                <div onClick={() => setExpandedIndex(index) /* On click I'm going to pass a function that set the expandedIndex variable to the index of the current element.
            */}>{item.label}</div>
               {isExpanded && <div>{item.content}</div> /* With && we're gonna get the last truthy value*/}
            </div>
        )
    })
    return (
    <div>{renderedItems}</div>);
}

export default Accordion;