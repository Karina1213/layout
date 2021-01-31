import React from "react";
import {Container} from "../Container/Container";
import './Footer.scss'
import {SocialNetworks} from "../SocialNetworks/SocialNetworks";

export const Footer = () => {

    return (
        <footer>
            <Container>
                <div className="footer__row">

                    <ul className="footer__block">
                        <li className="footer__title">О компании</li>

                        <li className="footer__content">Наши работы</li>
                        <li className="footer__content">Контакты</li>
                        <li className="footer__content">Доставка</li>
                        <li className="footer__content">Форма заказа</li>
                    </ul>

                    <ul className="footer__block footer__featured-boats">
                        <li className="footer__title">Услуги</li>

                        <li className="footer__content">Производство оборудования</li>
                        <li className="footer__content">Металлическая мебель</li>
                        <li className="footer__content">Металлоконструкции</li>
                        <li className="footer__content">Металлообработка</li>
                    </ul>

                    <ul className="footer__block">
                        <li className="footer__content">Раскрой металла</li>
                        <li className="footer__content">Конструкторское бюро</li>
                        <li className="footer__content">Аренда техники</li>
                        <li className="footer__content">Ремонт техники</li>
                    </ul>

                    <ul className="footer__block">
                        <li className="footer__title">Контактная информация</li>

                        <li className="footer__content footer--font-black footer__content--roboto-font">Заводская улица, 2В, Буча, Киевская область, 08292</li>
                        <li className="footer__content footer--font-black">
                            <span>ПН - ПТ:</span> <span className="footer__content--roboto-font"> 09:00 - 18:00</span>
                        </li>
                        <li className="footer__content footer--font-black footer__content--roboto-font">+38(097)123-45-67</li>

                        <SocialNetworks/>
                    </ul>
                </div>

                <div className='footer__copyright'>
                    <p>Developed by</p>
                    <p>Stubbs</p>
                </div>

            </Container>
        </footer>)
};