import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default createStore(rootReducer);
