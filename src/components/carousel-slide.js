import React from 'react';

import carouselSlideStyles from '../styles/carousel-slide.module.scss';

const CarouselSlide = (props) => {
    const { jobId, index, imageUrl, jobLocation, jobDescription, isActive } = props;
    return (
    <div 
        key={ jobId }
        className={ `${carouselSlideStyles.slide} ${ isActive ? carouselSlideStyles.slideActive : '' }` }
        id={`slide-${ index }`}>

            <img className={ carouselSlideStyles.slide__image  } src={ imageUrl } />
            <div className={ carouselSlideStyles.slideDetails }>
                <h3>{ jobLocation }</h3>
                <p>{ jobDescription }</p>
            </div>

    </div>

)
    }

export default CarouselSlide;