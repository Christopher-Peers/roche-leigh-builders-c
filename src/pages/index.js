import React from "react"

import { FaHardHat, FaHammer, FaPaintRoller, FaScrewdriver, FaRuler, FaWrench } from 'react-icons/fa';

import LinearCard from '../components/linear-card';
import Button from '../components/button';
import Layout from '../components/layout';
import Carousel from '../components/carousel';
import Testimonials from "../components/testimonials";
import indexStyles from '../styles/index.module.scss';

export const query = graphql`
	query {
		allContentfulPreviousJob {
			nodes {
				id
				images {
					file {
						url
					}
				}
				jobDescription {
					jobDescription
				}
				location
			}
		}
		allContentfulTestimonial {
			nodes {
				id
				customerName
				customerSpeech {
					customerSpeech
				}
				customerAvatar {
					file {
						url
					}
				}
			}
		}
	}
`

const IndexPage = ({ data: { allContentfulPreviousJob, allContentfulTestimonial } }) => {

	return (
		<Layout>

			<div className={ indexStyles.firstImage }>
				<div className={ indexStyles.firstCard }>
					<LinearCard>
						<div className={ indexStyles.titleCard }>
							<h1 className={ indexStyles.title }>Roche Leigh Construction</h1>
							<h6 className={ indexStyles.titleDescription } >Your local construction experts.</h6>
							<Button>Contact us</Button>

						</div>
					</LinearCard>
				</div>
			</div>

			<div className={ indexStyles.aboutText } id="about">
				<h2 className={ indexStyles.aboutTitle }>About us</h2>
				<p>With over 20 years in the construction industry you can ensure your next project is in the best of hands..</p>
				<div>
					<ul className={ indexStyles.qualifications }>
						<li className={ indexStyles.qualification1 }>
							<div className={ indexStyles.qualificationOuter }>
								<FaHardHat  size="2rem" />
							</div>
							<p>From initial contact</p>
						</li>
						<li className={ indexStyles.qualification2 }>
							<div className={ indexStyles.qualificationOuter }>
								<FaHammer  size="2rem" />
							</div>
							<p>To detailed planning</p>
						</li>
						<li className={ indexStyles.qualification3 }>
							<div className={ indexStyles.qualificationOuter }>
								<FaPaintRoller  size="2rem" />
							</div>
							<p>To quality workmanship</p>
						</li>
						<li className={ indexStyles.qualification4 }>
							<div className={ indexStyles.qualificationOuter }>
								<FaWrench  size="2rem" />
							</div>
							<p>To your dream completed</p>
						</li>
					</ul>
				</div>
			</div>

			<div className={ indexStyles.secondImage }></div>

			<LinearCard isRounded={ false }>
				<div className={ indexStyles.secondCard } id="services">
					<h2>Our Services</h2>
					<p>We offer a wide range of competitevly priced services. From complete builds to loft conversions we have you covered.</p>
					<Button>Contact us</Button>
				</div>
			</LinearCard>

			<div className={ indexStyles.recentWork }>
				<h2 className={ indexStyles.recentWorkTitle }>Recent Work</h2>
				<p>Here is a selection of recent work completed by us.</p>

				<Carousel previousJobsData={ allContentfulPreviousJob } />
				
			</div>

			<Testimonials testimonialsData={ allContentfulTestimonial } />
		
		</Layout>
	)
}

export default IndexPage
