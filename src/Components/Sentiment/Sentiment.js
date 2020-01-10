import React from 'react';

import './style.css'
import {
    getConfidenceClass,
    renderConfidenceContainers
} from '../../utils/confidenceResults';

const confidenceContainers = renderConfidenceContainers();

export default class Sentiment extends React.Component {

    render() {

        const {detail} = this.props;
  
        return (
            <div style={styles.Container}>

                {confidenceContainers}

                <h1>Sentiment Analysis</h1>
                <div style={styles.DetailContainer} className={getConfidenceClass(detail.polarity_confidence)}>
                    Polarity: {detail.polarity}
                </div>
                <div style={styles.DetailContainer} className={getConfidenceClass(detail.subjectivity_confidence)}>
                    Subjectivity: {detail.subjectivity}
                </div>
                <div style={styles.DetailContainer}>
                    <div>
                        Text:
                    </div>
                    <div>
                        {detail.text}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    Container : {
        padding: 10
    },
    DetailContainer : {
        marginTop: 10
    }
}