import React, {Component} from 'react';
import './Title.css'
function Title(props) {
        return (
            <div className="title-container">
                <h1 style={props.style} className="title">{props.text}</h1>
            </div>
        );

}

export default Title;