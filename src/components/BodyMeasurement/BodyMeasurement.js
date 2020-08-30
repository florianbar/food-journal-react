import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as bodyMeasurementActions from '../../store/actions/actionCreators/bodyMeasurement';

import Widget from '../UI/Widget/Widget';
import Button from '../UI/Button/Button';

class BodyMeasurement extends Component {
    componentDidMount () {
        this.props.onFetchMeasurements();
    }

    render () {
        let widgetContent = <div>Loading...</div>;

        const today = new Date();
        const dateStamp = today.toDateString();
        if (this.props.measurements && this.props.measurements[dateStamp]) {
            widgetContent = (
                <div>
                    <Button 
                        btnType="Success"
                        clicked={this.props.clicked}>Record Measurements</Button>
                    <p>
                        <b>Weight:</b> {this.props.measurements[dateStamp].weight}kg
                    </p>
                    <p>
                        <b>Body Fat:</b> {this.props.measurements[dateStamp].bodyFat}%
                    </p>
                </div>
            );
        }

        return (
            <Widget title="Body Measurements">
                {widgetContent}
            </Widget>
        );
    }
};

const mapStateToProps = state => {
    return {
        measurements: state.bodyMeasurement.measurements
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMeasurements: () => dispatch(bodyMeasurementActions.fetchMeasurements())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyMeasurement);