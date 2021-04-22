import React, { Component } from 'react'
import { Form, Container,Button } from 'react-bootstrap'
import soloConsultImage from './EventImage/soloConsultImg.jpg';
import './SoloLessons.css'
export default class SoloLessons extends Component {
    render() {
        return (
            
               <Container className="consult-solo-container">
               <Form.Text className="consult-solo-title">Індивідуальні консультації</Form.Text>
                   <Form className="consult-solo-form">
                       <img
                        className="consult-solo-image"
                        src={soloConsultImage}
                        height="50%"
                        width="50%"                   
                        alt="emailImg"
                       />
                       {/* <Form.Text className="consult-solo-text"><p className="consult-solo-text-title">Запрошую  на індивідуальні консультації.</p>
<p>Теми з якими я працюю: стосунки в сім'ї, парі, самооцінка та самоцінність, самореалізація, депресія, різні фобії, панічні атаки та страхи, психосоматичні симптоми, втрати, дитячий травматичний досвід, життєві ресурси, особисті кордони та інші.
Проводжу супервізію для психологів та психотерапевтів.</p></Form.Text> */}
                        <Form className="consult-solo-text">     
                      <Form.Text className="consult-solo-title2">
                        Запрошую на індивідуальні консультації.
                        </Form.Text>
                        <Form.Text className="consult-solo-subtitle">
                        <nobr className="title2-main">Теми з якими я працюю:</nobr> стосунки в сім'ї, парі, самооцінка та самоцінність, самореалізація, депресія, різні фобії, панічні атаки та страхи,
                        психосоматичні симптоми, втрати, дитячий травматичний досвід, життєві ресурси, особисті кордони та інші.
                        </Form.Text>
                        <p className="supervision-title">
                        Проводжу супервізію для психологів та психотерапевтів. 
                        </p>
                        </Form>
 
                   </Form>
                    <Form className="about-consult-solo">
                    {/* Для запису на індивідуальні консультації вам потрібно:
Звязатись зі мною за телефоном +380 50 375 45 76
Домовитись про зручну для вас дату та час */}
                    <Form.Text className="about-consult-solo-offline">
                    <p>Для запису на індивідуальну консультацію вам потрібно:</p>
                    <ul>
                    <li>Звязатись зі мною за телефоном +380 50 375 45 76 або у Viber</li>
                   <li> Домовитись про зручну для вас дату та час</li>
                   <li> Вартість однієї консультації(1 година): 500 грн</li>
                    </ul>
                    </Form.Text>
                    <Form.Text className="about-online-consult">
                    <p>Також є можливість консультування онлайн: </p>
                    <ul>
                   
                     <li>Консультування відбувається у Skype або Zoom</li>
                   <li> Вартість однієї консультації(1 година): 500 грн</li>
                   
                    </ul>
                    </Form.Text>
                    </Form>
               </Container>
            
        )
    }
}
