import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <header className="navBar-header">
            <div className="navBar-items">
                <NavLink to='/'><img className='logo'  alt='logo'/></NavLink>
            </div>
        </header>
    );
};