import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import workoutReducer from "./reducers/workoutReducer"

const store = createStore(workoutReducer, applyMiddleware(thunk));

export default store;
