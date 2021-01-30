import React from "react";
import './ServicesCard.scss'
import {Typography} from "../Typography/Typography";

export const ServicesCard = (props) => {

    return (
        <div className='services-card'>
            <Typography mixin='services-card__content' xlFontSize primary> {props.title}</Typography>
            <img alt={props.title} className='services-card__image' src={props.image}/>
        </div>
    );
}
