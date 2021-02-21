import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/threads">Food Hacks</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
        </ul>
    )
};

export default NavBar;