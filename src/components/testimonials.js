import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import testimonialsStyles from '../styles/testimonials.module.scss';
import Testimonial from './testimonial';

const Testimonials = () => (
    <StaticQuery query={graphql`
        query TestimonialsQuery {
            allTestimonialsJson {
              edges {
                node {
                  image
                  text
                  name
                }
              }
            }
          }`
        }
        render={ data => (
            <div id="testimonials" className={ testimonialsStyles.testimonialsWrapper }>
                <div className={ testimonialsStyles.titleWrapper }>
                    <h2>Testimonials</h2>
                    <p>See what our recent customers have said about us!</p>
                </div>

                <div className={ testimonialsStyles.testimonialsContent }>
                    { data.allTestimonialsJson.edges.map((testimonial, index) => (
                            <Testimonial testimonial={testimonial} key={index} />
                        )
                    )}
                </div>
            </div>
        )}
    />
)

export default Testimonials;