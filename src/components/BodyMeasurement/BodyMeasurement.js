import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as bodyMeasurementActions from '../../store/actions/bodyMeasurement';

import Widget from '../UI/Widget/Widget';

class BodyMeasurement extends Component {
    componentDidMount () {
        this.props.onFetchMeasurements(this.props.dateStamp);
    }

    addMeasurementsHandler = () => {
        this.props.onBodyMeasurementsInit();
        this.props.history.push("/add-measurement");
    }

    render () {
        let widgetContent = <div>Loading...</div>;

        if (this.props.measurements && this.props.measurements[this.props.dateStamp]) {
            widgetContent = (
                <div>
                    <p>
                        <b>Weight:</b> {this.props.measurements[this.props.dateStamp].weight}kg
                    </p>
                    <p>
                        <b>Body Fat:</b> {this.props.measurements[this.props.dateStamp].bodyFat}%
                    </p>
                </div>
            );
        }

        return (
            <Widget 
                title="Body Measurements" 
                btnTitle="Update"
                btnClicked={this.addMeasurementsHandler}>
                {widgetContent}
            </Widget>
        );
    }
};

const mapStateToProps = state => {
    return {
        dateStamp: state.day.todayDateStamp,
        measurements: state.bodyMeasurement.measurements
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBodyMeasurementsInit: () => dispatch(bodyMeasurementActions.bodyMeasurementInit()),
        onFetchMeasurements: (id) => dispatch(bodyMeasurementActions.fetchMeasurements(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyMeasurement);