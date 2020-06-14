import React from "react"

import {
	FaHardHat,
	FaHammer,
	FaPaintRoller,
	FaScrewdriver,
	FaRuler,
	FaWrench,
	FaRegEnvelope,
	FaMobileAlt,
	FaFacebookSquare
} from 'react-icons/fa';

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
				<div className={ indexStyles.qualificationsWrapper }>
					<ul className={ indexStyles.qualifications }>
						<li className={ indexStyles.qualification1 }>
							<div className={ indexStyles.qualificationOuter }>
								<FaHardHat  size="2rem" />
							</div>
							<p>Initial contact to</p>
						</li>
						<li className={ indexStyles.qualification2 }>
							<div className={ indexStyles.qualificationOuter }>
								<FaHammer  size="2rem" />
							</div>
							<p>Detailed planning</p>
						</li>
						<li className={ indexStyles.qualification3 }>
							<div className={ indexStyles.qualificationOuter }>
								<FaPaintRoller  size="2rem" />
							</div>
							<p>Quality workmanship</p>
						</li>
						<li className={ indexStyles.qualification4 }>
							<div className={ indexStyles.qualificationOuter }>
								<FaWrench  size="2rem" />
							</div>
							<p>Dream completion</p>
						</li>
					</ul>
				</div>
			</div>

			<div className={ indexStyles.servicesWrapper }>

				<div className={ indexStyles.secondImage }></div>

				<div className={ indexStyles.secondCardWrapper }>
					<LinearCard isRounded={ false } >
						<div className={ indexStyles.secondCard } id="services">
							<h2>Our Services</h2>
							<p>We offer a wide range of competitevly priced services. From complete builds to loft conversions we have you covered.</p>
							<Button>Contact us</Button>
						</div>
					</LinearCard>
				</div>

			</div>

			<div className={ indexStyles.recentWork }>
				<h2 className={ indexStyles.recentWorkTitle }>Recent Work</h2>
				<p>Here is a selection of recent work completed by us.</p>

				<Carousel previousJobsData={ allContentfulPreviousJob } />
				
			</div>

			<Testimonials testimonialsData={ allContentfulTestimonial } />

			<div className={ indexStyles.contactTitleWrapper }>
				<h2>Contact Us</h2>
				<p>Get in touch today, let us help you take the first step to creating your dreams.</p>
			</div>

			<div className={ indexStyles.contactDetails }>
				<h2 className={ indexStyles.contactDetails__title }>Get in touch</h2>
				<ul className={ indexStyles.contactItems }>
					<li className={ indexStyles.contactItem__outer }>
						<div className={ indexStyles.contactItem__iconWrapper }>
							<FaRegEnvelope  size="2rem" />
						</div>
						<p>enquiries@rlcon.co.uk</p>
					</li>
					<li className={ indexStyles.contactItem__outer }>
						<div className={ indexStyles.contactItem__iconWrapper }>
							<FaMobileAlt  size="2rem" />
						</div>
						<p>07957 076 699</p>
					</li>
					<li className={ indexStyles.contactItem__outer }>
						<div className={ indexStyles.contactItem__iconWrapper }>
							<FaFacebookSquare  size="2rem" />
						</div>
						<p>Facebook</p>
					</li>
				</ul>

			</div>


		
		</Layout>
	)
}

export default IndexPage
