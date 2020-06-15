import React, { useState } from 'react';

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

		<div className={`${carouselStyles.carousel} active-slide-${currentSelection.index}`}>

			<button
				className={ carouselStyles.carouselButtonLeft }
				onClick={ () => previousSlide() }
				disabled={ currentSelection.index === 0 }>
				
				<FaAngleLeft size="2rem" />
			
			</button>

			<button
				className={ carouselStyles.carouselButtonRight }
				onClick={ () => nextSlide() }
				disabled={ currentSelection.index === previousJobs.length - 1 }>
				
				<FaAngleRight size="2rem" />
				
			</button>

			<div 
				className={ carouselStyles.slidesTrack }
				style={{
					'transform': `translateX(-${ currentSelection.index * ( 100 / previousJobs.length ) }%)`
				}}>
			
				{
					previousJobs.map((job, index) => (
						<CarouselSlide
							{ ...job }
							isActive={ currentSelection.index === index }
						/>
					))
				}
			
			</div>

		</div>

	)


}

const parseJobData = (data) => {
	return data.nodes.map((node, index) => {
		const result = {};
		result.index = index;
		result.id = node.id;
		result.jobLocation = node.location;
		result.imageUrl = `https:${node.images.file.url}?h=200`;
		result.jobDescription = node.jobDescription.jobDescription;
		return result;
	});
}

export default Carousel;