import React from "react"

import LinearCard from '../components/linear-card';
import indexStyles from './index.module.scss';

const IndexPage = () => {

    return (
        <div className={ indexStyles.wrapper }>
            <LinearCard>
                <h1 className={ indexStyles.title }>Roche Leigh Construction</h1>
            </LinearCard>
        </div>
    )
}

export default IndexPage
