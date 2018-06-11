import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
        &nbsp;
        <NavLink exact to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
        &nbsp;
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </header>
);

export default Header;
