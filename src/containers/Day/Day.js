import React, { Component } from 'react';

import BodyMeasurements from '../../components/BodyMeasurements/BodyMeasurements';
import Meals from '../../components/Meals/Meals';

class Day extends Component {
    state = {
        measurements: {
            weight: 71,
            bodyFat: 13.3
        },
        meals: {
            breakfast: ["Eggs", "Bacon"],
            morningSnack: ["Whey Protein", "Apple"],
            lunch: ["Tuna", "Banana"],
            afternoonSnack: ["Whey Protein", "Yoghurt"],
            dinner: ["Chicken Stir Fry", "Rice"],
            eveningSnack: ["Ice Cream"]
        }
    };

    recordMeasurementsHandler = () => {
        this.props.history.push("/record-measurements");
    }

    addFoodHandler = () => {
        this.props.history.push("/add-food");
    }

    render () {
        return (
            <div>
                <BodyMeasurements 
                    measurements={this.state.measurements} 
                    clicked={this.recordMeasurementsHandler} />
                <Meals 
                    meals={this.state.meals} 
                    clicked={this.addFoodHandler} />
            </div>
        );
    }
};

export default Day;