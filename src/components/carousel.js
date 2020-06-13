import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// import CarouselSlide from './carousel-slide';
import carouselStyles from '../styles/carousel.module.scss';
import { useStaticQuery } from 'gatsby';

const Carousel = ({ previousJobsData }) => {

	// const [ previousJobs, setPreviousJobs ] = useState( parseJobData(previousJobsQueryData) );

	return (
		<ul>
			{
				previousJobsData.nodes.map((job) => (
					<li key={ job.id }>
						<img src={ `https:${job.images.file.url}?w=200&fl=progressive` } />
						<h3>{ job.location }</h3>
						<p>{ job.jobDescription.jobDescription }</p>
					</li>
				))
			}
		</ul>
	)


}

const parseJobData = (data) => {
	return data.allContentfulPreviousJob.edges.map(edge => {
		const result = {};
		result.location = edge.location;
		result.imageUrl = edge.node.images.file.url;
		result.jobDescription = edge.node.jobDescription.jobDescription;
		return result;
	});
}

export default Carousel;