import React, {Component} from 'react';
import Main from "../../Components/Main/Main";

import './MainPage.css'
import About from "../../Components/About/About"
import Contact from "../../Components/Contact/Contact";
import InvitationSection from "../../Components/Invitation/InvitationSection";
import MotivationSection from "../../Components/MotivationGroup/MotivationSection";
import AboutEducation from "../../Components/AboutEducation/AboutEducation";
import Footer from "../../Components/Footer/Footer";

class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <Main/>
                <InvitationSection/>
                <MotivationSection/>
                <About/>
                <AboutEducation/>
                <Contact/>

            </div>
        );
    }
}

export default MainPage;