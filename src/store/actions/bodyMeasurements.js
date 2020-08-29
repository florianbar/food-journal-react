import * as actionTypes from './actionTypes';

export const bodyMeasurementsInit = () => {
    return {
        type: actionTypes.BODY_MEASUREMENTS_INIT
    };
};

export const bodyMeasurementsSubmit = (weight, bodyFat) => {
    return {
        type: actionTypes.BODY_MEASUREMENTS_SUBMIT,
        weight: weight,
        bodyFat: bodyFat
    };
};