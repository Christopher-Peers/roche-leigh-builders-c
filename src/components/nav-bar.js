import React from 'react';

import navBarStyles from '../styles/nav-bar.module.scss';

const NavBar = () => {

    return (
        <div className={ navBarStyles.navBarWrapper }>
            <button className={ navBarStyles.hamburger }>
                <svg viewBox="0 0 100 80" width="22" height="40">
                    <rect width="100" height="8" rx="4"></rect>
                    <rect y="30" width="100" height="8" rx="4"></rect>
                    <rect y="60" width="100" height="8" rx="4"></rect>
                </svg>
            </button>
        </div>
    );
}

export default NavBar;