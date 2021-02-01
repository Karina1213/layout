import React from "react";
import './Button.scss'

export const Button = (props) => {
    const {children} = props;
    const mixin = props.mixin;

    return (
        <a href='#' className={`button ${mixin}`} href='#'>
            {children}
        </a>)
};