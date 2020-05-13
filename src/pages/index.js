import React from "react"

import LinearCard from '../components/linear-card';
import Layout from '../components/layout';
import indexStyles from './index.module.scss';

const IndexPage = () => {

	return (
		<Layout>
			<LinearCard>
				<h1 className={ indexStyles.title }>Roche Leigh Construction</h1>
			</LinearCard>
		</Layout>
	)
}

export default IndexPage
