import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap'
import certificate1 from './AboutImage/geshtaltSert.jpg';
import certificate2 from './AboutImage/vuz_sert1_ps.jpg';
import certificate3 from './AboutImage/vuz_sert2_ps.jpg';
import certificate4 from './AboutImage/vuz_sert3_ps.jpg';
import "./About.css";
import MeryMainPhoto from './AboutImage/mery-main-photo5.jpg';
import * as Scroll from 'react-scroll';

export default class About extends Component {
     
    
    render() {
        return (
            <div id="about" className="about-section">
                <Form.Text className="about-shuhai-title">
                       <p>Марія Шугай</p>
                    </Form.Text>
                <Container className="about-form">
                    
                    <Form className="about-shuhai">
                        <img
                         src={MeryMainPhoto}
                         height="40%"
                         width="40%"                   
                         alt="background"
                        />
                        <Form.Text className="about-shuhai-main-info">
                        <p>Психолог, психотерапевт.</p> 
                        <p>Кандидат психологічних наук.</p>
                        <p>Сертифікований та акредитований гештальт-терапевт, керівник навчальних та терапевтичних програм.</p>
                        <p>Директор Інституту практичної психології та психотерапії Національного університету «Острозька академія».</p> 
                        
                        </Form.Text>
                        
                    </Form>
                  <Form className="about-shuhai-diploma">
                        <Form.Text className="about-shuhai-diploma-title">
                            Сертифікати та дипломи
                        </Form.Text>
                        <div className="diploma-img">
                            <a href="http://www.psyholog.rovno.ua/wp-content/uploads/2015/11/sert_psyholog.jpg">
                            <img
                            
                                src={certificate1}
                                height="20%"
                                width="20%"                   
                                alt="background" 
                            />
                            </a>
                            <a href="http://www.psyholog.rovno.ua/wp-content/uploads/2015/11/vuz_sert1_ps.jpg">
                              <img
                                src={certificate2}
                                height="20%"
                                width="20%"                   
                                alt="background" 
                            />
                            </a>
                            <a href="http://www.psyholog.rovno.ua/wp-content/uploads/2015/11/vuz_sert2_ps.jpg">
                              <img
                                src={certificate3}
                                height="20%"
                                width="20%"                   
                                alt="background" 
                            />
                            </a>
                            <a href="http://www.psyholog.rovno.ua/wp-content/uploads/2015/11/vuz_sert3_ps.jpg">
                              <img
                                src={certificate4}
                                height="20%"
                                width="20%"                   
                                alt="background" 
                            />
                            </a>
                              {/* <img
                                src={background}
                                height="20%"
                                width="20%"                   
                                alt="background" 
                            /> */}
                        </div>
                  </Form>
                </Container>
                <div className="about-shuhai-education-section"> 
                <Form.Text className="about-shuhai-education-title">
                     <p>Психотерапевтична освіта та практичні навички</p>
                 </Form.Text>
             <Form className="about-shuhai-education">
             
                 <Form.Text className="about-shuhai-education-info">
                    
                <div className="after-number-text1">
                 <p>Завершила програму професійної підготовки 
                 гештальт-терапевтів та гештальт-консультантів 
                 (31.10. 2007 р.- 30.09.2012 р. Київський Гештальт Університет-акредитований 
                 в Європейській Асоціації Гештальт Терапії та Європейській Асоціації Психотерапії), 
                 сертифікований гештальт-терапевт.</p>
                 </div>
                 </Form.Text>
                 <Form.Text className="about-shuhai-education-info">
                    
                <div className="after-number-text2">
                 <p>З 2008 року – практикуючий психолог (індивідуальна та групова психотерапія, 
                     консультування дорослих та дітей).  З 2014р. по 2015р. – керівник науково-практичної 
                     лабораторії «Психосоціальна підтримка та реабілітація постраждалих унаслідок бойових дій».
                     Участь і завершення навчальної 
                     програми «Психодрама  в груповій та індивідуальній роботі».</p>
                 </div>
                 </Form.Text>
                 <Form.Text className="about-shuhai-education-info">
                     
                <div className="after-number-text3">
                 <p>«Психологічне консультування та психокорекційна робота 
                     з дітьми та батькам в гуманістичному підході» (2011р.-2014р.); 
                     «Групова психотерапія в рамках гештальт-підходу» (2013р.-2014р.), «Психодіагностика та психокорекція життєвих 
                     сценаріїв методом казкотерапії» (2014р.-2015р.). </p>
                 </div>
                 </Form.Text>
                 <Form.Text className="about-shuhai-education-info">
                    
                <div className="after-number-text4">
                 <p>Робота із дітьми — психологічне консультування, психотерапія та психологічна 
                     діагностика при психосоматичних , поведінкових (агресивна поведінка, некомунікабельність, 
                     невпевненість, проблеми в стосунках із іншими дітьми, в навчанні) та травматичних  симптомах.</p>
                 </div>
                 </Form.Text>
                 <Form.Text className="about-shuhai-education-info">
                     
                <div className="after-number-text5">
                 <p>Індивідуальна та сімейна психологічна та психотерапевтична допомога — труднощі 
                     в стосунках у сім’ї, в парі, на роботі, між дітьми та батьками; проблеми із самооцінкою, 
                     самореалізацією, депресія, панічні атаки, психосоматичні симптоми, втрати, 
                     дитячий травматичний досвід та інше.</p>
                 </div>
                 </Form.Text>
                 <Form.Text className="about-shuhai-education-info">
                     
                <div className="after-number-text6">
                 <p>Групова терапія — проведення терапевтичних та навчальних груп в гештальт-підході, 
                     організація тематичних практичних семінарів; ведучий тренер навчально-терапевтичних 
                     програм «Практична психологія», «Дитяча психологія та психотерапія», «Основи гештальт-терапії 1 ступінь», терапевтичної 
                     групи «Психодіагностика та корекція життєвих сценаріїв методом казкотерапії та психодрами».</p>
                 </div>
                 </Form.Text>
             </Form>
             </div>
            </div>
             
        )
    }
}
