import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as foodActions from '../../store/actions/food';

import classes from './Meals.module.css';
import Widget from '../UI/Widget/Widget';
import Foods from './Foods/Foods';

class Meals extends Component {
    componentDidMount () {
        this.props.onFetchFoods(this.props.dateStamp);
    }

    addFoodHandler = (mealType) => {
        this.props.onAddFoodInit(mealType);
        this.props.history.push("/add-food");
    }

    removeFoodHandler = (mealType, foodIndex) => {
        this.props.onRemoveFoodSubmit(this.props.dateStamp, mealType, foodIndex);
    }

    render () {
        let widgetContent = <div>Loading...</div>;

        if (this.props.foods && this.props.foods[this.props.dateStamp]) {
            const foods = this.props.foods[this.props.dateStamp];
            const meals = Object.keys(foods).map(meal => {
                return (
                    <div key={meal} className={classes.Meal}>
                        <label>{meal}:</label>
                        <Foods 
                            meal={meal} 
                            foods={foods[meal]} 
                            addHandler={this.addFoodHandler}
                            removeHandler={this.removeFoodHandler}
                        />
                    </div>
                );
            });

            widgetContent = (
                <React.Fragment>
                    {meals}
                </React.Fragment>
            );
        }

        return (
            <Widget 
                title="Today's Meals" 
                btnTitle="Add" 
                btnClicked={() => this.addFoodHandler()}>
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
        onFetchFoods: (id) => dispatch(foodActions.fetchFoods(id)),
        onAddFoodInit: (mealType) => dispatch(foodActions.addFoodInit(mealType)),
        onRemoveFoodSubmit: (id, mealType, foodIndex) => dispatch(foodActions.removeFoodSubmit(id, mealType, foodIndex))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals);