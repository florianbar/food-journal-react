import React from 'react';

import Widget from '../UI/Widget/Widget';
import Button from '../UI/Button/Button';

const bodyMeasurements = (props) => {
    return (
        <Widget title="Body Measurements">
            <Button 
                btnType="Success"
                clicked={props.clicked}>Record Measurements</Button>
            <p>
            <b>Weight: {props.measurements.weight}kg</b>
            </p>
            <p>
                <b>Body Fat: {props.measurements.bodyFat}%</b>
            </p>
        </Widget>
    );
};

export default bodyMeasurements;