const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Andrew'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    
    const handleClick = () => {
        console.log('You clicked it');
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }

    const handleClick3 = (event) => {
        console.log(event.target.innerText);
    }
    
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It</button>

            {/* if we don't add anonymous function as a wrapper for 'handle function with parameters' it will be invoked immediately  */}
            <button onClick={() => handleClick2('Andrew')}>Click It</button>
            {/* we can pass the 'event' object to the 'handleClick3' function */}
            <button onClick={(event) => handleClick3(event)}>Click It</button>
        </main>
    );
};

export default Content;

