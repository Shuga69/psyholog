import React, {Component} from 'react';
import SubTitle from "../SubTitle/SubTitle";
import SimpleText from "../SimpleText/SimpleText";
import './Motivation.css'
import LinkButton from '../Button/LinkButton'
function Motivation(props) {
    const simpleTextStyle={
        padding: '0 0 10px 0',
        'text-align': 'left'

    };
    const simpleTitleStyle={
        'font-weight': '900',
        padding:'50px 0 30px 0'
    };
        return (
            <div className="motivation-container">
                <SubTitle style={simpleTitleStyle} text={props.title}/>
                <div style={props.style} className="motivation_inner">
                    <div className = "motivation-text">
                        <SimpleText style={simpleTextStyle} text={props.text}/>
                        <div style={props.btnPosition} className="btn-container">
                            <LinkButton link="groupLessons" text="Дізнатись більше"/>
                        </div>
                    </div>
                    <div className="motivation-img">
                        <img
                            src={props.img}
                            height="400px"
                            width="100%"
                            alt="background"
                        />
                    </div>
                </div>
            </div>
        );

}

export default Motivation;