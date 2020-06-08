import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import testimonialStyles from '../styles/testimonial.module.scss';

const Testimonial = ({ testimonial }) => {
    const { image, name, text } = testimonial.node;

    const query = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "images/janedoe.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
            }
        }
    `)

    return (
        <div className={ testimonialStyles.testimonialWrapper }>
            <Img className={ testimonialStyles.testimonialImage } fixed={ query.file.childImageSharp.fixed } />
            <h3>{ name }</h3>
            <p className={ testimonialStyles.customerSpeech }>{ text }</p>
        </div>
    )
}

export default Testimonial;