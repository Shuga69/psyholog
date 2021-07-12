import React, {Component} from 'react';
import './About.css'
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import SimpleText from "../SimpleText/SimpleText";
import AboutShortInfo from "./AboutShortInfo";
import AboutCertification from "./AboutCertification";
function About(props){
    const contactTitleText = 'Про мене';

    const subTitleText='Сертифікати та дипломи';
    const contactTitleStyle = {
        padding: '0 0 10px 0'
    };
    const contactCertificationSubtitleStyle = {
        'font-weight': '700',
        padding: '30px 0 30px 0'
    };
        return (
            <div id="about" className="about-section">
                <div className="container">
                    <Title style={contactTitleStyle} text = {contactTitleText}/>
                    <div className="about__inner">
                        <AboutShortInfo/>
                        <SubTitle style={contactCertificationSubtitleStyle} text={subTitleText}/>
                        <AboutCertification/>
                    </div>
                </div>
            </div>
        );
}

export default About;