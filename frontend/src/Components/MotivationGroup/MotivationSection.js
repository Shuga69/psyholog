import React, {Component} from 'react';
import Title from "../Title/Title";
import Motivation from "./Motivation";
import './MotivationSection.css'
import group1Image from '../../assets/groupPhotoxxx.jpg'
import group2Image from '../../assets/group-nature.jpg'
import CheckedText from "./CheckedText";
function MotivationSection(props) {
    const motivationTitleText = 'Для кого підійдуть групові заннятя?';
    const motivationRightImageTitle  = 'Навчально-тренінгові групи';
    const motivationRightImageText  = <React.Fragment>
        <CheckedText text="Хто цікавиться психологією, психотерапією, особистісним розвитком"/>
        <CheckedText text="Бажає покращити свої стосунки з партнером, батьками та з дітьми"/>
        <CheckedText text="Прагне отримати базові знання з практичної психології"/>
        <CheckedText text="Хто хоче зрозуміти краще себе та інших"/>
        </React.Fragment>;
    const motivationLeftImageTitle  = 'Терапевтичні групи';
    const motivationLeftImageText  = <React.Fragment>
        <CheckedText text="Всім хто хоче знати як зрозуміло повідомляти про свої потреби іншим людям"/>
        <CheckedText text="Прагне отримати досвід як екологічно виражати свої почуття, емоції"/>
        <CheckedText text="Отримати підтримку в проживані важких життєвих ситуацій"/>
        <CheckedText text="Навчитися вирішувати конфліктні ситуації та конкуренції"/>
         </React.Fragment>;
    const motivationTitleStyle={
        padding: '60px 0 0 0',
    };
    const motivationLeftStyle={
        'flex-direction':'row'
    };
    const motivationRightStyle={
        'flex-direction':'row-reverse'
    };
    const btnLeftPosition={
        'justify-content': 'flex-start',
    };
    const btnRightPosition={
        'justify-content': 'flex-end',
    };
        return (
            <div id="group" className="motivation-section">
                <div className="container">
                    <Title style={motivationTitleStyle} text={motivationTitleText}/>
                    <div className="motivation-section__inner">
                        <Motivation style={motivationLeftStyle} btnPosition={btnLeftPosition} text={motivationRightImageText} title={motivationRightImageTitle} img={group2Image}/>
                        <Motivation style={motivationRightStyle} btnPosition={btnRightPosition} text={motivationLeftImageText} title={motivationLeftImageTitle} img={group1Image}/>
                    </div>
                </div>
            </div>
        );

}

export default MotivationSection;