import React from 'react';

import lineardCardStyles from './linear-card.module.scss';

const LinearCard = ({ children }) => {
	return (
		<div className={ lineardCardStyles.cardWrapper }>{ children }</div>
	)
}

export default LinearCard;