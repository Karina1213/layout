import React from "react";
import './Card.scss'
import {Typography} from "../Typography/Typography";
import {Container} from "../Container/Container";


export const Card = (props) => {
    const mixin = props.mixin;

    return (
        <div className={`card ${mixin}`}>
            <div className='card__box'>
                <Container>
                    <Typography mixin='card__title' xxlFontSize primary> {props.title}</Typography>
                    <Typography mixin='card__content' lgFontSize primary> {props.content}</Typography>
                </Container>
            </div>
            <img alt={props.title} className='card__image' src={props.image}/>
        </div>)
};