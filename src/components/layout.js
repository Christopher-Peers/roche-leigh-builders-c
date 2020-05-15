import React from "react"

import NavBar from '../components/nav-bar';
import Menu from '../components/menu';
import layoutStyles from '../styles/layout.module.scss';

const Layout = ({ children }) => {

	return (
		<div className={ layoutStyles.main }>
			<Menu />
			<div className={ layoutStyles.backgroundImage }></div>
			<div className={ layoutStyles.contentWrapper }>
				<NavBar />
				<div className={ layoutStyles.content }>
					{ children }
				</div>
			</div>
		</div>
	)
}

export default Layout;
