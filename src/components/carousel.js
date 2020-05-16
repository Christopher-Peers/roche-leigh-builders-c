import React from 'react';

import carouselStyles from '../styles/carousel.module.scss';

export default class Carousel extends React.Component {
    state = {}

    render() {
        return (
            <div className={ carouselStyles.carouselContainer }>
                <div className={ carouselStyles.slides }>
                    <div className={ carouselStyles.slideLeft }></div>
                    <div className={ carouselStyles.slideCenter }></div>
                    <div className={ carouselStyles.slideRight }></div>
                </div>
                <div className={ carouselStyles.indicatorTrack }>
                    <div className={ carouselStyles.indicator }></div>
                    <div className={ carouselStyles.indicator }></div>
                    <div className={ carouselStyles.indicatorActive }></div>
                </div>
            </div>
        );
    }
}