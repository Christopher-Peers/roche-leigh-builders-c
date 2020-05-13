import React from "react"

import layoutStyles from './layout.module.scss';

const IndexPage = ({ children }) => {

	return (
		<div className={ layoutStyles.main }>
			<div className={ layoutStyles.backgroundImage }></div>
			<div className={ layoutStyles.contentWrapper }>
				<div className={ layoutStyles.content }>
					{ children }
				</div>
			</div>
		</div>
	)
}

export default IndexPage
