import React from "react";
import styles from "../stylesheets/style.module.css";
import { Link } from "react-router-dom";
import QuantityControl from "./QuantityControl";
import { useDispatch, useSelector } from "react-redux";
import { addAndCalculateItem } from "../actions/cartActions";
import { FiShoppingCart } from "react-icons/fi";

/*
@Parameters
    id
    productName
    price
    realPrice
    primaryImageCode
*/

function ProductCard(props) {
	const dispatch = useDispatch();

	const increaseQuantity = (itemId, quantity) => {
		dispatch(addAndCalculateItem(itemId, quantity));
	};

	const cartState = useSelector((state) => state.cart);

	if (props !== undefined) {
		return (
			<div className={`uk-card uk-card-default uk-border-rounded`}>
				<div className={`uk-card-media-top uk-text-center`}>
					<img
						src={props.primaryImageCode}
						alt={props.productName}
						className={`uk-border-rounded ${styles.productImg}`}
					/>
				</div>
				<div
					className={`uk-card-body uk-text-center  uk-padding-small`}
				>
					<Link to={`/product/${props.id}`}>
						<p className={`uk-card-title`}>{props.productName}</p>
					</Link>
					<p>
						MRP : <s>&#x20B9; {props.realPrice}</s>
						<br />
						<strong>&#x20B9; {props.price}</strong>
					</p>
					{(() => {
						if (
							cartState.itemMap !== undefined &&
							cartState.itemMap !== {} &&
							cartState.itemMap[props.id] !== undefined
						) {
							return <QuantityControl id={props.id} />;
						} else {
							return (
								<div>
									<button
										className={`uk-button uk-button-primary uk-border-rounded uk-width-1-1 uk-padding-remove ${styles.buttonGradient}`}
										onClick={() =>
											increaseQuantity(props.id, 1)
										}
									>
										Add <FiShoppingCart />
									</button>
								</div>
							);
						}
					})()}
					<div className={` uk-margin-small-top`}></div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

export default ProductCard;
