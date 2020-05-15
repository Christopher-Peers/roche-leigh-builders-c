import React from 'react';

import menuStyles from '../styles/menu.module.scss';
const Menu = () => {
    return (
        <div className={ menuStyles.menu }>
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