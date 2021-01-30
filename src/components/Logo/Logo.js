import React from "react";
import './Logo.scss'

export const Logo = () => {
    return (
        <img className={'logo'} alt='Logo' src={require('../../assets/images/logo.png')}/>
    )
};