import { INITIALIZE_TOKEN } from "../actionTypes/actionType";

const initializeToken = (data) => {
  return {
    type: INITIALIZE_TOKEN,
    data,
  };
};

export { initializeToken };
