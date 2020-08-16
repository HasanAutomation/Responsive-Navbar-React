import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { Link, NavLink } from 'react-router-dom';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/">THE LOGO</Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/products">Products</Link></li>
                <li><NavLink to="/users">Users</NavLink></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
