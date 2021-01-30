import React from 'react';
import {Navigation} from '../Navigation/Navigation';
import {Logo} from '../Logo/Logo';
import {SearchIcon} from '../SearchIcon/SearchIcon';
import './Header.scss'
import {Container} from "../Container/Container";

export const Header = () => {

    return (
        <header className='header'>
            <Container>
                <div>
                    <Logo/>
                    <Navigation mixin=''/>
                </div>

                <div>
                    <SearchIcon/>
                </div>
            </Container>
        </header>
    );
};