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
            <b>Weight: {props.weight}kg</b>
            </p>
            <p>
                <b>Body Fat: {props.bodyFat}%</b>
            </p>
        </Widget>
    );
};

const mapStateToProps = state => {
    return {
        weight: state.weight,
        bodyFat: state.bodyFat
    };
};

export default connect(mapStateToProps)(bodyMeasurements);