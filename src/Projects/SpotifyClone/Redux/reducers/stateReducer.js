import { INITIALIZE_TOKEN, SET_CATEGORIES } from "../actionTypes/actionType";

const initialState = {
  TOKEN: null,
  catogories: []
};

const stateReducer = (state = initialState, action) => {
  
    console.log(action.type, action.data);
    switch (action.type) {
      case INITIALIZE_TOKEN:
        return {
          ...state,
          TOKEN: action.data,
        };

      case SET_CATEGORIES:
        return {
          ...state,
          catogories: action.data,
        };

      default:
        return state;
    }
};

export default stateReducer;
