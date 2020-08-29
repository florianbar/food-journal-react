import * as actionTypes from '../actionTypes';

export const addFoodInit = () => {
    return {
        type: actionTypes.ADD_FOOD_INIT
    };
};

export const addFoodSuccess = (mealType, foodDescription) => {
    return {
        type: actionTypes.ADD_FOOD_SUCCESS,
        mealType: mealType,
        foodDescription: foodDescription
    };
};