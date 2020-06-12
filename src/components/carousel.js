import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// import CarouselSlide from './carousel-slide';
import carouselStyles from '../styles/carousel.module.scss';
import { useStaticQuery } from 'gatsby';

const Carousel = () => {

	const previousJobsQueryData = useStaticQuery(graphql`
	{

		allContentfulPreviousJob {
			edges {
				node {
					id
					location
					images {
						file {
							url
						}
					}
					jobDescription {
						jobDescription
					}
				}
			}
		}
	}`)

	const [ previousJobs, setPreviousJobs ] = useState( parseJobData(previousJobsQueryData) );



	return (
	<></>
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