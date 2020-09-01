import React from 'react';

import classes from './Food.module.css';
import Button from '../../../UI/Button/Button';

const food = (props) => {
    return (
        <div className={classes.Food}>
            <span className={classes.FoodName}>
                {props.name}
            </span>
            <Button 
                btntype="light" 
                btnsize="sm"
                style={{display: "inline-block"}}
                clicked={props.removeHandler}>x</Button>
        </div>
    );
};

export default food;