import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/bodyMeasurements';

import BodyMeasurements from '../../components/BodyMeasurements/BodyMeasurements';
import Meals from '../../components/Meals/Meals';

class Day extends Component {
    state = {
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
        this.props.onBodyMeasurementsInit();
        this.props.history.push("/record-measurements");
    }

    addFoodHandler = () => {
        this.props.history.push("/add-food");
    }

    render () {
        return (
            <div>
                <BodyMeasurements clicked={this.recordMeasurementsHandler} />
                <Meals clicked={this.addFoodHandler} />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onBodyMeasurementsInit: () => dispatch(actions.bodyMeasurementsInit())
    };
};

export default connect(null, mapDispatchToProps)(Day);