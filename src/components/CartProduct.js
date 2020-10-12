import React from "react";
import slider1 from "../assets/images/img1.jpg";
import styles from "../stylesheets/style.module.css";
import QuantityControl from "./QuantityControl";

/*
@Parameters
    id
    productName
    price
    realPrice
    primaryImageCode
*/

function CartProduct(props) {
	return (
		<div>
			<table className={`uk-table uk-visible@m`}>
				<tbody>
					<tr>
						<td>
							<div className={`uk-card-body`}>
								<button
									type="button"
									data-uk-icon="icon: close"
									className={`uk-margin-medium-right`}
								></button>
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
									<p className={`uk-text-lead`}>
										{props.productName}
									</p>
								</div>
								<div>
									<p>Some Description</p>
								</div>
							</div>
						</td>

						<td>
							<div className={`uk-card-body`}>
								<div>
									{/* <ul
                                        className={`${styles.quantityControlList}`}
                                    >
                                        <li
                                            className={
                                                styles.quantityControlBorder
                                            }
                                        >
                                            <a
                                                href="#"
                                                uk-icon="icon: minus"
                                            ></a>
                                        </li>
                                        <li
                                            className={`uk-margin-small-right uk-margin-small-left`}
                                        >
                                            <p
                                                className={`uk-margin-remove uk-text-bold`}
                                            >
                                                1
                                            </p>
                                        </li>
                                        <li
                                            className={
                                                styles.quantityControlBorder
                                            }
                                        >
                                            <a
                                                href="#"
                                                uk-icon="icon: plus"
                                            ></a>
                                        </li>
                                    </ul> */}
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
					className={`uk-card-badge ${styles.removeItem_SmallDevice}`}
					data-uk-icon="icon: close"
				></button>
				<div className={`uk-flex`}>
					<div>
						<img
							src={slider1}
							alt=""
							width={`100`}
							className={`uk-margin-small-right`}
						></img>
					</div>
					<div className={`uk-text-left`}>
						<p className={`uk-margin-remove-bottom uk-text-bold`}>
							Product Name
						</p>
						<p
							className={`uk-text-meta uk-margin-remove-top uk-margin-remove-bottom`}
						>
							Some random text
						</p>
						<p className={`uk-margin-remove-top`}>
							MRP : <strong>&#x20B9; 90</strong>
						</p>
					</div>
					<div>
						<div
							className={`${styles.quantityControl_SmallDevice} uk-overlay  uk-margin-small-top`}
						>
							<ul className={`${styles.quantityControlList}`}>
								<li className={styles.quantityControlBorder}>
									<a href="#" uk-icon="icon: minus"></a>
								</li>
								<li
									className={`uk-margin-small-right uk-margin-small-left`}
								>
									<p
										className={`uk-margin-remove uk-text-bold`}
									>
										1
									</p>
								</li>
								<li className={styles.quantityControlBorder}>
									<a href="#" uk-icon="icon: plus"></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartProduct;
