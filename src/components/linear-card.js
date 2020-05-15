import React from 'react';

import lineardCardStyles from './linear-card.module.scss';

const LinearCard = ({ children, isRounded = true }) => {
	return (
		<div className={ `${ isRounded ? lineardCardStyles.cardWrapperRounded : lineardCardStyles.cardWrapper }` }>{ children }</div>
	)
}

export default LinearCard;