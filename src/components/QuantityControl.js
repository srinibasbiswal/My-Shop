import React from "react";
import styles from "../stylesheets/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import UIkit from "uikit";
import {
	addAndCalculateItem,
	removeAndCalculateItem,
} from "../actions/cartActions";
import { FiMinus, FiPlus } from "react-icons/fi";

function QuantityControl(props) {
	const cartState = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const increaseQuantity = (itemId, quantity) => {
		dispatch(addAndCalculateItem(itemId, quantity));
	};
	const decreaseQuantity = (itemId, quantity) => {
		dispatch(removeAndCalculateItem(itemId, quantity));
	};

	const changeQuantity = (event, itemId) => {
		if (
			event.target.value === undefined ||
			event.target.value === "" ||
			event.target.value === null
		) {
			UIkit.notification({
				message: "The minimum amount should be 1. ",
				status: "warning",
				pos: "top-center",
				timeout: 5000,
				class: "uk-border-rounded",
			});
		} else {
			if (event.target.value > cartState.itemMap[props.id]) {
				dispatch(
					addAndCalculateItem(
						itemId,
						event.target.value - cartState.itemMap[props.id]
					)
				);
			} else if (event.target.value < cartState.itemMap[props.id]) {
				dispatch(
					removeAndCalculateItem(
						itemId,
						cartState.itemMap[props.id] - event.target.value
					)
				);
			}
		}
	};

	return (
		<React.Fragment>
			<div
				className={`${styles.quantityControl} ${styles.buttonGradient} uk-border-rounded`}
				data-quantity=""
			>
				<button
					className={styles.quantityBtn}
					data-quantity-minus=""
					onClick={() => decreaseQuantity(props.id, 1)}
				>
					<FiMinus className={styles.iconSize} />
				</button>
				<input
					type="number"
					className={`${styles.quantityInput}`}
					data-quantity-target=""
					value={
						cartState.itemMap !== undefined &&
						cartState.itemMap !== {} &&
						cartState.itemMap[props.id] !== undefined
							? cartState.itemMap[props.id]
							: "0"
					}
					step="1"
					min="1"
					max=""
					name="quantity"
					onChange={(event) => changeQuantity(event, props.id)}
				/>
				<button
					className={styles.quantityBtn}
					data-quantity-plus=""
					onClick={() => increaseQuantity(props.id, 1)}
				>
					<FiPlus className={styles.iconSize} />
				</button>
			</div>
		</React.Fragment>
	);
}

export default QuantityControl;
