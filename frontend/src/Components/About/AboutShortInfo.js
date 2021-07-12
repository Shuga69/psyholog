import React, {Component} from 'react';
import SimpleText from "../SimpleText/SimpleText";
import MeryMainPhoto from "../../assets/mery-main-photo5.jpg";
import {Form} from "react-bootstrap";
import './AboutShortInfo.css'
import SubTitle from "../SubTitle/SubTitle";

function AboutShortInfo(props) {
    const infoTextLine1='Психолог, психотерапевт';
    const infoTextLine2='Кандидат психологічних наук';
    const infoTextLine3='Сертифікований та акредитований гештальт-терапевт, керівник навчальних та терапевтичних програм';
    const infoTextLine4='Директор Інституту практичної психології та психотерапії Національного університету «Острозька академія»';
    const contactSubtitleText = 'Марія Шугай';
    const contactShortInfoSubtitleStyle = {
        'font-weight': '700',
        padding: '10px 0 0 0'
    };
    const infoTextStyle = {
        'text-align':'left',
        padding:'0 0 20px 0'
    };
        return (

            <div className="about-short-info">
                <div className="about-short-info-text-mobile">
                <SubTitle style={contactShortInfoSubtitleStyle} text={contactSubtitleText}/>
                <SimpleText style={infoTextStyle} text={infoTextLine1}/>
                <SimpleText style={infoTextStyle} text={infoTextLine2}/>
                </div>
                <div className="short-info-img">
                <img
                    src={MeryMainPhoto}
                    height="400px"
                    width="100%"
                    alt="background"
                />
                </div>
                <div className="about-short-info-block">
                <div className="about-short-info-title">
                <SubTitle style={contactShortInfoSubtitleStyle} text={contactSubtitleText}/>
                <SimpleText style={infoTextStyle} text={infoTextLine1}/>
                <SimpleText style={infoTextStyle} text={infoTextLine2}/>
                </div>
                <div className="about-short-info-text">
                    <SimpleText style={infoTextStyle} text={infoTextLine3}/>
                    <SimpleText style={infoTextStyle} text={infoTextLine4}/>
                </div>
                </div>
            </div>
        );

}

export default AboutShortInfo;