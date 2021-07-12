import React, {Component} from 'react';
import Title from "../Title/Title";
import './FooterMenu.css'
function FooterMenu(props) {
    const footerMenuTitleStyle = {
        color:'white',
        'font-size':'26px',
        'border-bottom':'2px solid white'
    };
        return (
            <div className={props.className}>
                <Title style={footerMenuTitleStyle} text = {props.title}/>
                <div className="menu-points">
                    {props.content}
                </div>
            </div>
        );
}

export default FooterMenu;