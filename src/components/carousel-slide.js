import React from 'react';

import carouselSlideStyles from '../styles/carousel-slide.module.scss';

const CarouselSlide = (props) => {
    const { image, text } = props;
    console.log('slide to be rendered: ', text)
    return (
        <div>
            <img src={ image } alt="" />
            <p>{ text }</p>
        </div>

    )
}

export default CarouselSlide;