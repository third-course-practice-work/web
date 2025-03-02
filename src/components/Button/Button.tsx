import React from "react";
import * as classes from './Button.module.scss';

const Button = () => {
    return (
        <button className={classes.my_btn}>
            <span>hello world</span>
        </button>
    )
}

export default Button;