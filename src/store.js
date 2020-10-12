import { createStore, combineReducers } from "redux";
import amountReducer from "./reducers/amountReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
	cart: cartReducer,
	amount: amountReducer,
});

export default createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
