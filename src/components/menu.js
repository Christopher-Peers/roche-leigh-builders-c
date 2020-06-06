import React from 'react';

import menuStyles from '../styles/menu.module.scss';
const Menu = ({ isOpen }) => {

    return (
        <div className={ `${menuStyles.menu} ${ isOpen ? menuStyles.menuOpen : '' }` }>
            <div className={ menuStyles.menuCloseWrapper}>

            </div>

            <div className={ menuStyles.menuLinkWrapper }>
                <p>Home</p>
                <p>Services</p>
                <p>Recent Work</p>
                <p>Contact</p>
            </div>

        </div>
    );
}

export default Menu;