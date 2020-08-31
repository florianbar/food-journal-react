import * as actionTypes from '../actionTypes';

const initialState = {
    foods: null,
    selectedMealType: null,
    canAddFood: true
};

const fetchFoodsSuccess = (state, action) => {
    if (!action.foods) {
        action.foods = {};
    }

    // If today's foods don't exist yet, create it
    if (!action.foods[action.id]) {
        action.foods[action.id] = {};
    }

    for (let id in action.foods) {
        action.foods[id] = {
            breakfast: action.foods[id]["breakfast"] || [],
            morningSnack: action.foods[id]["morningSnack"] || [],
            lunch: action.foods[id]["lunch"] || [],
            afternoonSnack: action.foods[id]["afternoonSnack"] || [],
            dinner: action.foods[id]["dinner"] || [],
            eveningSnack: action.foods[id]["eveningSnack"] || []
        };
    }

    console.log("[fetchFoodsSuccess]", action.foods);

    return {
        ...state,
        foods: action.foods
    };
}

const addFoodInit = (state, action) => {
    return {
        ...state,
        selectedMealType: action.selectedMealType,
        canAddFood: true
    };
};

const addFoodSuccess = (state, action) => {
    const updatedMeals = { ...state.foods };
    const updatedMeal = { ...updatedMeals[action.id] };
    const updatedFoods = [ ...updatedMeal[action.mealType] ];
    updatedFoods.push(action.foodDescription);
    updatedMeal[action.mealType] = updatedFoods;

    return {
        ...state,
        foods: updatedMeals,
        canAddFood: false
    };
};

const removeFoodSuccess = (state, action) => {
    const updatedMeals = { ...state.foods };
    const updatedMeal = { ...updatedMeals[action.id] };
    const updatedFoods = updatedMeal[action.mealType].filter((result, index) => index !== action.foodIndex);
    updatedMeals[action.id][action.mealType] = updatedFoods;
    console.log("[removeFoodSuccess]", updatedMeals);
    return {
        ...state,
        foods: updatedMeals
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FOODS_SUCCESS: return fetchFoodsSuccess(state, action);
        case actionTypes.ADD_FOOD_INIT: return addFoodInit(state, action);
        case actionTypes.ADD_FOOD_SUCCESS: return addFoodSuccess(state, action);
        case actionTypes.REMOVE_FOOD_SUCCESS: return removeFoodSuccess(state, action);
        default: return state;
    }
};

export default reducer;