import React from "react";
import './Button.scss'

export const Button = (props) => {
    const {children} = props;
    const mixin = props.mixin;

    return (
        <a className={`button ${mixin}`} href='#'>
            {children}
        </a>)
};