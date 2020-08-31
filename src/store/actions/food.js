import * as actionTypes from '../actionTypes';
import axios from '../../axios-food-journal';

const fetchFoodsSuccess = (id, foods) => {
    return {
        type: actionTypes.FETCH_FOODS_SUCCESS,
        id: id,
        foods: foods
    }
};

export const fetchFoods = (id) => {
    return dispatch => {
        axios.get("/foods.json")
            .then(response => {
                dispatch(fetchFoodsSuccess(id, response.data));
            })
            .catch(error => {});
    };
};

export const addFoodInit = (mealType) => {
    return {
        type: actionTypes.ADD_FOOD_INIT,
        selectedMealType: mealType
    };
};

const addFoodSuccess = (id, mealType, foodDescription) => {
    return {
        type: actionTypes.ADD_FOOD_SUCCESS,
        id: id,
        mealType: mealType,
        foodDescription: foodDescription
    };
};

export const addFoodSubmit = (id, mealType, foodDescription) => {
    return (dispatch, getState) => {
        const foods = [ ...getState().food.foods[id][mealType] ];
        foods.push(foodDescription);

        axios.put(`/foods/${id}/${mealType}.json`, foods)
            .then(response => {
                dispatch(addFoodSuccess(id, mealType, foodDescription));
            })
            .catch(error => {});
    };
};

const removeFoodSuccess = (id, mealType, foodIndex) => {
    return {
        type: actionTypes.REMOVE_FOOD_SUCCESS,
        id: id,
        mealType: mealType,
        foodIndex: foodIndex
    };
};

export const removeFoodSubmit = (id, mealType, foodIndex) => {
    return (dispatch, getState) => {
        let foods = [ ...getState().food.foods[id][mealType] ];
        foods = foods.filter((result, index) => index !== foodIndex);
        console.log("[removeFoodSubmit]", foods);

        axios.put(`/foods/${id}/${mealType}.json`, foods)
            .then(response => {
                dispatch(removeFoodSuccess(id, mealType, foodIndex));
            })
            .catch(error => {
                console.log(error);
            });     
    };
};