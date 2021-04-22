import React, {Component} from 'react';
import SubTitle from "../SubTitle/SubTitle";
import SimpleText from "../SimpleText/SimpleText";
import './ConsultationThemes.css'
function ConsultationThemes(props) {
    const themesSubtitleText='Теми з якими я працюю';
    const themesLeftText1='Стосунки в сім\'ї та парі';
    const themesLeftText2='Самооцінка та самоцінність';
    const themesLeftText3='Самореалізація';
    const themesLeftText4='Депресія та фобії';
    const themesLeftText5='Панічні атаки та страхи';
    const themesRightText1='Психосоматичні симптоми';
    const themesRightText2='Втрати';
    const themesRightText3='Дитячий травматичний досвід';
    const themesRightText4='Життєві ресурси';
    const themesRightText5='Особисті кордони та інше';
    const themesSimpleTextSyle = {
        padding: '0 0 30px 0'
    };
    const themesTitleStyle={
        padding:'50px 0 20px 0'
    };
        return (
            <div className="consultation-theme-container">
                <SubTitle style={themesTitleStyle} text = {themesSubtitleText}/>
                <div className="consultation-themes-text">
                    <div className="consultation-themes-left-text">
                        <SimpleText style={themesSimpleTextSyle} text={themesLeftText1}/>
                        <SimpleText style={themesSimpleTextSyle} text={themesLeftText2}/>
                        <SimpleText style={themesSimpleTextSyle} text={themesLeftText3}/>
                        <SimpleText style={themesSimpleTextSyle} text={themesLeftText4}/>
                        <SimpleText style={themesSimpleTextSyle} text={themesLeftText5}/>
                    </div>
                    <div className="consultation-themes-right-text">
                        <SimpleText style={themesSimpleTextSyle} text={themesRightText1}/>
                        <SimpleText style={themesSimpleTextSyle} text={themesRightText2}/>
                        <SimpleText style={themesSimpleTextSyle} text={themesRightText3}/>
                        <SimpleText style={themesSimpleTextSyle} text={themesRightText4}/>
                        <SimpleText style={themesSimpleTextSyle} text={themesRightText5}/>
                    </div>
                </div>
            </div>
        );
}

export default ConsultationThemes;