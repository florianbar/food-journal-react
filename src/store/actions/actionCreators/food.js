import * as actionTypes from '../actionTypes';
import axios from '../../../axios-food-journal';

export const addFoodInit = () => {
    return {
        type: actionTypes.ADD_FOOD_INIT
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

        if (updatedMeal[mealType]) {
            const updatedFoods = [ ...updatedMeal[mealType] ];
            updatedFoods.push(foodDescription);
            updatedMeal[mealType] = updatedFoods;
        } else {
            updatedMeal[mealType] = [foodDescription];
        }
        
        axios.patch("/foods.json", { [id]: updatedMeal })
            .then(response => {
                dispatch(addFoodSuccess(id, mealType, foodDescription));
            })
            .catch(error => {});
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