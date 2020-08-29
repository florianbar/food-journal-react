import * as actionTypes from '../actions/actionTypes';

const initialState = {
    meals: {
        breakfast: ["Eggs",],
        morningSnack: ["Whey Protein"],
        lunch: ["Tuna"],
        afternoonSnack: ["Whey Protein"],
        dinner: ["Chicken Stir Fry"],
        eveningSnack: ["Ice Cream"]
    },
    canAddFood: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FOOD_INIT:
            return {
                ...state,
                canAddFood: false
            };

        case actionTypes.ADD_FOOD_SUCCESS:
            const updatedMeals = {...state.meals};
            const updatedMeal = [...state.meals[action.mealType]];
            updatedMeal.push(action.foodDescription);
            updatedMeals[action.mealType] = updatedMeal;

            return {
                ...state,
                meals: updatedMeals,
                canAddFood: true
            };
            
        default:
            return state;
    }
};

export default reducer;