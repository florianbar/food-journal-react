import * as actionTypes from '../actions/actionTypes';

const initialState = {
    // meals: {
    //     breakfast: ["Eggs"],
    //     morningSnack: ["Whey Protein"],
    //     lunch: ["Tuna"],
    //     afternoonSnack: ["Whey Protein"],
    //     dinner: ["Chicken Stir Fry"],
    //     eveningSnack: ["Ice Cream"]
    // },
    foods: null,
    canAddFood: false
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