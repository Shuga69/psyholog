import React, {Component} from 'react';
import {Container, Form} from "react-bootstrap";
import soloPhoto from "../../assets/solo-image.jpg";
import SubTitle from "../SubTitle/SubTitle";
import SimpleText from "../SimpleText/SimpleText";
import './Invitation.css'
function Invitation(props) {
    const simpleTextStyle={
        padding: '0 0 10px 0',
        'text-align': 'left'

    };
    const simpleTitleStyle={
        'font-weight': '900'

    };
        return (
            <div style={props.style} className="invitation-container">

                    <div className = "invitation-text">
                      <SubTitle style={simpleTitleStyle} text={props.title}/>
                        <SimpleText style={simpleTextStyle} text={props.text}/>

                    </div>
                    <div className="invitation-img">
                        <img
                            src={props.img}
                            height="400px"
                            width="100%"
                            alt="background"
                        />
                    </div>

            </div>
        );
}
export default Invitation;