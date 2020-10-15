import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import { products } from "../data/prodcuts";

function CartProductList() {
	const cartState = useSelector((state) => state.cart);

	const [productDetailsMap, setProductDetailsMap] = useState(null);

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
				console.log(itemDetailMap);
				setProductDetailsMap(itemDetailMap);
			}
		}
		getProductDetailsMap();
	}, []);

	if (
		cartState !== undefined &&
		cartState.itemCodes !== undefined &&
		cartState.itemCodes !== [] &&
		cartState.itemCodes.length > 0 &&
		productDetailsMap !== undefined &&
		productDetailsMap !== null
	) {
		return (
			<div>
				{cartState.itemCodes.map((id, index) => {
					return (
						<React.Fragment>
							<CartProduct
								id={id}
								productName={productDetailsMap[id][`name`]}
								price={productDetailsMap[id][`price`]}
								primaryImageCode={
									productDetailsMap[id][`primaryImageCode`]
								}
							/>
							<hr />
						</React.Fragment>
					);
				})}
			</div>
		);
	} else {
		return <div>Cart is empty</div>;
	}
}

export default CartProductList;
