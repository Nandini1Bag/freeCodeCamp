import React from 'react';
import './style.css';

const Header=(props)=>{
        return (
            <header className="header">
               <nav className="headerMenu">
               <a href="#">Home</a>
               <a href="#">Contact Us</a>
               <a href="#">About Us</a>
               </nav> 
               <div>
                social media links
               </div>
            </header>
        )
    }

export default Header;
