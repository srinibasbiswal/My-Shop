import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
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
			<Route path="/signup" exact component={AuthenticationPage} />
			<Route path="/login" exact component={AuthenticationPage} />
			<Route component={PageNotFound} />
		</Switch>
	);
}

export default Routes;
