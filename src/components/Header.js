import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import Auth from './Authen/Auth';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Lastest
            </Link>
            <Link to="/" className="item">
                Most Likes
            </Link>
            <Link to="/" className="item">
                Actors
            </Link>
            <Link to="/" className="item">
                Category
            </Link>
            <Link to="/" className="item">
                Producer
            </Link>
            <Link to="/image/upload" className="item">
                Image
            </Link>
            <div className="right menu">
                <Search />        
                <Auth />                  
            </div>
        </div>
    );
}

export default Header;