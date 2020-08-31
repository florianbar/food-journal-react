import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as foodActions from '../../store/actions/actionCreators/food';

import classes from './Meals.module.css';
import Widget from '../UI/Widget/Widget';
import Button from '../UI/Button/Button';

class Meals extends Component {
    componentDidMount () {
        this.props.onFetchFoods(this.props.dateStamp);
    }

    render () {
        let widgetContent = <div>Loading...</div>;

        if (this.props.foods && this.props.foods[this.props.dateStamp]) {
            const foods = this.props.foods[this.props.dateStamp];
            const meals = Object.keys(foods).map(meal => {
                const mealFoods = foods[meal].map(food => {
                    return <span className={classes.Food}>{food}</span>;
                });
    
                return (
                    <div className={classes.Meal}>
                        <label>{meal}:</label>
                        <span className={classes.Foods}>{mealFoods}</span>
                    </div>
                );
            });

            widgetContent = (
                <div>
                    <Button 
                        btnType="Success" 
                        clicked={this.props.clicked}>Add Food</Button>
                    {meals}
                </div>
            );
        }

        return (
            <Widget title="Today's Meals">
                {widgetContent}
            </Widget>
        );
    }
};

const mapStateToProps = state => {
    return {
        dateStamp: state.day.todayDateStamp,
        foods: state.food.foods
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFoods: (id) => dispatch(foodActions.fetchFoods(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals);