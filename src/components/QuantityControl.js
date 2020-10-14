import React from "react";
import styles from "../stylesheets/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	addAndCalculateItem,
	removeAndCalculateItem,
} from "../actions/cartActions";

function QuantityControl(props) {
	const cartState = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const increaseQuantity = (itemId, quantity) => {
		dispatch(addAndCalculateItem(itemId, quantity));
	};
	const decreaseQuantity = (itemId, quantity) => {
		dispatch(removeAndCalculateItem(itemId, quantity));
	};

	const changeQuantity = (itemId, quantity) => {};

	return (
		<React.Fragment>
			<div className={styles.quantityControl} data-quantity="">
				<button
					className={styles.quantityBtn}
					data-quantity-minus=""
					onClick={() => decreaseQuantity(props.id, 1)}
				>
					<svg viewBox="0 0 409.6 409.6">
						<g>
							<g>
								<path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
							</g>
						</g>
					</svg>
				</button>
				<input
					type="number"
					className={styles.quantityInput}
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
					onChange={props.changeQuantity}
				/>
				<button
					className={styles.quantityBtn}
					data-quantity-plus=""
					onClick={() => increaseQuantity(props.id, 1)}
				>
					<svg viewBox="0 0 426.66667 426.66667">
						<path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
					</svg>
				</button>
			</div>
		</React.Fragment>
	);
}

export default QuantityControl;
