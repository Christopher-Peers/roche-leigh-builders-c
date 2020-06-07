import React, { useState } from "react"

import NavBar from '../components/nav-bar';
import Menu from '../components/menu';
import layoutStyles from '../styles/layout.module.scss';

const Layout = ({ children }) => {
	const [ isMenuOpen, setMenuOpenState ] = useState(false);

	const toggleMenu = () => {
		setMenuOpenState(!isMenuOpen)
	}

	return (
		<div className={ layoutStyles.main }>
			<Menu isOpen={ isMenuOpen } clickHandler={ toggleMenu } />
			<div className={ layoutStyles.backgroundImage }></div>
			<div className={ layoutStyles.contentWrapper }>
				<NavBar clickHandler={ toggleMenu } />
				<div className={ layoutStyles.content }>
					{ children }
				</div>
			</div>
		</div>
	)
}



export default Layout;
