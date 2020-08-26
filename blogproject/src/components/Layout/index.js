import React from 'react';
import './style.css';
import SideBar from '../SideBar';


const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <SideBar  Aboutme={props.Aboutme}/>
    </div>
    <footer className="footer">
    <small className="footer-copyright">©2020 Nandini, Inc. All Rights Reserved.</small>
    </footer>
      </React.Fragment>
    
   )

 }

export default Layout