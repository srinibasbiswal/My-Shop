import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import amountReducer from "./reducers/amountReducer";
import cartReducer from "./reducers/cartReducer";
import addressReducer from "./reducers/addressReducer";
import purchaseOrderReducer from "./reducers/purchaseOrderReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
	cart: cartReducer,
	amount: amountReducer,
	address: addressReducer,
	purchaseOrder: purchaseOrderReducer,
	authentication: authReducer,
});

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);
