import React from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

import { RiCloseLine } from 'react-icons/ri';


import menuStyles from '../styles/menu.module.scss';
const Menu = ({ isOpen, clickHandler }) => {

    const handleNavigation = (target) => {
        navigate(target);
        clickHandler();
    }

    return (
        <div className={ `${menuStyles.menuWrapper}  ${ isOpen ? menuStyles.menuWrapperOpen : '' }` }>
            <div className={ `${menuStyles.menu} ${ isOpen ? menuStyles.menuOpen : '' }` }>
                <div className={ `${menuStyles.menuCloseWrapper} ${ isOpen ? menuStyles.menuCloseWrapperOpen : '' }` }>
                    <button onClick={ () => clickHandler() } className={ menuStyles.closeButton } >
                        <RiCloseLine size="2rem" />    
                    </button>
                </div>

                <nav className={ menuStyles.menuLinkWrapper }>
                    <ul className={ `${ menuStyles.menuLinks } ${ isOpen ? menuStyles.menuLinksOpen : '' }` }>
                        <li onClick={ () => handleNavigation('#about') } className={ menuStyles.menuLink }>
                            About us
                        </li>
                        <li onClick={ () => handleNavigation('#services') } className={ menuStyles.menuLink }>
                            Our Services
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
        </div>
    );
}

export default Menu;