import React, {Component} from 'react';
import './Contact.css'
import geoImg from '../../assets/place.svg';
import email from '../../assets/email.svg';
import call from '../../assets/call.svg';
import InfoCircle from './InfoCircle'

import Title from "../Title/Title";
import {Form} from "react-bootstrap";
import HowToContact from "./HowToContact";
function Contact(props) {
    const titleTextStyle={
        padding:'0px 0 50px 0',

    };
    const contactTitleText = 'Як зі мною зв\'язатися?';
   const phoneInfoMessage = `+380 50 375 45 76 - Марія Шугай \n +380 68 059 81 35 - Іраїда (Менеджер груп)`;
    const locationInfoMessage = `м. Рівне, вул. Короленка 5, \n оф. 216 (2 поверх)`;
        return (
            <section className="contact-section">
                <div className="container">
                    <Title style={titleTextStyle} text = {contactTitleText}/>
                    <div className="contact__inner">
                        <div className="contact-info-container">
                        <InfoCircle text={locationInfoMessage} img = {geoImg}/>
                        <InfoCircle text="mshugay@gmail.com" img = {email}/>
                        <InfoCircle text={phoneInfoMessage} img = {call}/>
                        </div>
                        <HowToContact />

                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5347810059816!2d26.24604631531048!3d50.61718158321868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f14a8c4cd89b7%3A0x7fbc366518986112!2z0J_RgdC40YXQvtC70L7Qs9GW0YfQvdCwINGB0YLRg9C00ZbRjyBTZWxm!5e0!3m2!1suk!2sua!4v1606819287104!5m2!1suk!2sua"  className="map"></iframe>

            </section>
        );

}

export default Contact;