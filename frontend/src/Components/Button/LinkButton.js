import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Button.css";

const Button = props => (
    <Link to={props.link} smooth={true} onClick={props.onClick} type={props.type} className="btn-link">{props.text}</Link>
);

export default Button;