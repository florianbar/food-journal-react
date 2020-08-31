import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btntype], classes[props.btnsize]].join(" ")}
        onClick={props.clicked}
        style={props.style}>
        {props.children}
    </button>
);

export default button;