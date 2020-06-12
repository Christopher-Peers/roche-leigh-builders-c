import React from 'react';
import { useStaticQuery, StaticQuery, graphql } from 'gatsby';

import testimonialsStyles from '../styles/testimonials.module.scss';
import Testimonial from './testimonial';

const Testimonials = ({ testimonialsData }) => {
  console.log('>>>>>>>>>>>>>', testimonialsData)

    return (
        <div id="testimonials" className={ testimonialsStyles.testimonialsWrapper }>
            <div className={ testimonialsStyles.titleWrapper }>
                <h2>Testimonials</h2>
                <p>See what our recent customers have said about us!</p>
            </div>

            <div className={ testimonialsStyles.testimonialsContent }>
                { testimonialsData.nodes.map((testimonial, index) => (
                        <Testimonial testimonial={testimonial} key={index} />
                    )
                )}
            </div>
        </div>
    )
}

export default Testimonials;