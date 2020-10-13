import { createStore, combineReducers, applyMiddleware } from "redux";
import amountReducer from "./reducers/amountReducer";
import cartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cart: cartReducer,
	amount: amountReducer,
});

// export default createStore(
// 	rootReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export default createStore(rootReducer, applyMiddleware(thunk));
