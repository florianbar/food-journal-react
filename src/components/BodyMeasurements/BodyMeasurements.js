import React from 'react';

import Widget from '../UI/Widget/Widget';

const bodyMeasurements = (props) => {
    return (
        <Widget title="Body Measurements">
            <button>Record Measurements</button>
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