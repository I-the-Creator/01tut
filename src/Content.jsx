import { useState } from 'react';
 
const Content = () => {
    const [name, setName] = useState('Andrew');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Andrew'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }
    
    const handleClick = () => {
        setCount(count + 1); // set the new value for 'count'
        console.log(count);  // '0' - the 'count' value will not changed because it's the value what was brought into the function, even though it was changed by setCount
    }

    const handleClick2 = () => {
        console.log(count);  // '1' -  the current 'count' value after setCount changed the value
    }

    const handleClick3 = (event) => {
        console.log(event.target.innerText);
    }
    
    return (
        <main>
            <p onDoubleClick={handleClick}>
                {/* get the 'name' state value */}
                Hello {name}!
            </p>
            {/* call handleNameChange function by click and setName change the 'name' state */}
            <button onClick={handleNameChange}>Change Name</button>

            <button onClick={handleClick}>Count</button>

            {/* if we don't add anonymous function as a wrapper for 'handle function with parameters' it will be invoked immediately  */}
            <button onClick={handleClick2}>Click It</button>
            {/* we can pass the 'event' object to the 'handleClick3' function */}
            <button onClick={(event) => handleClick3(event)}>Click It</button>
        </main>
    );
};

export default Content;

