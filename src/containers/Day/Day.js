import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as addMeasurementsActions from '../../store/actions/actionCreators/addMeasurements';
import * as addFoodActions from '../../store/actions/actionCreators/addFood';

import BodyMeasurements from '../../components/BodyMeasurements/BodyMeasurements';
import Meals from '../../components/Meals/Meals';

class Day extends Component {
    addMeasurementsHandler = () => {
        this.props.onBodyMeasurementsInit();
        this.props.history.push("/add-measurements");
    }

    addFoodHandler = () => {
        this.props.onAddFoodInit();
        this.props.history.push("/add-food");
    }

    render () {
        return (
            <div>
                <BodyMeasurements clicked={this.addMeasurementsHandler} />
                <Meals clicked={this.addFoodHandler} />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onBodyMeasurementsInit: () => dispatch(addMeasurementsActions.bodyMeasurementsInit()),
        onAddFoodInit: () => dispatch(addFoodActions.addFoodInit())
    };
};

export default connect(null, mapDispatchToProps)(Day);