import React, {Component} from 'react';
import './SimpleText.css'
function SimpleText(props) {
    return (
        <div className="text-container">
            <p style={props.style} className="text">{props.text}</p>
        </div>
    );
}
export default SimpleText;