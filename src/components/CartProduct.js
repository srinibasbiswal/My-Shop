import React from "react";
import styles from "../stylesheets/style.module.css";
import QuantityControl from "./QuantityControl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../actions/cartActions";
import { FiTrash2 } from "react-icons/fi";

/*
@Parameters
    id
    productName
    price
    realPrice
    primaryImageCode
*/

function CartProduct(props) {
	const dispatch = useDispatch();

	const deleteItem = (itemId) => {
		dispatch(deleteItemFromCart(itemId));
	};

	return (
		<div>
			<table className={`uk-table uk-visible@m`}>
				<tbody>
					<tr>
						<td>
							<div className={`uk-card-body`}>
								<button
									type="button"
									className={`uk-button uk-button-text uk-margin-medium-right`}
									onClick={() => deleteItem(props.id)}
								>
									<FiTrash2 className={styles.iconSize} />
								</button>
								<img
									src={props.primaryImageCode}
									alt=""
									width={`150`}
								></img>
							</div>
						</td>

						<td>
							<div className={`uk-card-body`}>
								<div>
									<Link to={`/product/${props.id}`}>
										<p className={`uk-text-lead`}>
											{props.productName}
										</p>
									</Link>
								</div>
								<div>
									<p>Some Description</p>
								</div>
							</div>
						</td>

						<td>
							<div className={`uk-card-body`}>
								<div>
									<QuantityControl id={props.id} />
								</div>
								<div className={`uk-margin-medium-top`}>
									<h4>
										MRP :{" "}
										<strong>&#x20B9; {props.price}</strong>
									</h4>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<div className={`uk-card-body uk-width-1-2@m uk-hidden@m`}>
				<button
					className={`uk-card-badge uk-button uk-button-text ${styles.removeItem_SmallDevice}`}
					onClick={() => deleteItem(props.id)}
				>
					{" "}
					<FiTrash2 />{" "}
				</button>
				<div className={`uk-flex`}>
					<div>
						<img
							src={props.primaryImageCode}
							alt=""
							width={`100`}
							className={`uk-margin-small-right`}
						></img>
					</div>
					<div className={`uk-text-left`}>
						<Link to={`/product/${props.id}`}>
							<p
								className={`uk-margin-remove-bottom uk-text-bold`}
							>
								{props.productName}
							</p>
						</Link>
						<p
							className={`uk-text-meta uk-margin-remove-top uk-margin-remove-bottom`}
						>
							Some random text
						</p>
						<p className={`uk-margin-remove-top`}>
							MRP : <strong>&#x20B9; {props.price}</strong>
						</p>
					</div>
					<div className={`uk-margin-medium-top`}>
						<QuantityControl id={props.id} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartProduct;
