import React, {Component} from 'react';
import './OnlineConsultation.css'
import SubTitle from "../SubTitle/SubTitle";
import SimpleText from "../SimpleText/SimpleText";
import OnlineConsultationImage from '../../assets/online consult.jpg'

function OnlineConsultation(props) {
    const onlineTitleText='Онлайн консультації';
    const onlineConsultationText = 'Психотерапевт онлайн - це працює?\n' +
        'Так, це працює. Я приймаю по Skype, Zoom або Google Meet.' +
        ' Так само, терапія онлайн допомагає якщо з якоїсь причини ви ' +
        'не можете залишати свій будинок (в разі карантину, соціальної тривоги, фізичної травми).';
    const onlineConsultationPriceText = 'Вартість консультації як в кабінеті так і онлайн 700грн';
    const onlineConsultationStyle = {
        'text-align':'justify',
        padding: '0 0px 0 0px'
    };
    return (
            <div className="online-consultation-container">
                <SubTitle text={onlineTitleText}/>
                <div className="online-consultation__inner">
                    <div className="onlineConsultation-text">
                    <SimpleText style={onlineConsultationStyle} text={onlineConsultationText}/>
                        <SimpleText style={onlineConsultationStyle} text={onlineConsultationPriceText}/>
                    </div>
                    <div className="online-consultation-img">
                    <img
                        src={OnlineConsultationImage}
                        height="300px"
                        width="100%"
                        alt="background"
                    />
                    </div>
                </div>
            </div>
        );
}

export default OnlineConsultation;