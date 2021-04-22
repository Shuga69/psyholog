import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap'
import emailImg from '../../assets/email.svg';
import geoImg from '../../assets/place.svg';
import phoneImg from '../../assets/call.svg';
import './Contacts.css';
import * as Scroll from 'react-scroll';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import Title from "../../Components/Title/Title";



export default class Contacts extends Component {
    render() {
        return (
            
             <div className="contacts-section">
                <Container id="contacts" className="contacts-container">
                        <Title text="Як зі мною зв'язатися?"/>
                        <Form className="contacts-form-main-info">
                            <div className="main-info-cont">
                            <div className="icon-circle">
                            <img
                             src={geoImg}
                             height="80%"
                             width="80%"                   
                             alt="geoImg" 
                            />
                            </div>
                            <Form.Text className = "main-info-text">м. Рівне, вул. Короленка 5, 
                        <p>     оф. 216 (2 поверх)</p></Form.Text>
                            </div>
                            <div className="main-info-cont">
                            <div className="icon-circle">
                            <img
                             src={phoneImg}
                             height="70%"
                             width="70%"                   
                             alt="phoneImg" 
                            />
                            </div>
                            <Form.Text className = "main-info-text-numbers">+380 50 375 45 76 - Марія Шугай
                                <br></br>+380 68 059 81 35 - Іраїда (Менеджер груп)
                            </Form.Text>
                            </div>
                            
                            <div className="main-info-cont">
                            <div className="icon-circle">
                            <img
                             src={emailImg}
                             height="80%"
                             width="80%"   
                                             
                             alt="emailImg" 
                            />
                            </div>
                            <Form.Text className = "main-info-text">mshugay@gmail.com
                            </Form.Text>
                            </div>
                        </Form>
                    <Form className="contacts-form">
                        <Form.Text className="contacts-solo-consult-info">
                            <p>Для запису на індивідуальні консультації вам потрібно:</p>
                                <ul>
                                    <li>Звязатись зі мною за телефоном +380 50 375 45 76</li>
                                    <li>Домовитись про зручну для вас дату та час</li>
                                    
                                </ul>
                                
                        </Form.Text>
                        
                        <Form.Text className="contacts-group-consult-info">
                           <p>Для запису на групові заняття потрібно:</p>  
                            <ul>
                                <li>У верхньому меню натиснути на події</li>
                                <li>Обрати групове заняття яке вас цікавить</li>
                                <li>Заповнити форму зворотнього зв'язку і наш менеджер зателефонує вам</li>
                            </ul>
                        </Form.Text>
                    </Form>
                    {/* <div className="contacts-map"> */}
                   {/* <WrappedMap
                     googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAhVw4U96NVfWOmfHMioSJgMf45glF2AX4`}
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                   /> */}
                   
              
                </Container>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5347810059816!2d26.24604631531048!3d50.61718158321868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f14a8c4cd89b7%3A0x7fbc366518986112!2z0J_RgdC40YXQvtC70L7Qs9GW0YfQvdCwINGB0YLRg9C00ZbRjyBTZWxm!5e0!3m2!1suk!2sua!4v1606819287104!5m2!1suk!2sua"  className="map"></iframe>
          
            </div> 
        )
    }
}
