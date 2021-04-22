import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import groupConsult1 from './AboutGroupImage/group-consult-check1.jpg';
import './AboutGroup.css';
export default class AboutGroup extends Component {
    render() {
        return (
            <div id="group" className="about-group-section">
                <Container className="about-group-consult">
                    <Form.Text className="about-group-title">
                            Для кого підійдуть <nobr className="font-color-consult">групові заннятя?</nobr>
                    </Form.Text>
                    <Form.Text className="about-group-subtitle">
                        Навчально-тренінгові групи
                        </Form.Text>
                    <Form className = "about-group-consult-text">
                    <div className="about-group-consult-img">
                    <img 
                      src={groupConsult1}
                      height="100%"
                      width="100%"                   
                      alt="background"
                    
                    />
                    </div>
                      
                    <Form className="for-whom">
                      
                    <Form.Text className="about-group-check">
                    Хто цікавиться психологією, психотерапією, особистісним розвитком.
                        </Form.Text>
                        <Form.Text className="about-group-check">
                       Бажає покращити свої стосунки з партнером, батьками та з дітьми.
                        </Form.Text>
                        <Form.Text className="about-group-check">
                       Прагне отримати базові знання з практичної психології.
                        </Form.Text>
                        <Form.Text className="about-group-check">
                        Хто хоче зрозуміти краще себе та інших.
                        </Form.Text>
                        <Button className="about-group-more-btn" href="http://localhost:3000/groupLessons">Дізнатись більше</Button>
                    </Form>
                    
                    </Form>

                </Container>
                <Container className="about-group-consult2">
                    <Form.Text className="about-group-subtitle">
                    Терапевтичні групи
                        </Form.Text>
                    <Form className = "about-group-consult-text">
                      
                    <Form className="for-whom">
                      
                    <Form.Text className="about-group-check">
                    Всім хто хоче знати як зрозуміло повідомляти про свої потреби іншим людям.
                        </Form.Text>
                        <Form.Text className="about-group-check">
                        Прагне отримати досвід як екологічно виражати свої почуття, емоції.  
                        </Form.Text>
                        <Form.Text className="about-group-check">
                        Отримати підтримку в проживані важких життєвих ситуацій.
                        </Form.Text>
                        <Form.Text className="about-group-check">
                        Навчитися вирішувати конфліктні ситуації та конкуренції.
                        </Form.Text>
                        <Button className="about-group-more-btn2" href="http://localhost:3000/groupLessons">Дізнатись більше</Button>
                    </Form>
                    
                    <div className="about-group-consult-img">
                    <img 
                      src={groupConsult1}
                      height="100%"
                      width="100%"                   
                      alt="background"
                    
                    />
                    </div>
                    
                    </Form> 
                </Container>
                </div>
        )
    }
}
