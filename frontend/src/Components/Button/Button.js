import React, {Component} from 'react';
import {Link} from "react-scroll";
import "./Button.css";

const Button = props => (
    <Link to={props.link} smooth={true} onClick={props.onClick} className="btn-link">{props.text}</Link>
);

export default Button;