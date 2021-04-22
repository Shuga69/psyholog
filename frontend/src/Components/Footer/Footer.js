import React  from 'react'
import logo from '../../assets/logoShuhai.png';
import './Footer.css';
import FooterMenu from "./FooterMenu";
import {Link} from "react-scroll/modules";
import {NavLink} from "react-router-dom";
import SimpleText from "../SimpleText/SimpleText";

function Footer(props) {
    const footer1MenuTitle = 'Меню';
    const footer2MenuTitle = 'Контакти';
    const footer3MenuTitle = 'Соц Мережі';
    const footerBottomText= '@This site was developed by Monovex Studio especially\n for Maria Shuhai';
    const footerSimpleTextStyle = {
        color:'white',
        padding: '10px 0 5px 0'
    };
    const footerMenuContent = <React.Fragment>
        <Link to="about" smooth={true} className="footer__navigation-link">Про мене</Link>
        <Link to="group" smooth={true} className="footer__navigation-link">Про групи</Link>
        <Link to="contacts" smooth={true} className="footer__navigation-link">Контакти</Link>
    </React.Fragment>;
    const footerContactContent = <React.Fragment>
        <SimpleText style={footerSimpleTextStyle} text="+380 50 375 45 76 - Марія Шугай"/>
        <SimpleText style={footerSimpleTextStyle} text = "+380 68 059 81 35 - Іраїда (Менеджер груп)"/>
        </React.Fragment>;
    const footerSocialContent = <React.Fragment>
        <a className="social-link" href="https://www.facebook.com/merypsyholog/">
            <SimpleText style={footerSimpleTextStyle} text="facebook"/>
        </a>
    </React.Fragment>;
        return (
            <footer className="footer">
                <div className="footer-main">
                <NavLink className="footer-brand-image" to="/">
                    <img
                        src={logo}
                        className="footer__inner-logo"
                        alt="Logo"
                        width="200px"
                        height="50px"
                    />
                </NavLink>
                <FooterMenu  content={footerMenuContent} title={footer1MenuTitle}/>
                <FooterMenu content={footerContactContent} title={footer2MenuTitle}/>
                <FooterMenu content={footerSocialContent} title={footer3MenuTitle}/>
                </div>
                <div className="footer-bottom">
                    <a href="http://monovex-studio.herokuapp.com/">{footerBottomText}</a>
                </div>
            </footer>
        )
}
export default Footer;
