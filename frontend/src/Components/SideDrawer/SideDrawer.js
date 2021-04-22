import React from 'react';
import {Link} from "react-scroll";
import './SideDrawer.css'
import logo from '../../assets/logoShuhai.png';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
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
                <Link to="services" smooth={true} className="side-drawer__navigation-link">Послуги</Link>
                <Link to="motivation" smooth={true} className="side-drawer__navigation-link">Переваги</Link>
                <Link to="reviews" smooth={true} className="side-drawer__navigation-link">Відгуки</Link>
                <Link to="portfolio" smooth={true} className="side-drawer__navigation-link">Наші проекти</Link>
                <Link to="order" smooth={true} className="side-drawer__navigation-link">Замовити</Link>
            </nav>
            <div className="side-drawer__contact">
                <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99</a>
                <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99</a>
            </div>
        </div>
    )
}
export default SideDrawer;