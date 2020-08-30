import * as actionTypes from '../actionTypes';
import axios from '../../../axios-food-journal';

const fetchMeasurementsSuccess = (measurements) => {
    return {
        type: actionTypes.FETCH_MEASUREMENTS_SUCCESS,
        measurements: measurements
    };
};

export const fetchMeasurements = () => {
    return dispatch => {
        axios.get("/measurements.json")
            .then(response => {
                //console.log("[fetchMeasurements]", response.data);
                dispatch(fetchMeasurementsSuccess(response.data));
            })
            .catch(error => {});
    };
};

export const bodyMeasurementInit = () => {
    return {
        type: actionTypes.ADD_MEASUREMENT_INIT
    };
};

const bodyMeasurementSuccess = (id, data) => {
    return {
        type: actionTypes.ADD_MEASUREMENT_SUCCESS,
        id: id,
        weight: data.weight,
        bodyFat: data.bodyFat
    };
};

export const bodyMeasurementSubmit = (data) => {
    const today = new Date();
    const dateStamp = today.toDateString();

    return dispatch => {
        axios.patch("/measurements.json", { [dateStamp]: data })
            .then(response => {
                console.log(response);
                dispatch(bodyMeasurementSuccess(dateStamp, data));
            })
            .catch(error => {});
    };
};
