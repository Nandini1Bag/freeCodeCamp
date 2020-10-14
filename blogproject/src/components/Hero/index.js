import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';

const Hero =()=> {
    return (
        <div>
          <Card>
              <div>
              <Logo/>  
              </div>
              <Navbar/>
        </Card>  
        </div>
    )
}

export default Hero;
