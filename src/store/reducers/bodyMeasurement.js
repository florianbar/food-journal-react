import * as actionTypes from '../actions/actionTypes';

const initialState = {
    measurements: null,
    canAddMeasurements: false
};

const initialMeasurement = {
    weight: 0,
    bodyFat: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MEASUREMENTS_SUCCESS:
            const upodatedMeasurements = {...action.measurements};
            const today = new Date();
            const dateStamp = today.toDateString();
            // if today's measurements don't exist, create empty measurements
            if (!upodatedMeasurements[dateStamp]) {
                upodatedMeasurements[dateStamp] = {...initialMeasurement};
            }
            return {
                ...state,
                measurements: upodatedMeasurements
            };

        case actionTypes.ADD_MEASUREMENT_INIT:
            return {
                ...state,
                canAddMeasurements: false
            };

        case actionTypes.ADD_MEASUREMENT_SUCCESS:
            const updatedMeasurements = {...state.measurements};
            const updatedMeasurement = {...state.measurements[action.id]};
            updatedMeasurement.weight = action.weight;
            updatedMeasurement.bodyFat = action.bodyFat;
            updatedMeasurements[action.id] = updatedMeasurement;
            return {
                ...state,
                measurements: updatedMeasurements,
                canAddMeasurements: true
            };
            
        default:
            return state;
    }
};

export default reducer;