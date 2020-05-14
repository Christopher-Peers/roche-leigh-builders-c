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
		
			<p>lorem50</p>
		</Layout>
	)
}

export default IndexPage
