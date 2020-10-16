import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import amountReducer from "./reducers/amountReducer";
import cartReducer from "./reducers/cartReducer";
import addressReducer from "./reducers/addressReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cart: cartReducer,
	amount: amountReducer,
	address: addressReducer,
});

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);
