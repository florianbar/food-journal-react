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

    addFoodHandler = (mealType) => {
        this.props.onAddFoodInit(mealType);
        this.props.history.push("/add-food");
    }

    render () {
        let widgetContent = <div>Loading...</div>;

        if (this.props.foods && this.props.foods[this.props.dateStamp]) {
            const foods = this.props.foods[this.props.dateStamp];
            const meals = Object.keys(foods).map(mealType => {
                const mealFoods = foods[mealType].map((food, index) => {
                    return (
                        <span 
                            key={index} 
                            className={classes.Food}>{food}</span>
                    );
                });
    
                return (
                    <div key={mealType} className={classes.Meal}>
                        <label>{mealType}:</label>
                        <span className={classes.Foods}>{mealFoods}</span>
                        <Button 
                            btntype="Success" 
                            btnsize="sm" 
                            style={{display: "inline-block"}}
                            clicked={() => this.addFoodHandler(mealType)}>+ Add</Button>
                    </div>
                );
            });

            widgetContent = (
                <div>
                    <Button 
                        btntype="Success" 
                        clicked={() => this.addFoodHandler()}>Add Food</Button>
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
        onAddFoodInit: (mealType) => dispatch(foodActions.addFoodInit(mealType)),
        onFetchFoods: (id) => dispatch(foodActions.fetchFoods(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals);