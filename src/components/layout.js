import React from "react"

import NavBar from '../components/nav-bar';
import layoutStyles from './layout.module.scss';

const Layout = ({ children }) => {

	return (
		<div className={ layoutStyles.main }>
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
