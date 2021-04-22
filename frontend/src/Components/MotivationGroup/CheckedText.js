import React, {Component} from 'react';
import './CheckedText.css'
function CheckedText(props) {

        return (
            <p className="motivation-check">{props.text}</p>
        );

}

export default CheckedText;