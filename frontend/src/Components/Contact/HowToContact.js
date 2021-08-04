import React, {Component} from 'react';
import {Container, Form} from "react-bootstrap";
import SubTitle from "../SubTitle/SubTitle";
import SimpleText from "../SimpleText/SimpleText";
import './HowToContact.css'
function HowToContact(props) {
    const simpleTextStyle={
        padding: '0 0 10px 0',


    };
    const titleTextStyle={

        'font-weight':'900'
    };
    const howToContactRightText={
        firstAction:'У верхньому меню натиснути на події',
        secondAction:'Обрати групове заняття яке вас цікавить',
        thirdAction:'Заповнити форму зворотнього зв\'язку і наш менеджер зателефонує вам'
    };

    const howToContactLeftText={
        firstAction:'Звязатись зі мною за телефоном +380 50 375 45 76',
        secondAction:'Домовитись про зручну для вас дату та час'
    };
        return (
            <div>
                <div className="how-to-contact-container">
                    <div className="how-to-contact-left">
                   <SubTitle style={titleTextStyle} text="Для запису на індивідуальні консультації вам потрібно:"/>
                        <SimpleText style={simpleTextStyle} text={howToContactLeftText.firstAction}/>
                        <SimpleText style={simpleTextStyle} text={howToContactLeftText.secondAction}/>
                    </div>
                    <div className="how-to-contact-right">
                   <SubTitle style={titleTextStyle}  text="Для запису на групові заняття потрібно:"/>
                    <SimpleText style={simpleTextStyle} text={howToContactRightText.firstAction}/>
                    <SimpleText style={simpleTextStyle} text={howToContactRightText.secondAction}/>
                    <SimpleText style={simpleTextStyle} text={howToContactRightText.thirdAction}/>
                    </div>
                </div>
            </div>
        );

}

export default HowToContact;