import React from 'react';

import { connect } from 'react-redux';

import classes from './Meals.module.css';
import Widget from '../UI/Widget/Widget';
import Button from '../UI/Button/Button';

const meals = (props) => {
    const meals = Object.keys(props.meals).map(meal => {
        const mealFoods = props.meals[meal].map(food => {
            return <span className={classes.Food}>{food}</span>;
        });

        return (
            <div className={classes.Meal}>
                <label>{meal}:</label>
                <span className={classes.Foods}>{mealFoods}</span>
                Add
            </div>
        );
    });

    return (
        <Widget title="Today's Meals">
            <Button 
                btnType="Success" 
                clicked={props.clicked}>Add Food</Button>
            {meals}
        </Widget>
    );
};

const mapStateToProps = state => {
    return {
        meals: state.food.meals
    };
};

export default connect(mapStateToProps)(meals);