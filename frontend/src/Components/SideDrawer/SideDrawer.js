import React from 'react';
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import './SideDrawer.css'
import logo from '../../assets/logoShuhai.png';
import {Route, Switch} from "react-router";
import MainPage from "../../Pages/MainPage/MainPage";
import GroupLessons from "../Groups/GroupLessons(back-free)";
import IndividualConsultation from "../IndividualConsultation/IndividualConsultation";
import AdminPage from "../../Pages/AdminPage/AdminPage";
import {BrowserRouter as Router} from "react-router-dom";

const SideDrawer = props => {
    let show = props.show;
    let drawerClasses = 'side-drawer';
    if(show){
        drawerClasses = 'side-drawer open';
    }

    return(
        <div className={drawerClasses}>
            <div className="side-drawer__logo">
                <img
                    src={logo}
                    className="side-drawer__logo-image"
                    alt="Logo"
                />
            </div>
            <nav className="side-drawer__navigation">
                <NavLink to="/" smooth={true} className="side-drawer__navigation-link">Головна</NavLink>
                <Link to="about" smooth={true} onClick={()=> show=false} className="side-drawer__navigation-link">Про мене</Link>
                <Link to="group" smooth={true} className="side-drawer__navigation-link">Про групи</Link>
                <Link to="contact" smooth={true} className="side-drawer__navigation-link">Контакти</Link>
                <NavLink to="groupLessons" smooth={true} className="side-drawer__navigation-link">Групові заняття</NavLink>
                <NavLink to="soloLessons" smooth={true} className="side-drawer__navigation-link">Індивідуальні консультації</NavLink>
            </nav>
            <div className="side-drawer__contact">
                <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-50-375-45-76</a>
                <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-68-059-81-35</a>
            </div>
        </div>
    )
}
export default SideDrawer;