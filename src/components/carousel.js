import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import CarouselSlide from './carousel-slide';
import carouselStyles from '../styles/carousel.module.scss';
import jobs from '../job-data/jobs.json';


const Carousel = () => {

	const [ previousJobs, setPreviousJobs ] = useState([ ...jobs ]);
	const [ selectedPreviousJob, setSelectedPreviousJob ] = useState(previousJobs[0]);

	// const targetRef = useRef();
	// const centerSlideRef = useRef();
	// const [ centerSlideLeft, setCenterSlideLeft ] = useState(0);
	// const [ dimensions, setDimensions ] = useState({});

	// const [ carouselCurrentIndex, setCarouselCurrentIndex ] = useState(0);
	// const [ carouselTotalSlides, setCarouselTotalSlides ] = useState(0);

	// useEffect(() => {
	// 	setDimensions(targetRef.current.getBoundingClientRect());
	// 	console.log('@@@@@', centerSlideRef.current)

	// 	const centerSlideWidth = centerSlideRef.current.getBoundingClientRect().width;
	// 	const centerSlideLeft = (dimensions.width - centerSlideWidth) / 2 + 'px';
	// 	setCenterSlideLeft(centerSlideLeft);


	// }, [ targetRef.current ])

	const navigateLeft = () => {
		
		const newIndex = selectedPreviousJob.index - 1;
		setSelectedPreviousJob(previousJobs[newIndex]);
	}
	
	const navigateRight = () => {
		const newIndex = selectedPreviousJob.index + 1;
		setSelectedPreviousJob(previousJobs[newIndex]);
	}

	return (
		<div>
			<button onClick={ () => navigateLeft() } disabled={ selectedPreviousJob.index === 0 }>
				<FaAngleLeft className={ carouselStyles.leftAngle } size="2rem" />
			</button>
			<button onClick={ () => navigateRight() } disabled={ selectedPreviousJob.index === previousJobs.length - 1 } >
				<FaAngleRight className={ carouselStyles.rightAngle } size="2rem" />
			</button>

			<div className={`cards-slider active-slide-${selectedPreviousJob.index}`}>

				<div className="cards-track" style={{ 'transform': `translateX(-${selectedPreviousJob.index * (100 / previousJobs.length )}%)` }}>
					{
						previousJobs.map((previousJob, index) => {
							return (<CarouselSlide key={ index } props={ previousJob } />)
						})
					}	
				</div>

			</div>

		</div>

		// <div ref={ targetRef } className={ carouselStyles.carouselContainer }>
		// 	<div className={ carouselStyles.slides }>
		// 			<CarouselSlide ref={ centerSlideRef } text={"some stuff"} positionLeft={ centerSlideLeft } />
		// 	</div>
		// 	<div className={ carouselStyles.indicatorTrack }>
		// 		<div className={ carouselStyles.indicator }></div>
		// 		<div className={ carouselStyles.indicator }></div>
		// 		<div className={ carouselStyles.indicatorActive }></div>
		// 	</div>
		// </div>
	);

	// Dynamic width with max setting
	// Initial setting of left for left and center slides, right for right slide
	// Re-draw for left and right click of the carousel buttons
	// Redraw on resize for desktop browsers or orientation change on mobile devices



}

export default Carousel;