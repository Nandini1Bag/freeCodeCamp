import React from 'react';
import './style.css';

const Navbar=()=> {
    return (
        <div className="navbar">
            <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Posts</a></li>
            </ul>
            <div className="search">
            <input type="text" placeholder="Search"/>
            <img src={require('../../assets/icons/search.png')} alt="search"/>
            </div>
        </div>
    )
}

export default Navbar;