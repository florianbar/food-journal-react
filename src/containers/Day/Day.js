import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as bodyMeasurementActions from '../../store/actions/actionCreators/bodyMeasurement';
import * as foodActions from '../../store/actions/actionCreators/food';

import BodyMeasurement from '../../components/BodyMeasurement/BodyMeasurement';
import Meals from '../../components/Meals/Meals';

class Day extends Component {
    addMeasurementsHandler = () => {
        this.props.onBodyMeasurementsInit();
        this.props.history.push("/add-measurement");
    }

    addFoodHandler = () => {
        this.props.onAddFoodInit();
        this.props.history.push("/add-food");
    }

    render () {
        return (
            <div>
                <BodyMeasurement clicked={this.addMeasurementsHandler} />
                <Meals clicked={this.addFoodHandler} />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onBodyMeasurementsInit: () => dispatch(bodyMeasurementActions.bodyMeasurementInit()),
        onAddFoodInit: () => dispatch(foodActions.addFoodInit())
    };
};

export default connect(null, mapDispatchToProps)(Day);