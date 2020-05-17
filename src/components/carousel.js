import React, { useRef, useState, useLayoutEffect } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


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
				<FaAngleLeft className={ carouselStyles.leftAngle } size="2rem"/>
				<div className={ carouselStyles.slideLeft }></div>
				<div ref={ centerSlideRef } className={ carouselStyles.slideCenter }></div>
				<div className={ carouselStyles.slideRight }></div>
				<FaAngleRight className={ carouselStyles.rightAngle } size="2rem"/>
			</div>
			<div className={ carouselStyles.indicatorTrack }>
				<div className={ carouselStyles.indicator }></div>
				<div className={ carouselStyles.indicator }></div>
				<div className={ carouselStyles.indicatorActive }></div>
			</div>
		</div>
	);

	// Dynamic width with max setting
	// Initial setting of left for left and center slides, right for right slide
	// Re-draw for left and right click of the carousel buttons
	// Redraw on resize for desktop browsers or orientation change on mobile devices



}

export default Carousel;