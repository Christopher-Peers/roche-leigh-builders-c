import React from 'react';

import testimonialsStyles from '../styles/testimonials.module.scss';

const Testimonials = () => {
    return (
        <div className={ testimonialsStyles.testimonialsWrapper }>
            <div className={ testimonialsStyles.titleWrapper }>
                <h2>Testimonials</h2>
                <p>See what our recent customers have said about us!</p>
            </div>

            <div className={ testimonialsStyles.testimonialsContent }>
                <p>Test text</p>
            </div>
        </div>
    )
}

export default Testimonials;