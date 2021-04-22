import React from 'react';
import "./Header.css";
import logo from '../../assets/logoShuhai.png';
import ToggleButton from '../ToggleButton/ToggleButton'
import {Link} from "react-scroll";
import DropdownItem from '../DropdownItem/DropdownItem'

import {NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const Header = props => {

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-72px";
        }
        prevScrollpos = currentScrollPos;
    }

    return(
        <header className="header">
            <div className="header-container">
                <div className="header__inner">


                    <nav className="header-navigation">
                        <Link to="about" smooth={true} className="header__navigation-link">Про мене</Link>
                        <Link to="group" smooth={true} className="header__navigation-link">Про групи</Link>
                        <NavLink className="brand-image" to="/">
                            <img
                                src={logo}
                                className="header__inner-logo"
                                alt="Logo"
                            />
                        </NavLink>
                        <Link to="contacts" smooth={true} className="header__navigation-link">Контакти</Link>
                        <DropdownItem/>
                    </nav>

                    {/*<div className="header__inner-contact">*/}
                    {/*    <a className="contact-phone" href="tel:0999990999"> 098 411 8945</a>*/}
                    {/*    <a className="contact-phone" href="tel:0999990999"> 098 411 8945</a>*/}
                    {/*</div>*/}
                    <div className="header__inner-toggle">
                        <ToggleButton click={props.drawerClickHandler} toggle={props.toggle}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;