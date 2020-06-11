import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
    {
        gatsbyJane: file(relativePath: { eq: "janedoe.jpg" }) {
                childImageSharp {
                    fixed(width: 512) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        gatsbyJohn: file(relativePath: { eq: "johndoe.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Gallery = () => (
    <StaticQuery 
        query={query}
        render={
            data => (
                <div>
                    <h1>Gallery</h1>
                    <Img fluid={data.gatsbyJohn.childImageSharp.fluid} alt="johndoe" />
                    <Img fixed={data.gatsbyJane.childImageSharp.fixed} alt="janedoe" />
                </div>
            )
        }
    />

)

export default Gallery;