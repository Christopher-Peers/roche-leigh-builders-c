import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import carouselStyles from '../styles/carousel.module.scss';
import CarouselSlide from './carousel-slide';

const Carousel = ({ previousJobsData }) => {

	const [ previousJobs, setPreviousJobs ] = useState( parseJobData(previousJobsData) );
	const [ currentSelection, setCurrentSelection ] = useState(previousJobs[0]);

	const nextSlide = () => {
		const newIndex = currentSelection.index + 1;
		setCurrentSelection(previousJobs[newIndex]);
	}
	
	const previousSlide = () => {
		const newIndex = currentSelection.index - 1;
		setCurrentSelection(previousJobs[newIndex]);
	}

	return (
		<div className={ carouselStyles.slidesTrack }>
			<button onClick={ () => previousSlide() } disabled={ currentSelection.index === 0 }>Previous</button>
			<button onClick={ () => nextSlide() } disabled={ currentSelection.index === previousJobs.length - 1 }>Next</button>
			<ul className={ carouselStyles.previousJobs }>
			
				<CarouselSlide
					key={ currentSelection.id }
					imageSrc={ `https:${currentSelection.imageUrl}?h=200` }
					jobDescription={ currentSelection.jobDescription }
					jobLocation={ currentSelection.location }
					jobId={ currentSelection.id }
				/>
			
			</ul>

		</div>
	)


}

const parseJobData = (data) => {
	return data.nodes.map((node, index) => {
		const result = {};
		result.index = index;
		result.id = node.id;
		result.location = node.location;
		result.imageUrl = node.images.file.url;
		result.jobDescription = node.jobDescription.jobDescription;
		return result;
	});
}

export default Carousel;