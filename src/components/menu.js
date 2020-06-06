import React from 'react';

import { Link } from 'gatsby'

import menuStyles from '../styles/menu.module.scss';
const Menu = ({ isOpen }) => {

    return (
        <div className={ `${menuStyles.menu} ${ isOpen ? menuStyles.menuOpen : '' }` }>
            <div className={ menuStyles.menuCloseWrapper}>
                <button className={ menuStyles.closeButton } >X</button>
            </div>

            <nav className={ menuStyles.menuLinkWrapper }>
                <ul className={ menuStyles.menuLinks }>
                    <li className={ menuStyles.menuLink }>
                        <Link to="/">About us</Link>
                    </li>
                    <li className={ menuStyles.menuLink }>
                        <Link to="/">Our Services</Link>
                    </li>
                    <li className={ menuStyles.menuLink }>
                        <Link to="/">Contact us</Link>
                    </li>
                    <li className={ menuStyles.menuLink }>
                        <Link to="/">Testimonials</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Menu;