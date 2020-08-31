import * as actionTypes from '../actions/actionTypes';

const initialState = {
    foods: null,
    canAddFood: true
};

const initialFoods = {
    breakfast: [],
    morningSnack: [],
    lunch: [],
    afternoonSnack: [],
    dinner: [],
    eveningSnack: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FOODS_SUCCESS:
            const upodatedFoods = {...action.foods};
            const today = new Date();
            const dateStamp = today.toDateString();
            // if today's foods don't exist, create empty foods
            if (!upodatedFoods[dateStamp]) {
                upodatedFoods[dateStamp] = {...initialFoods};
            }
            return {
                ...state,
                foods: upodatedFoods
            };

        case actionTypes.ADD_FOOD_INIT:
            return {
                ...state,
                canAddFood: true
            };

        case actionTypes.ADD_FOOD_SUCCESS:
            const updatedMeals = { ...state.foods };
            const updatedMeal = { ...updatedMeals[action.id] };

            if (updatedMeal[action.mealType]) {
                const updatedFoods = [ ...updatedMeal[action.mealType] ];
                updatedFoods.push(action.foodDescription);
                updatedMeal[action.mealType] = updatedFoods;
            } else {
                updatedMeal[action.mealType] = [action.foodDescription];
            }
            
            return {
                ...state,
                foods: updatedMeals,
                canAddFood: false
            };
            
        default:
            return state;
    }
};

export default reducer;