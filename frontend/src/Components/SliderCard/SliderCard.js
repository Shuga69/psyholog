import React from 'react';
import './SliderCard.css'
import SimpleText from "../SimpleText/SimpleText";

function SliderCard (props) {
    const sliderItemTextStyle = {
        padding: '20px 20px 20px 20px',
        'font-size': '18px'
    };
    return (
        <div className="slider-item">

            <SimpleText style={sliderItemTextStyle} text={props.text}/>
        </div>
    );
}
export default SliderCard;