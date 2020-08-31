import * as actionTypes from '../actionTypes';
import axios from '../../../axios-food-journal';

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

const fetchFoodsSuccess = (foods) => {
    return {
        type: actionTypes.FETCH_FOODS_SUCCESS,
        foods: foods
    }
};

export const fetchFoods = () => {
    return dispatch => {
        axios.get("/foods.json")
            .then(response => {
                dispatch(fetchFoodsSuccess(response.data));
            })
            .catch(error => {});
    };
};