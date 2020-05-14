import React from "react"

import LinearCard from '../components/linear-card';
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
							<p>Magna amet tempus etiam lorem nisl consequat</p>

						</div>
					</LinearCard>
				</div>

			</div>
		
			<p>lorem50</p>
		</Layout>
	)
}

export default IndexPage
