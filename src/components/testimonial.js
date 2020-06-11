import React from 'react';

import testimonialStyles from '../styles/testimonial.module.scss';

const Testimonial = ({ testimonial }) => {
    const { customerName } = testimonial.node;
    const { customerSpeech } = testimonial.node.customerSpeech;
    const { url } = testimonial.node.customerAvatar.file

    return (
        <div className={ testimonialStyles.testimonialWrapper }>
            <img className={ testimonialStyles.testimonialImage } src={`https:${url}`} />
            <h3>{ customerName }</h3>
            <p className={ testimonialStyles.customerSpeech }>{ customerSpeech }</p>
        </div>
    )
}

export default Testimonial;