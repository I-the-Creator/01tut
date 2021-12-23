import { FaTrashAlt } from 'react-icons/fa';
 
const Content = ({ items, handleCheck, handleDelete}) => {
    return (
        <main>
            {/* if items exist show the list */}
            {items.length ? (
            <ul>
                {items.map((item) => (  // iterate on items array
                    <li className="item" key={item.id}>
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
                        />
                    </li>

                ))}
            </ul>
            ) : (
                /* if the list is empty show the message */
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    );
};

export default Content;

