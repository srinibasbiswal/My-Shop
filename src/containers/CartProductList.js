import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import { products } from "../data/prodcuts";
import empty_cart from "../assets/images/empty_cart.svg";
import { FiPlusSquare, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../stylesheets/style.module.css";

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
		return (
			<div className={`uk-padding-small uk-padding-medium-bottom`}>
				<p className={`uk-text-lead uk-hidden@m`}>
					Your <FiShoppingCart /> cart seems to be{" "}
					<span className={"uk-text-warning"}>EMPTY</span> <br />
					Let&apos;s{" "}
					<Link to="/">
						<span>ADD</span>
					</Link>{" "}
					some stuff.{" "}
					<Link to="/">
						<FiPlusSquare className={styles.iconSize} />
					</Link>
				</p>
				<img
					width={350}
					height={350}
					alt={350}
					uk-img={empty_cart}
					uk-svg
				/>
				<p className={`uk-text-lead uk-visible@m `}>
					Your <FiShoppingCart /> cart seems to be{" "}
					<span className={"uk-text-warning"}>EMPTY</span> <br />
					Let&apos;s{" "}
					<Link to="/">
						<span>ADD</span>
					</Link>{" "}
					some stuff.{" "}
					<Link to="/">
						<FiPlusSquare className={styles.iconSize} />
					</Link>
				</p>
			</div>
		);
	}
}

export default CartProductList;
