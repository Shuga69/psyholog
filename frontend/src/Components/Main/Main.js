import React, {Component} from 'react';
import Title from "../Title/Title";
import './Main.css'
import SubTitle from '../SubTitle/SubTitle'
import SliderCard from '../SliderCard/SliderCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import meryMain from '../../assets/mary-site-bg1.png'
import {Container, Form} from "react-bootstrap";
import SimpleText from "../SimpleText/SimpleText";
function Main(props){
    const MainTextStyle={};
    return (
    <div className="main">
       <div className="main__inner">
            <div className="main-text-container">
        <Title text="Психотерапевт Марія Шугай" style={MainTextStyle}/>
               <SubTitle text="Сертифікований та акредитований гештальт-терапевт, керівник навчальних та терапевтичних програм" style={MainTextStyle}/>
                <SubTitle text="Директор Інституту практичної психології та психотерапії Національного університету «Острозька академія»"style={MainTextStyle}/>
            </div>
            <div className="main-image-container">
                <img src={meryMain} width='100%' height="100%" />
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