import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <div className='container mx-auto  flex items-center justify-between p-5  '>
                <div>
                    <NavLink to='/' className='nav-logo'>Abdullah</NavLink>
                </div>
                <div className='space-x-2 navstyle'>
                    <NavLink to='/blog' className='blog'>Blog</NavLink>
                    <NavLink to='/project' className='blog'>Project</NavLink>
                    <NavLink to='/about' className='blog'>About</NavLink>
                    <NavLink to='/contact' className='blog'>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;