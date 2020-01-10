import React from 'react';

export function getConfidenceClass(confidence) {
    const confidenceNumber = parseInt(confidence);

        if (confidenceNumber < 0.8) {
            return "low-confidence"
        } 

        return "high-confidence";
}

export function renderConfidenceContainers() {
    return (
        <div className="confidence-containers">
                    <div className="high-confidence">
                        High confidence
                    </div>
                    <div className="low-confidence">
                        Low confidence
                    </div>
                </div>
    )
}