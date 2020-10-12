import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../data/prodcuts";

function CartProductList() {
	const dispatch = useDispatch();
	const cartState = useSelector((state) => state.cart);

	const [productDetailsMap, setProductDetailsMap] = useState({});

	useEffect(() => {
		function getProductDetailsMap() {
			if (
				cartState !== undefined &&
				cartState.itemCodes !== undefined &&
				cartState.itemCodes !== []
			) {
				var itemDetailMap = {};
				products.filter(function (item) {
					if (cartState.itemCodes.includes(item.id)) {
						itemDetailMap[item.id] = item;
					}
				});
				setProductDetailsMap(itemDetailMap);
			}
		}
		getProductDetailsMap();
	}, [cartState.itemCodes]);

	return (
		<div>
			<hr />
			<CartProduct />
			<hr />
			<CartProduct />
			<hr />
			<CartProduct />
			<hr />
			<CartProduct />
			<hr />
			<CartProduct />
			<hr />
			<CartProduct />
			<hr />
			<CartProduct />
		</div>
	);
}

export default CartProductList;
