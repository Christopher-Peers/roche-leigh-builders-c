import React from 'react';

import carouselSlideStyles from '../styles/carousel-slide.module.scss';

const CarouselSlide = (props) => (
    <li key={ props.jobId } className={ carouselSlideStyles.slide }>

            <img className={ carouselSlideStyles.slide__image  } src={ props.imageSrc } />
            <div className={ carouselSlideStyles.slideDetails }>
                <h3>{ props.jobLocation }</h3>
                <p>{ props.jobDescription }</p>
            </div>

    </li>

)

export default CarouselSlide;