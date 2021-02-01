import React from "react";
import {Container} from "../Container/Container";
import {Typography} from "../Typography/Typography";
import './ServicesSection.scss'
import {Gallery} from "../Gallery/Gallery";
import {Button} from "../Button/Button";


export const ServicesSection = () => {

    return (
        <section className='services-section'>
            <Container>
                <Typography mixin='services-section__title' xxlFontSize black>
                    Услуги
                </Typography>

                <div className='services-section__row'>
                    <Gallery/>
                </div>

                <div className= 'services-section__button'>
                    <Button mixin='services-section__button'>Расчет стоимости</Button>
                </div>
            </Container>
        </section>)
};