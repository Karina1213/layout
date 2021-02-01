import React from 'react';
import './Navigation.scss'

export const Navigation = (props) => {
    const burgerMenu = props.burgerMenu;

    let navBar = [{
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

    const burgerNavBar = {
        link: '#',
        title: 'Меню'
    };

    if (burgerMenu === 'true') {
        navBar.unshift(burgerNavBar)
    }
    const classes = burgerMenu === 'true' ? 'navigation__burger' : 'navigation__link';
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