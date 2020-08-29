import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionCreators/food';

import Button from '../../components/UI/Button/Button';

class AddFood extends Component {
    state = {
        form: {
            mealType: {
                options: [
                    { value: "breakfast", name: "Breakfast" },
                    { value: "morningSnack", name: "Morning Snack" },
                    { value: "lunch", name: "Lunch" },
                    { value: "afternoonSnack", name: "Afternoon Snack" },
                    { value: "dinner", name: "Dinner" },
                    { value: "eveningSnack", name: "Evening Snack" }
                ],
                value: "breakfast"
            },
            food: {
                value: ""
            }
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        this.props.onAddFoodSubmit(this.state.form.mealType.value, this.state.form.food.value);
    }

    inputChangedHandler = (event, inputName) => {
        console.log("[inputChangedHandler]", event.target.value);

        const updatedForm = {...this.state.form};
        const updatedFormElement = {...updatedForm[inputName]};
        updatedFormElement.value = event.target.value;
        updatedForm[inputName] = updatedFormElement;

        this.setState({
            form: updatedForm
        });
    }

    render () {
        const mealTypes = this.state.form.mealType.options.map(meal => {
            return (
                <option 
                    key={meal.value}
                    value={meal.value}
                >
                    {meal.name}
                </option>
            );
        });

        return (
            <React.Fragment>
                { this.props.canAddFood ? <Redirect to="/" /> : null }

                <form onSubmit={this.formSubmitHandler}>
                    <h1>Add Food</h1>

                    <label>Meal Type:</label>
                    <select onChange={(event) => this.inputChangedHandler(event, "mealType")}>
                        {mealTypes}
                    </select>

                    <label>Food Description:</label>
                    <input 
                        type="text" 
                        name="food" 
                        placeholder="Chicken Stir Fry..." 
                        value={this.state.form.food.value}
                        onChange={(event) => this.inputChangedHandler(event, "food")} />

                    <Button btnType="Success">Submit</Button>
                </form>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        canAddFood: state.food.canAddFood
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFoodSubmit: (mealType, foodDescription) => dispatch(actions.addFoodSuccess(mealType, foodDescription))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);