import { createStore } from "redux";
import stateReducer from "./reducers/stateReducer";

const store = createStore(stateReducer);

export default store;
