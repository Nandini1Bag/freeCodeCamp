import React from 'react';
import './style.css';
import SideBar from '../SideBar';


const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <SideBar />
    </div>
    <div>
        <h1>THIS IS FOOTER FOR ALL PAGES</h1>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout