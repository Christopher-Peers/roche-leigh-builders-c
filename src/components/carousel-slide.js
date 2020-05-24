import React from 'react';

import carouselSlideStyles from '../styles/carousel-slide.module.scss';

const CarouselSlide = ({ positionLeft, image, text }) => {
    return (
        <div className={ carouselStyles.slideLeft }>
            <img src={ image } alt="" />
            <p>{ text }</p>
        </div>

    )
}

export default CarouselSlide;