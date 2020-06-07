import React from 'react';

import testimonialStyles from '../styles/testimonial.module.scss';

const Testimonial = ({ testimonial }) => {
    const { image, name, text } = testimonial;

    return (
        <div className={ testimonialStyles.testimonialWrapper }>
            <img className={ testimonialStyles.testimonialImage } src={ image } />
            <h3>{ name }</h3>
            <p className={ testimonialStyles.customerSpeech }>{ text }</p>
        </div>
    )
}

export default Testimonial;