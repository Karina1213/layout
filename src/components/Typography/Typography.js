import React from "react";
import './Typography.scss'

export const Typography = (props) => {
    const {children} = props;
    const mixin = props.mixin;

    const fontSize = (
        props.smFontSize ? 'sm-font-size '
            : props.mdFontSize ? 'md-font-size'
            : props.lgFontSize ? 'lg-font-size'
                : props.xlFontSize ? 'xl-font-size'
                    : props.xxlFontSize ? 'xxl-font-size' : ''
    );

    const color = (
        props.primary ? 'primary'
            : props.secondary ? 'secondary'
            : props.black ? 'black' : '');

    return (
        <p className={`${mixin} ${color} ${fontSize}`}>
            {children}
        </p>
    )
};
