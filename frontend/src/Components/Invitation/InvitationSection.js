import React, {Component} from 'react';
import Invitation from "./Invitation";
import './InvitationSection.css'
import soloInvitationImage from '../../assets/solo-consult-image.jpg';
import groupInvitationImage from '../../assets/group-image.jpg';

function InvitationSection(props) {
    const soloStyle={
        'flex-direction': 'row'
    };
    const groupStyle={
        'flex-direction': 'row-reverse'
    };
    const soloInvitationTitle = <React.Fragment><nobr className="color-text">Запрошую</nobr> на індивідуальні консультації</React.Fragment>;
    const soloInvitationText = <React.Fragment> <nobr className="fat-text">Теми з якими я працюю:</nobr> стосунки в сім'ї, парі, самооцінка та самоцінність, самореалізація, депресія, панічні атаки та страхи,
                                                  психосоматичні симптоми, втрати, дитячий травматичний досвід, життєві ресурси, особисті кордони та інші.
        <p className="fat-text"> Проводжу супервізію для психологів та психотерапевтів</p></React.Fragment>;
    const groupInvitationTitle = <React.Fragment>Навчально-тренінгові та терапевтичні <nobr className="color-text">групи</nobr></React.Fragment>;
    const groupInvitationText = <React.Fragment>Беручи участь в групі можна отримати новий досвід взаємостосунків, віддавати та приймати підтримку, ділитись почуттями та думками.
        <p><nobr className="fat-text">Навчально-тренінгові групи</nobr> спрямовані на отримання знань з психології, психотерапії які можна використати в житті,
            в професійній діяльності, стосунках (в особистих і ділових).</p> <p><nobr className="fat-text">Терапевтичні групи</nobr> спрямовані на отримання досвіду групової психотерапії,
            вирішення внутрішніх конфліктів</p></React.Fragment>;
        return (
            <div className="invitation-section">
                <div className="container">
                    <div className="invitation-section__inner">
                        <Invitation style={soloStyle} title={soloInvitationTitle} text={soloInvitationText} img={soloInvitationImage}/>
                        <Invitation style={groupStyle} title={groupInvitationTitle} text={groupInvitationText} img={groupInvitationImage}/>
                    </div>
                </div>
            </div>
        );
}

export default InvitationSection;