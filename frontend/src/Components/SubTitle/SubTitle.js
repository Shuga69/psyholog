import React, {Component} from 'react';
import './SubTitle.css'
function SubTitle(props) {

        return (
            <div className="subtitle-container">
                <h1 style={props.style} className="subtitle-text">{props.text}</h1>
            </div>
        );
    }
export default SubTitle;