import React, { useRef, useState, useLayoutEffect } from 'react';

import carouselStyles from '../styles/carousel.module.scss';

const Carousel = () => {
	const targetRef = useRef();
	const centerSlideRef = useRef();
	const [ dimensions, setDimensions ] = useState({});

	useLayoutEffect(() => {
		setDimensions(targetRef.current.getBoundingClientRect());

		const centerSlideWidth = centerSlideRef.current.getBoundingClientRect().width;
		centerSlideRef.current.style.left = (dimensions.width - centerSlideWidth) / 2 + 'px';


	}, [ targetRef.current ])

	return (
		<div ref={ targetRef } className={ carouselStyles.carouselContainer }>
			<div className={ carouselStyles.slides }>
				<div className={ carouselStyles.slideLeft }></div>
				<div ref={ centerSlideRef } className={ carouselStyles.slideCenter }></div>
				<div className={ carouselStyles.slideRight }></div>
			</div>
			<div className={ carouselStyles.indicatorTrack }>
				<div className={ carouselStyles.indicator }></div>
				<div className={ carouselStyles.indicator }></div>
				<div className={ carouselStyles.indicatorActive }></div>
			</div>
		</div>
	);

}

export default Carousel;