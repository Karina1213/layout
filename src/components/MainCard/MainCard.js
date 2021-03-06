import React from "react";
import './MainCard.scss'
import {Typography} from "../Typography/Typography";
import {Container} from "../Container/Container";

export const MainCard = (props) => {

    return (
        <div className='main-card'>
            <Container>
                <Typography mixin='main-card__content' primary> {props.title}</Typography>
            </Container>

            <img alt={props.title} className='main-card__image' src={props.image}/>
        </div>
    );
}
