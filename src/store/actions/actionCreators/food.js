import * as actionTypes from '../actionTypes';
import axios from '../../../axios-food-journal';

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
        const state = getState();
        const updatedMeals = { ...state.food.foods };
        const updatedMeal = { ...updatedMeals[id] };
        const updatedFoods = [ ...updatedMeal[mealType] ];
        updatedFoods.push(foodDescription);
        updatedMeal[mealType] = updatedFoods;
        
        axios.patch("/foods.json", { [id]: updatedMeal })
            .then(response => {
                dispatch(addFoodSuccess(id, mealType, foodDescription));
            })
            .catch(error => {});
    };
};

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