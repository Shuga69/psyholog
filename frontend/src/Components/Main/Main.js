import React, {Component} from 'react';
import Title from "../Title/Title";
import './Main.css'
import SubTitle from '../SubTitle/SubTitle'
import SliderCard from '../SliderCard/SliderCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import meryMain1 from '../../assets/mary-site-bg1.png'
import meryMain2 from '../../assets/masha-main-prob1.png'
import meryMain3 from '../../assets/masha2017Self .jpg'
import meryMain4 from '../../assets/masha2017-bg.png'
import meryMain5 from '../../assets/masha-bubble-bg.png'
import meryMain6 from '../../assets/masha2017SelfBuble.png'
import {Container, Form} from "react-bootstrap";
import SimpleText from "../SimpleText/SimpleText";
import Button from "../Button/Button";
function Main(props){
    const MainTextStyle={
        padding:'0 10px 0 10px'
    };
    return (
    <div className="main">
       <div className="main__inner">
           <div className="main-left-block">
            <div className="main-text-container">
        <Title text="Психотерапевт Марія Шугай" style={MainTextStyle}/>
               <SubTitle text="Сертифікований та акредитований гештальт-терапевт, керівник навчальних та терапевтичних програм" style={MainTextStyle}/>
                <div className="main-image-container-mobile">
                    <img className="main-image" src={meryMain6}  />
                </div>
                <div className="main-text-mobile">
                <SubTitle text="Директор Інституту практичної психології та психотерапії Національного університету «Острозька академія»"style={MainTextStyle}/>
                </div>
                </div>
               <div className="main-button-container">
               <Button link="contact" text = "Записатись"/>
               </div>
           </div>
            <div className="main-image-container">
                <img className="main-image" src={meryMain6}  />
            </div>
        </div>
    </div>
    );


}

export default Main;

//
// const titleTextStyle={
// color:'white',
// padding:'30px 0 30px 0'
// };
// const textStyle={
// color:'white',
// 'text-align':'center'
//
// };
// const settings = {
// dots: false,
// infinite: true,
// autoplaySpeed: 6000,
// autoplay:true,
// slidesToShow: 1,
// slidesToScroll: 1,
// arrows:false,
// };
//
// return (
//
// <div className="main">
// <div className="main-container">
// <div className="text-section">
// <Title style={titleTextStyle} text="Психотерапевт Марія Шугай"/>
// <div className="text-line"/>
// <SubTitle style={textStyle} text="Сертифікований та акредитований гештальт-терапевт, керівник навчальних та терапевтичних програм"/>
// </div>
// {/*        <Container className="reverse-contact" >*/}
// {/*    <div className="titles">*/}
// {/*    <Title  text="Залиште свої контакти"/>*/}
//
// {/*<SimpleText text="щоб ми могли повідомити вас про нові навчальні групи"/>*/}
// {/*</div>*/}
// {/*<Form  className="reverse-contact-form">*/}
// {/*    <Form.Group controllId="formBasicName">*/}
//
// {/*        <Form.Control*/}
// {/*            required*/}
// {/*            className="name-input" type="text"*/}
// {/*            placeholder="Введіть ваше Ім'я"*/}
//
// {/*            name = "name"*/}
// {/*        />*/}
// {/*    </Form.Group>*/}
// {/*    <Form.Group controllId="formBasicEmail">*/}
//
// {/*        <Form.Control*/}
// {/*            required*/}
// {/*            className="email-input" type="email"*/}
// {/*            placeholder="Email:"*/}
//
// {/*            name = "email"*/}
// {/*        />*/}
//
// {/*    </Form.Group>*/}
// {/*    <button className="reverse-contact-btn" type="submit" >Надіслати</button>*/}
//
// {/*</Form>*/}
// {/*</Container>*/}