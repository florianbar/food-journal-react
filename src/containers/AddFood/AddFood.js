import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/food';

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

    componentDidMount () {
        if (this.props.selectedMealType) {
            const updatedForm = {...this.state.form};
            const updatedMealTypes = {...updatedForm.mealType};
            updatedMealTypes.value = this.props.selectedMealType;
            updatedForm.mealType = updatedMealTypes;
            this.setState({ form: updatedForm });
        }
    }

    backButtonHandler = () => {
        this.props.history.push("/");
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onAddFoodSubmit(this.props.dateStamp, this.state.form.mealType.value, this.state.form.food.value);
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
                    value={meal.value}>{meal.name}</option>
            );
        });

        return (
            <React.Fragment>
                { this.props.canAddFood ? null : <Redirect to="/" /> }

                <Button 
                    btntype="Danger" 
                    clicked={this.backButtonHandler}>Back</Button>

                <form onSubmit={this.formSubmitHandler}>
                    <h1>Add Food</h1>

                    <label>Meal Type:</label>
                    <select 
                        value={this.state.form.mealType.value} 
                        onChange={(event) => this.inputChangedHandler(event, "mealType")}>
                        {mealTypes}
                    </select>

                    <label>Food Description:</label>
                    <input 
                        type="text" 
                        name="food" 
                        placeholder="Chicken Stir Fry..." 
                        value={this.state.form.food.value}
                        onChange={(event) => this.inputChangedHandler(event, "food")} />

                    <Button btntype="Success">Submit</Button>
                </form>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        dateStamp: state.day.todayDateStamp,
        selectedMealType: state.food.selectedMealType,
        canAddFood: state.food.canAddFood
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFoodSubmit: (id, mealType, foodDescription) => dispatch(actions.addFoodSubmit(id, mealType, foodDescription))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);