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
    <footer class="footer">
    <small class="footer-copyright">©2020 Nandini, Inc. All Rights Reserved.</small>
    </footer>
      </React.Fragment>
    
   )

 }

export default Layout