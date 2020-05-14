import React from 'react';

import navBarStyles from './nav-bar.module.scss';

const NavBar = () => {

    return (
        <div className={ navBarStyles.navBarWrapper }>
            <button className={ navBarStyles.hamburger }>Click</button>
        </div>
    );
}

export default NavBar;