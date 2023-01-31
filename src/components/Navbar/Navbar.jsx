import React from 'react';
import {
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements.js';

const NavBar = () => {
    return (
        <div className='nav'>
            <Bars />

              <NavMenu>
            <NavLink to='/home' >
                Home
            </NavLink>
            <NavLink to='/notes' >
                Notes
            </NavLink>
            <NavLink to='/monsterdex' >
                MonsterDex
            </NavLink>
            <NavLink to='/about' >
                About
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        </div>
    )
}

export default NavBar