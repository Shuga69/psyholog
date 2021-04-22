// import React, { Component } from 'react';
// import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
// import { Accordion, Button, Col,Tab,Nav } from 'react-bootstrap';
// import logo from '../assets/logoShuhai.png';
// import Home from '../Pages/Home/Home';
// import About from '../Pages/About/About';
// import Blog from '../Pages/Event/Blog';
// import Contacts from '../Pages/Contacts/Contacts';
// import '../Components/SimpleHeader.css';
// import '../Components/Toggle.css';
//
// export default class SimpleHeader extends Component {
//     render() {
//
//         return (
//
//             <Router>
//
//             <div className="navbar" >
//                 {/* <div className="container"> */}
//                 <nav role="navigation">
//   <div id="menuToggle">
//     <input type="checkbox" />
//     <span></span>
//     <span></span>
//     <span></span>
//
//     <ul id="menu">
//         <h1 className="mini-menu-tittle">Меню</h1>
//     <li><Link to={"/"} active={{color:"red"}}>Головна</Link></li>
//     <li><Link to={"/about"}>Про мене</Link></li>
//     <li><Link to={"/event"}>Події</Link></li>
//     <li><Link to={"/contacts"}>Контакти</Link></li>
//
//     </ul>
//   </div>
// </nav>
//                     <div className="navbar-header">
//                     <img
//                             src={logo}
//                             height="100%"
//                             width="15%"
//
//                             alt="logo"
//                         />
//
//
//                         <ul className="nav navbar-nav">
//                             <li><Link to={"/"} active={{color:"red"}}>Головна</Link></li>
//                             <li><Link to={"/about"}>Про мене</Link></li>
//                             <li><Link to={"/event"}>Події</Link></li>
//                             <li><Link to={"/contacts"}>Контакти</Link></li>
//                         </ul>
//
//                         <div className="nav-number">
//                                {/* <p>м. Рівне, Україна</p> */}
//                                 <p>+380<nobr> 50 375 45 76</nobr></p>
//                                 </div>
//
//                     </div>
//
//                 </div>
//
//                 {/* </div> */}
//                     <Switch>
//                         <Route exact={true} path="/" component={Home} />
//                         <Route exact={true} path="/about" component={About} />
//
//                         <Route exact={true} path="/contacts" component={Contacts} />
//                         <Route exact={true} path="/groupLessons" component={Blog} />
//                         <Redirect from='/event' to='/groupLessons'/>
//                     </Switch>
//             </Router>
//
//         )
//     }
// }
