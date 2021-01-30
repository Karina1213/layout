import React from "react";
import './OurCompanySection.scss'
import {Card} from "../Card/Card";
import {ourCompanyData} from "../../fakeJson/fakeJson";
import {Container} from "../Container/Container";
import {Typography} from "../Typography/Typography";

export const OurCompanySection = () => {

    return (
        <section className='our-company-section'>
            <Container>
                <Typography mixin='our-company-section__title' xxlFontSize black>
                    Наша компания
                </Typography>
            </Container>

            {ourCompanyData.map((data) =>
                <Card {...data}/>
            )}
        </section>)
};