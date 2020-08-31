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
                console.log("[fetchFoods]", response.data);
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

const removeFoodSuccess = (id, mealType, foodIndex) => {
    return {
        type: actionTypes.REMOVE_FOOD_SUCCESS,
        id: id,
        mealType: mealType,
        foodIndex: foodIndex
    };
};

export const removeFoodSubmit = (id, mealType, foodIndex) => {
    return dispatch => {
        axios.delete(`/foods/${id}/${mealType}/${foodIndex}.json`)
            .then(response => {
                dispatch(removeFoodSuccess(id, mealType, foodIndex));
            })
            .catch(error => {
                console.log(error);
            });        
    };
};