import React from 'react';

import Img from 'gatsby-image';
import testimonialStyles from '../styles/testimonial.module.scss';

const Testimonial = ({ testimonial }) => {
    const { customerName } = testimonial;
    const { customerSpeech } = testimonial.customerSpeech;
    const { fixed } = testimonial.customerAvatar;

    return (
        <div className={ testimonialStyles.testimonialWrapper }>
            <Img fixed={fixed} className={ testimonialStyles.testimonialImage }/>
            <h3>{ customerName }</h3>
            <p className={ testimonialStyles.customerSpeech }>" { customerSpeech } "</p>
        </div>
    )
}

export default Testimonial;