import * as actionTypes from './actions/actionTypes';

const initialState = {
    weight: 72,
    bodyFat: 13.3,
    isRecorded: false,
    meals: {
        breakfast: ["Eggs", "Bacon", "Coffee"],
        morningSnack: ["Whey Protein", "Apple"],
        lunch: ["Tuna", "Banana"],
        afternoonSnack: ["Whey Protein", "Yoghurt"],
        dinner: ["Chicken Stir Fry", "Rice"],
        eveningSnack: ["Ice Cream"]
    },
    isFoodAdded: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BODY_MEASUREMENTS_INIT:
            return {
                ...state,
                isRecorded: false
            };

        case actionTypes.BODY_MEASUREMENTS_SUBMIT:
            return {
                ...state,
                weight: action.weight,
                bodyFat: action.bodyFat,
                isRecorded: true
            };
            
        default:
            return state;
    }
};

export default reducer;