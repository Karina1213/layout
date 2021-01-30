import React from 'react';
import './Navigation.scss'

export const Navigation = (props) => {
    const className = 'navigation__link';
    const mixin = props.mixin;

    const navBar = [{
        link: '#',
        title: 'Главная'
    }, {
        link: '#',
        title: 'Услуги'
    }, {
        link: '#',
        title: 'Наши работы'
    }, {
        link: '#',
        title: 'О нас'
    }, {
        link: '#',
        title: 'Контакты'
    }];

    const classes = `${className} ${mixin}`;
    const render = navBar.map((nav, n) => {

        return (
            <span key={n} className="navigation">
                    <a href={nav.link} key={n} className={classes}>
                        {nav.title}
                    </a>
                </span>)
    });

    return (
        <>{render}</>
    )
};