import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">FoodShare Naija</Link>
                <div>
                    <Link to="/" className="nav-link">Home</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
