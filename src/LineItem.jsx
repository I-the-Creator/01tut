import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

// get the props from 'ItemsList' component - parent
const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item">
            <input 
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                // to pass in the item.id the handleClick needs to be wrapped inside anonymous function
                onDoubleClick={() =>handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt 
                // to pass in the item.id the handleDelete needs to be wrapped inside anonymous function
                onClick={() => handleDelete(item.id)}
                role="button" 
                tabIndex="0" 
                // for accessability 
                aria-label={`Delete ${item.item}`}
            />
        </li>
    );
};

export default LineItem;