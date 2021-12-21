import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
 
const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,   // check sign enabled
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        // console.log(`key: ${id}`);
        /* iterate on items and check if item.id === id that got from input then create new object
         equal to original (using spread operator) and flip the current checked property value (!item.checked),
         otherwise return the current 'item' w/o changes
         */
        const listItems = items.map((item) => item.id === id ? { ...item,
        checked: !item.checked } : item);
        // send new listItem array to state via setItems
        setItems(listItems);
        // save state value to localStorage
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    return (
        <main>
            <ul>
                {items.map((item) => (  // iterate on items array
                    <li className="item" key={item.id}>
                        <input 
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                            style={(item.checked) ? { textDecoration: 'line-through'} : null}
                            onDoubleClick={() =>handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt 
                            role="button" 
                            tabIndex="0" 
                        />
                    </li>

                ))}
            </ul>
        </main>
    );
};

export default Content;

