import React from "react"

import LinearCard from '../components/linear-card';
import Button from '../components/button';
import Layout from '../components/layout';
import indexStyles from './index.module.scss';

const IndexPage = () => {

	return (
		<Layout>
			<div className={ indexStyles.firstImage }>
				<div className={ indexStyles.firstCard }>
					<LinearCard>
						<div className={ indexStyles.titleCard }>
							<h1 className={ indexStyles.title }>Roche Leigh Construction</h1>
							<p className={indexStyles.titleDescription } >Magna amet tempus etiam lorem nisl consequat</p>
							<Button>Some text</Button>

						</div>
					</LinearCard>
				</div>
			</div>

			<div className={ indexStyles.aboutText }>
				<h2 className={ indexStyles.aboutTitle }>About us</h2>
				<p>With over 20 years in the construction industry you can ensure your next project is in the best of hands..</p>
			</div>
		
		</Layout>
	)
}

export default IndexPage
