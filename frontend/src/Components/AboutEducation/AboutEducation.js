import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubTitle from "../SubTitle/SubTitle";
import './AboutEducation.css'
import SliderCard from '../SliderCard/SliderCard'
function AboutEducation(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false
    };
    const mobileSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    const educationTitleText='Психотерапевтична освіта та практичні навички';
    const sliderCardText1='Завершила програму професійної підготовки гештальт-терапевтів та гештальт-консультантів ' +
        '(31.10. 2007 р.- 30.09.2012 р. Київський Гештальт Університет-акредитований в Європейській Асоціації Гештальт ' +
        'Терапії та Європейській Асоціації Психотерапії), сертифікований гештальт-терапевт.';
    const sliderCardText2='З 2008 року – практикуючий психолог (індивідуальна та групова психотерапія, консультування' +
        ' дорослих та дітей). З 2014р. по 2015р. – керівник науково-практичної лабораторії «Психосоціальна підтримка та ' +
        'реабілітація постраждалих унаслідок бойових дій». Участь і завершення навчальної програми «Психодрама в груповій' +
        ' та індивідуальній роботі».';
    const sliderCardText3='«Психологічне консультування та психокорекційна робота з дітьми та батькам в гуманістичному ' +
        'підході» (2011р.-2014р.); «Групова психотерапія в рамках гештальт-підходу» (2013р.-2014р.), «Психодіагностика' +
        ' та психокорекція життєвих сценаріїв методом казкотерапії» (2014р.-2015р.).';
    const sliderCardText4='Програма  по вдосконаленню практики гештальт-терапевтів, підготовці супервізорів і викладачів' +
        ' ГТ (3-я ступінь) Київський Гештальт Університет, тренери: Інна Дідковська, Лінда Осборн, Даан ван Баален, ' +
        'Маргарита Спаньолло Лобб, Пітер Філліпсон';
    const sliderCardText5='Індивідуальна та сімейна психологічна та психотерапевтична допомога — труднощі в стосунках' +
        ' у сім’ї, в парі, на роботі, між дітьми та батьками; проблеми із самооцінкою, самореалізацією, депресія, ' +
        'панічні атаки, психосоматичні симптоми, втрати, дитячий травматичний досвід та інше.';
    const sliderCardText6='Групова терапія — проведення терапевтичних та навчальних груп в гештальт-підході, ' +
        'організація тематичних практичних семінарів; ведучий тренер навчально-терапевтичних програм «Практична' +
        ' психологія», «Основи гештальт-терапії 1 ступінь», терапевтичної групи' +
        ' «Психодіагностика та корекція життєвих сценаріїв методом казкотерапії та психодрами».';
    const educationTitleStyle = {
        color:'white',
        'font-weight': '900',
        padding: '30px 0 30px 0'
    };
        return (
            <div className="about-education-section">
                <div className="container">
                    <SubTitle style={educationTitleStyle} text={educationTitleText}/>
                    <div className="about-education__inner">
                        <Slider {...settings}>
                            <SliderCard text={sliderCardText1}/>
                            <SliderCard text={sliderCardText2}/>
                            <SliderCard text={sliderCardText3}/>
                            <SliderCard text={sliderCardText4}/>
                            <SliderCard text={sliderCardText5}/>
                            <SliderCard text={sliderCardText6}/>
                        </Slider>
                    </div>
                    <div className="about-education__inner-mobile">
                        <Slider {...mobileSettings}>
                            <SliderCard text={sliderCardText1}/>
                            <SliderCard text={sliderCardText2}/>
                            <SliderCard text={sliderCardText3}/>
                            <SliderCard text={sliderCardText4}/>
                            <SliderCard text={sliderCardText5}/>
                            <SliderCard text={sliderCardText6}/>
                        </Slider>
                    </div>
                </div>
            </div>
        );
}

export default AboutEducation;