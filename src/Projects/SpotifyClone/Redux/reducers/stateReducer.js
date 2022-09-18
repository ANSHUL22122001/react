import {
  INITIALIZE_TOKEN
} from "../actionTypes/actionType";

const initialState = {
  TOKEN: null
};

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
    case INITIALIZE_TOKEN:
      return {
        ...state,
        TOKEN: action.data,
      };

    default:
      return state;
  }
};

export default stateReducer;
