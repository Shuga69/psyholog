import React, {Component} from 'react';
import './StepCircle.css'
function StepCircle(props) {
        return (
            <div className="step-circle">
                <p>{props.number}</p>
            </div>
        );
}

export default StepCircle;