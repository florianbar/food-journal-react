import * as actionTypes from '../actions/actionTypes';

const initialState = {
    weight: 72,
    bodyFat: 13.3,
    canAddMeasurements: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BODY_MEASUREMENT_INIT:
            return {
                ...state,
                canAddMeasurements: false
            };

        case actionTypes.BODY_MEASUREMENT_SUCCESS:
            return {
                ...state,
                weight: action.weight,
                bodyFat: action.bodyFat,
                canAddMeasurements: true
            };
            
        default:
            return state;
    }
};

export default reducer;