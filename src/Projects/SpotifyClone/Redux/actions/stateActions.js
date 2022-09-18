import { INITIALIZE_TOKEN, SET_CATEGORIES } from "../actionTypes/actionType";

const initializeToken = (data) => {

      console.log("state action",data);
  return {
    type: INITIALIZE_TOKEN,
    data,
  };
};

const setCategories = (data) => {
  return {
    type: SET_CATEGORIES,
    data,
  };
};

export { initializeToken, setCategories };
