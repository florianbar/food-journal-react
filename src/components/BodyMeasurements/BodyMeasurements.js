import React from 'react';

import { connect } from 'react-redux';

import Widget from '../UI/Widget/Widget';
import Button from '../UI/Button/Button';

const bodyMeasurements = (props) => {
    return (
        <Widget title="Body Measurements">
            <Button 
                btnType="Success"
                clicked={props.clicked}>Record Measurements</Button>
            <p>
                <b>Weight:</b> {props.weight}kg
            </p>
            <p>
                <b>Body Fat:</b> {props.bodyFat}%
            </p>
        </Widget>
    );
};

const mapStateToProps = state => {
    return {
        weight: state.measurement.weight,
        bodyFat: state.measurement.bodyFat
    };
};

export default connect(mapStateToProps)(bodyMeasurements);