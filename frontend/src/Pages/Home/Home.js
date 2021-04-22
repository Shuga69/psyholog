// import React, { Component } from 'react'
// import './Home.css'
// import background from './HomeImage/main-photo-bgv2.jpg';
// import backgroundMery from './HomeImage/mary-site-bg1.png';
// import titleVideo from './titleVideo.mp4';
// import groupPhoto from './HomeImage/group-image.jpg';
// import soloPhoto from '../../assets/solo-image.jpg';
// import axios from 'axios';
// import { Container, Form } from 'react-bootstrap';
// import About from '../About/About';
// import AboutGroup from '../AboutGroup/AboutGroup';
// import Contacts from '../Contacts/Contacts';
// import * as Scroll from 'react-scroll';
//
// export default class Home extends Component {
//     constructor(props){
//         super(props);
//
//             this.state = this.initialState;
//             this.newsChange = this.newsChange.bind(this);
//             this.submitBlock = this.submitBlock.bind(this);
//         }
//         initialState = {
//             name:'', email:''
//         }
//         submitBlock = newsletter => {
//             alert(this.state.name );
//             newsletter.preventDefault();
//
//             const news = {
//                    name: this.state.name,
//                    email: this.state.email
//             };
//
//              axios.post("https://cors-anywhere.herokuapp.com/https://psyhology-site.herokuapp.com/news/subscribe",
//              {headers :{'X-Requested-With': 'XMLHttpRequest'} })
//             .then(response => {
//                 if(response.data!=null){
//                     this.setState(this.initialState);
//                     alert("user created successfully!!!");
//                 }
//              });
//
//         }
//         newsChange = newsletter => {
//             this.setState({[newsletter.target.name]:newsletter.target.value});
//         }
//
//     render() {
//         const {name,email} = this.state;
//         return (
//
//             <div id="home" className="main-home-container">
//                 <div className="first-section-home">
//                <div className = "title-s">
//                 <Form.Text className="main-site-title">Психотерапевт </Form.Text>
//                    <Form.Text className="main-site-title">Марія Шугай </Form.Text>
//                    </div>
//                 <div className="site-titles">
//                    <video className="title-video" autoPlay loop muted>
//                        <source src = {titleVideo} type = 'video/mp4'/>
//                        <source src = {titleVideo} type = 'video/ogg' codecs= 'theora, vorbis'/>
//
//                    </video>
//                  <ul className="secondary-site-title">
//                      <li>Індивідуальні консультації</li>
//                      <li>групові заняття</li>
//                      <li>супервізія для психологів</li>
//                      <li>та психотерапевтів</li>
//                  </ul>
//
//                    {/* <div className="secondary-title-bg">
//                    <Form.Text className="secondary-site-title">Індивідуальні консультації,
//                     <br></br>групові заняття, <br></br>супервізія для психологів та психотерапевтів.
//
//                     </Form.Text> */}
//                    {/* </div> */}
//                    </div>
//                 <img
//                     className="background-img"
//                    src={background}
//                    height="900px"
//                    width="100%"
//                    alt="background"
//                 />
//                 <img
//                 className="background-mery"
//                    src={backgroundMery}
//                    height="650px"
//                    width="350px"
//                    alt="backgroundMery"
//                 />
//                 </div>
//
//
//
//                 <Container className="reverse-contact" >
//                     <div className="titles">
//                     <h1 className="reverse-contact-title">Залиште свої контакти</h1>
//                     <p className="reverse-contact-subtitle">щоб ми могли повідомити вас про нові навчальні групи</p>
//                     </div>
//                     <Form onSubmit={this.submitBlock} className="reverse-contact-form">
//                     <Form.Group controllId="formBasicName">
//
//                             <Form.Control
//                             required
//                             className="name-input" type="text"
//                             placeholder="Введіть ваше Ім'я"
//                             onChange={this.newsChange}
//                             name = "name"
//                             value = {name} />
//                         </Form.Group>
//                         <Form.Group controllId="formBasicEmail">
//
//                             <Form.Control
//                             required
//                             className="email-input" type="email"
//                             placeholder="Email:"
//                             onChange={this.newsChange}
//                             name = "email"
//                             value = {email} />
//
//                         </Form.Group>
//                         <button className="reverse-contact-btn" type="submit" >Надіслати</button>
//
//                     </Form>
//                 </Container>
//                <div className="home-page-content">
//                 <Container className="solo-consult">
//                     <Form className = "solo-consult-text">
//                         <Form.Text className="solo-consult-title">
//                         <nobr className="font-color-consult">Запрошую </nobr> на індивідуальні консультації.
//                         </Form.Text>
//                         <Form.Text className="solo-consult-title2">
//                         <nobr className="title2-main">Теми з якими я працюю:</nobr> стосунки в сім'ї, парі, самооцінка та самоцінність, самореалізація, депресія, панічні атаки та страхи,
//                         психосоматичні симптоми, втрати, дитячий травматичний досвід, життєві ресурси, особисті кордони та інші.
//                         </Form.Text>
//                         <Form.Text className="solo-consult-subtitle">
//                         Проводжу супервізію для психологів та психотерапевтів.
//                         </Form.Text>
//                         {/* <Form.Text className="solo-consult-subtitle">
//                         психологічну та психотерапевтичну консультацію.
//                         </Form.Text> */}
//                     </Form>
//                     <div className="solo-consult-img">
//                     <img
//                       src={soloPhoto}
//                       height="110%"
//                       width="100%"
//                       alt="background"
//
//                     />
//                     </div>
//                 </Container>
//                 <Container className="group-consult">
//                 <div className="group-consult-img">
//                     <img
//
//                       src={groupPhoto}
//                       height="100%"
//                       width="130%"
//                       alt="background"
//
//                     />
//                     {/* Навчально-тренінгові для всіх, хто цікавиться психологією, психотерапією, особистісним розвитком.
//                     Хто хоче зрозуміти краще себе та інших.
//                     Покращити свої стосунки з партнером, батьками та з дітьми.
//                     Отримати базові знання з практичної психології.
//
//                     Терапевтичні для всіх хто прагне отримати досвід як екологічно виражати свої почуття, емоції
//                     Як зрозуміло повідомляти про свої потреби іншим людям.
//                     Отримати підтримку в проживані важких життєвих ситуацій
//                     навчитися вирішувати конфліктні ситуації та конкуренції
//                     */}
//                     </div>
//                     <Form className = "group-consult-text">
//                         <Form.Text className="group-consult-title">
//                         Навчально-тренінгові та терапевтичні<nobr className="font-color-consult"> групи.</nobr>
//                         </Form.Text>
//
//                         <Form.Text className="group-consult-title2">
//                         <p className = "quote">Група це соціум в мініатюрі в якому можна
//                         ризикнути на нові творчі способи своєї поведінки і стосунків з іншими.</p>
//                         Беручи участь в групі можна отримати новий досвід взаємостосунків, віддавати
//                         та приймати підтримку, ділитись почуттями та думками.<br></br>
//                         <nobr className="title2-main">Навчально-тренінгові</nobr> групи спрямовані на отримання знань з психології,
//                         психотерапії які можна використати в житті, в професійній діяльності, стосунках (в особистих і ділових).
//                        <br></br><nobr className="title2-main">Терапевтичні</nobr> групи спрямовані на отримання досвіду групової психотерапії,
//                         вирішення внутрішніх конфліктів.
//                         </Form.Text>
//                         <Form.Text className="group-consult-subtitle">
//
//                         </Form.Text>
//                         {/* <Form.Text className="solo-consult-subtitle">
//                         психологічну та психотерапевтичну консультацію.
//                         </Form.Text> */}
//                     </Form>
//
//                 </Container>
//                 <AboutGroup/>
//                 <About/>
//                 <Contacts/>
//                 </div>
//             </div>
//
//         )
//     }
// }
