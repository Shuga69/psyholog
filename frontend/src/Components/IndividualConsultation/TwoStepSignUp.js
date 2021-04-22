import React, {Component} from 'react';
import './TwoStepSignUp.css'
import SubTitle from "../SubTitle/SubTitle";
import StepCircle from "./StepCircle";
import StepLine from "./StepLine";
import SimpleText from "../SimpleText/SimpleText";
function TwoStepSignUp(props) {
    const twoStepTitle='Запис в два кроки';
    const twoStepText1='Звязатись зі мною за телефоном\n +380 50 375 45 76 або у Viber';
    const twoStepText2='Домовитись про зручну для вас\n дату та час';
    const twoStepTitleStyle={
        padding:'50px 0 20px 0'
    };
        return (
            <div className="two-step-sign-up-container">
                <SubTitle style={twoStepTitleStyle} text={twoStepTitle}/>
                <div className="circle-bar">
                    <StepCircle number = "1"/>
                    <StepLine/>
                    <StepCircle number ="2"/>
                </div>
                <div className="two-step-text">
                    <SimpleText text={twoStepText1}/>
                    <SimpleText text={twoStepText2}/>
                </div>
            </div>
        );
}

export default TwoStepSignUp;