import React from 'react';
import {Navigation} from '../Navigation/Navigation';
import {Logo} from '../Logo/Logo';
import {SearchIcon} from '../SearchIcon/SearchIcon';
import './Header.scss'
import {Container} from "../Container/Container";
import {Dropdown} from "../Dropdown/Dropdown";

export const Header = () => {

    return (
        <header className='header'>
            <Container>
                <div className='header__box'>
                    <div className={'header__navigation-box'}>
                        <Logo/>
                        <div className='header--display-none'>
                            <Navigation burgerMenu='false'/>
                        </div>
                    </div>

                    <div className='header__dropdown-box'>
                        <SearchIcon/>
                        <Dropdown/>
                    </div>
                </div>
            </Container>
        </header>
    );
};