import React from "react";
import './Card.scss'
import {Typography} from "../Typography/Typography";

export const Card = (props) => {
    const classes = (props.id === '23') ? 'card__box--left' : 'card__box--right'
    return (
        <div className={`card`}>
            <div className={`card__box ${classes}`}>
                    <Typography mixin='card__title' xxlFontSize primary> {props.title}</Typography>
                    <Typography mixin='card__content' lgFontSize primary> {props.content}</Typography>
            </div>
            <img alt={props.title} className='card__image' src={props.image}/>
        </div>)
};