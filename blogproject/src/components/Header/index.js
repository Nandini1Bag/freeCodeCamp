import React from 'react';
import './style.css';
import SocialFollow from "../SocialFollow";

const Header=(props)=>{
        return (
            <header className="header">
               <nav className="headerMenu">
               {/* <a href="#">Home</a>
               <a href="#">Contact Us</a>
               <a href="#">About Us</a> */}
               </nav>
               {/* <SocialFollow size='2x' padding='25px 50px'/>              */}
           </header>
        )
    }

export default Header;
