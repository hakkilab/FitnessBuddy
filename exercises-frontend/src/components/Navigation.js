import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
    // display navigation bar
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create-exercise">Create Exercise</Link>
        </nav>
    );
}

export default Navigation;
