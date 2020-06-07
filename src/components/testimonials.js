import React from 'react';

import testimonialsStyles from '../styles/testimonials.module.scss';
import Testimonial from './testimonial';
import JaneDoe from '../images/janedoe.jpg';
import JohnDoe from '../images/johndoe.jpg';

const testimonialData = [
    {
        name: 'John Doe',
        image: JohnDoe,
        text: 'From start to finish the service was fantastic! Can\'t thank Steve enough.'
    },
    {
        name: 'Jane Doe',
        image: JaneDoe,
        text: 'So happy with the quality of work achieved on our new patio, would recomend Steve to anyone.'
    }
]


const Testimonials = () => {
    return (
        <div className={ testimonialsStyles.testimonialsWrapper }>
            <div className={ testimonialsStyles.titleWrapper }>
                <h2>Testimonials</h2>
                <p>See what our recent customers have said about us!</p>
            </div>

            <div className={ testimonialsStyles.testimonialsContent }>
                { testimonialData.map((testimonial, index) => {
                    return (
                        <Testimonial testimonial={testimonial} key={index} />
                    )
                }) }
            </div>
        </div>
    )
}

export default Testimonials;