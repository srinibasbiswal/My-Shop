import React from "react";
import { Switch, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ResultPage from "../pages/ResultPage";

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/home" exact component={HomePage} />
			<Route
				path="/:searchType/search/:searchValue"
				exact
				component={ResultPage}
			/>
			<Route path="/product/:id" exact component={ProductPage} />
			<Route path="/cart" exact component={CartPage} />
			<Route path="/checkout" exact component={CheckoutPage} />
			{/* TODO : Add route for 404 page */}
		</Switch>
	);
}

export default Routes;
