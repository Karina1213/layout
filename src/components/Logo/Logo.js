import React from "react";
import './Logo.scss'
import logo from '../../assets/images/logo.png'

export const Logo = () => {
    return (
        <img className={'logo'} alt='Logo' src={logo}/>
    )
};