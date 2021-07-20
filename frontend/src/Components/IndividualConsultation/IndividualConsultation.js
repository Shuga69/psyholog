import React, {Component} from 'react';
import Title from "../Title/Title";
import './IndividualConsultation.css'
import individualConsultationImage from '../../assets/solo-image.jpg'
import ConsultationThemes from "./ConsultationThemes";
import TwoStepSignUp from "./TwoStepSignUp";
import OnlineConsultation from "./OnlineConsultation";
import Helmet from "react-helmet";
function IndividualConsultation (props) {
    const individualConsultationTitle = 'Індивідуальні консультації';

    const titleTextStyle={
        color:'white',
        padding:'75px 0 30px 0',

    }
        return (
            <div className="individual-consultation-section">
                <Helmet>
                    <title>Індивідуальні консультації психотерапевта</title>
                    <meta name="description" content="Індивідуальні консультації психотерапевта Шугай Марії Анатоліївни"/>
                    <meta name="keywords" content="консультації психотерапевта, консультації психотерапевта рівне,
                    консультації психотерапевта онлайн, консультації психотерапевта Шугай, Консультації психотерапевта,"/>
                </Helmet>
                <div className="individual-container">
                    <div className="individual-text-section"> <Title style={titleTextStyle} text={individualConsultationTitle}/></div>
                    <div className="individual-consultation__inner">
                        <TwoStepSignUp/>
                        <ConsultationThemes/>
                        <OnlineConsultation/>
                    </div>
                </div>
            </div>
        );
}

export default IndividualConsultation;