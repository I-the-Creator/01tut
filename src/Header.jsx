import React from 'react';

// Destructure props that got from APP.js 
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

// Default prop if it's not got for some reason form parent component
Header.defaultProps = {
    title: "Default Title"
}

export default Header;


