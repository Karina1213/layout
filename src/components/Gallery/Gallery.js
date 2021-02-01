import React from "react";
import {servicesData} from "../../fakeJson/fakeJson";
import './Gallery.scss'
import {ServicesCard} from "../ServicesCard/ServicesCard";

export const Gallery = () => {

    return (
        <ul className='gallery'>
            {servicesData.map((data) => {
                const classes = (data.id === '21' || data.id === '22') ? 'gallery__card--large' : 'gallery__card--small'

                return (
                    <li className={`gallery__card ${classes}`}>
                        <div className='gallery__item'>
                            <ServicesCard {...data}/>
                        </div>
                    </li>)
            })}
        </ul>
    )
};