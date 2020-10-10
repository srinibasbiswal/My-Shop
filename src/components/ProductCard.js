import React from "react";
import styles from "../stylesheets/style.module.css";
import { Link } from "react-router-dom";

/*
@Parameters
    id
    productName
    price
    realPrice
    primaryImageCode
*/

function ProductCard(props) {
	console.log(props);
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
					<div>
						<button
							className={`uk-button uk-button-primary ${styles.textColorWhite} ${styles.backgroundPrimary} uk-border-rounded uk-width-1-1 uk-padding-remove`}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

export default ProductCard;
