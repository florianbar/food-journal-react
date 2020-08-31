import React from 'react';

import classes from './Foods.module.css';
import Food from './Food/Food';
import Button from '../../UI/Button/Button';

const foods = (props) => {
    const foods = props.foods.map((food, foodIndex) => {
        return (
            <Food 
                key={foodIndex} 
                name={food} 
                removeHandler={() => props.removeHandler(props.meal, foodIndex)} 
            />
        );
    });

    return (
        <div>
            <span className={classes.Foods}>
                {foods}
            </span>
            <Button 
                btntype="Success" 
                btnsize="xs" 
                style={{display: "inline-block"}}
                clicked={() => props.addHandler(props.meal)}
            >+ Add</Button>
        </div>
    );
};

export default foods;