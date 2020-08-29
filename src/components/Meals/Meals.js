import React from 'react';

import classes from './Meals.module.css';
import Widget from '../UI/Widget/Widget';

const meals = (props) => {
    const meals = Object.keys(props.meals).map(meal => {
        const mealFoods = props.meals[meal].map(food => {
            return <span className={classes.Food}>{food}</span>;
        });

        return (
            <div className={classes.Meal}>
                <label>{meal}:</label>
                <div className={classes.Foods}>{mealFoods}</div>
            </div>
        );
    });

    return (
        <Widget title="Today's Meals">
            <button>Add Food</button>
            {meals}
        </Widget>
    );
};

export default meals;