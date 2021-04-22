import React, {Component} from 'react';
import './InfoCircle.css'
import SimpleText from "../SimpleText/SimpleText";

function InfoCircle(props) {
    const simpleTextStyle={
        padding:'20px 0 30px 0'
    };
        return (
            <div className="info-circle-container">
                <div className="icon-circle">
                    <img
                        src={props.img}
                        height="80%"
                        width="80%"
                        alt="geoImg"
                    />
                </div>
                <SimpleText style={simpleTextStyle} text = {props.text}/>

            </div>
        );

}

export default InfoCircle;