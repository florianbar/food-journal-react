import React, { Component } from 'react';

import BodyMeasurement from '../../components/BodyMeasurement/BodyMeasurement';
import Meals from '../../components/Meals/Meals';

class Day extends Component {
    render () {
        return (
            <div>
                <BodyMeasurement {...this.props} />
                <Meals {...this.props} />
            </div>
        );
    }
};

export default Day;