import * as actionTypes from '../actionTypes';

export const bodyMeasurementInit = () => {
    return {
        type: actionTypes.BODY_MEASUREMENT_INIT
    };
};

export const bodyMeasurementSubmit = (weight, bodyFat) => {
    return {
        type: actionTypes.BODY_MEASUREMENT_SUCCESS,
        weight: weight,
        bodyFat: bodyFat
    };
};