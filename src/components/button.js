import React from 'react';

import buttonStyles from '../styles/button.module.scss';

const Button = ({ children }) => {
    return (
        <button className={ buttonStyles.button }>
            { children }
        </button>
    );
}

export default Button;