import React from 'react';
import { Link } from 'gatsby';
import { RiCloseLine } from 'react-icons/ri';


import menuStyles from '../styles/menu.module.scss';
const Menu = ({ isOpen, clickHandler }) => {

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
        </div>
    );
}

export default Menu;