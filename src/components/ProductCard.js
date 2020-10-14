import React from "react";
import styles from "../stylesheets/style.module.css";
import { Link } from "react-router-dom";
import QuantityControl from "./QuantityControl";
import { useDispatch, useSelector } from "react-redux";
import { addAndCalculateItem } from "../actions/cartActions";

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
				<div className={`uk-card-media-top `}>
					<img
						src={props.primaryImageCode}
						alt={props.productName}
						className={`uk-border-rounded`}
					/>
				</div>
				<div
					className={`uk-card-body uk-text-center  uk-padding-small`}
				>
					<Link to={`/product/${props.id}`}>
						<h3 className={`uk-card-title`}>{props.productName}</h3>
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
										className={`uk-button uk-button-primary ${styles.textColorWhite} ${styles.backgroundPrimary} uk-border-rounded uk-width-1-1 uk-padding-remove`}
										onClick={() =>
											increaseQuantity(props.id, 1)
										}
									>
										Add to cart
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
