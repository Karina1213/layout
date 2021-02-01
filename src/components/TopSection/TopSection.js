import React from "react";
import './TopSection.scss'
import {Slider} from "../Slider/Slider";
import {Slide} from "../Slider/Slide";
import {sliderData} from "../../fakeJson/fakeJson";
import {MainCard} from "../MainCard/MainCard";

export const TopSection = () => {

    return (
        <section className={`top-section`}>
            <Slider>
                {sliderData.map((data) =>

                    <Slide key={data.id}>
                        <MainCard {...data}/>
                    </Slide>
                )}
            </Slider>
        </section>)
};