import React, { Component } from 'react';

import BodyMeasurements from '../../components/BodyMeasurements/BodyMeasurements';
import Meals from '../../components/Meals/Meals';

class Home extends Component {
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

    render () {
        return (
            <div>
                <BodyMeasurements measurements={this.state.measurements} />
                <Meals meals={this.state.meals} />
            </div>
        );
    }
};

export default Home;