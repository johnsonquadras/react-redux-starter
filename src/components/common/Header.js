import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active" >Home </IndexLink>
            {" |  "}
            <Link to="/crud" activeClassName="active"> CRUD </Link>
            {" |  "}
            <Link to="/about" activeClassName="active"> About </Link>
        </nav>
    ); 
};

export default Header;

