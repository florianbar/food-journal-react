import * as actionTypes from '../actionTypes';
import axios from '../../axios-food-journal';

const fetchMeasurementsSuccess = (id, measurements) => {
    return {
        type: actionTypes.FETCH_MEASUREMENTS_SUCCESS,
        id: id,
        measurements: measurements
    };
};

export const fetchMeasurements = (id) => {
    return dispatch => {
        axios.get("/measurements.json")
            .then(response => {
                console.log(response.data);
                dispatch(fetchMeasurementsSuccess(id, response.data));
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

export const bodyMeasurementSubmit = (id, data) => {
    return dispatch => {
        axios.patch("/measurements.json", { [id]: data })
            .then(response => {
                console.log(response);
                dispatch(bodyMeasurementSuccess(id, data));
            })
            .catch(error => {});
    };
};
