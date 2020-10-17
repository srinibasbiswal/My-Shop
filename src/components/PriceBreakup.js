import React from "react";
import styles from "../stylesheets/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { generatePO } from "../actions/purchaseOrderActions";

function PriceBreakup(props) {
	const amount = useSelector((state) => state.amount);
	const dispatch = useDispatch();

	const movetoAddAddress = () => {
		if (window.location.pathname === "/checkout") {
			dispatch(generatePO());
		} else {
			props.history.push(`/checkout`);
		}
	};

	return (
		<React.Fragment>
			<div className={`uk-width-1-3 uk-visible@m`}>
				<div className={`uk-card uk-card-default uk-card-body`}>
					<div uk-sticky={`true ; offset: 100`}>
						<table className={`uk-table`}>
							<caption>Price Distribution</caption>
							<tbody>
								<tr>
									<td>Amount</td>
									<td>&#x20B9; {amount.itemsAmount}</td>
								</tr>
								<tr>
									<td>Delivery Charges</td>
									<td>
										{(() => {
											if (
												amount.overRideDeliveryCharges !==
													undefined &&
												amount.overRideDeliveryCharges ===
													true
											) {
												return (
													<React.Fragment>
														&#x20B9;
														<s>
															{
																amount.deliveryCharges
															}
														</s>
														&nbsp; &#x20B9; 50
													</React.Fragment>
												);
											} else {
												return (
													<React.Fragment>
														&#x20B9;
														{amount.deliveryCharges}
													</React.Fragment>
												);
											}
										})()}
									</td>
								</tr>
								<tr>
									<td>Baggage Charges</td>
									<td>
										{(() => {
											if (
												amount.overRidePackagingCharges !==
													undefined &&
												amount.overRidePackagingCharges ===
													true
											) {
												return (
													<React.Fragment>
														&#x20B9;
														<s>
															{
																amount.packagingCharges
															}
														</s>
														&nbsp; &#x20B9; 0
													</React.Fragment>
												);
											} else {
												return (
													<React.Fragment>
														&#x20B9;
														{
															amount.packagingCharges
														}
													</React.Fragment>
												);
											}
										})()}
									</td>
								</tr>
								<hr />
								<tr>
									<td>Total Amount</td>
									<td>&#x20B9; {amount.totalAmount} </td>
								</tr>
							</tbody>
						</table>
						<button
							className={`uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom`}
							onClick={() => movetoAddAddress()}
						>
							Place Order
						</button>
					</div>
				</div>
			</div>
			<div>
				<div
					className={`${styles.TotalPrice_SmallDevice} uk-position-fixed uk-position-bottom uk-sticky uk-box-shadow-top uk-box-shadow-large uk-hidden@m`}
				>
					<div
						className={`sticky-content uk-card uk-card-default uk-text-center uk-padding-small`}
					>
						<p className={`uk-text-bold uk-margin-remove-bottom`}>
							Total Amount &#x20B9; {amount.totalAmount}
						</p>
						<ul
							uk-accordion="toggle: .showPriceBreakup"
							className={`uk-margin-remove-top`}
						>
							<li>
								<p
									className={`uk-text-meta showPriceBreakup uk-margin-remove-top `}
								>
									See price breakup
								</p>
								<div className={`uk-accordion-content`}>
									<button
										className={`showPriceBreakup uk-button uk-button-default`}
									>
										Close Price Breakup{" "}
										<span
											className={`uk-margin-small-right`}
											uk-icon="close"
										></span>
									</button>
									<table className={`uk-table`}>
										<tbody className={`uk-text-bold`}>
											<tr>
												<td>Amount</td>
												<td>
													&#x20B9;{" "}
													{amount.itemsAmount}
												</td>
											</tr>
											<tr>
												<td>Delivery Charges</td>
												<td>
													&#x20B9;{" "}
													{amount.deliveryCharges}
												</td>
											</tr>
											<tr>
												<td>Baggage Charges</td>
												<td>
													&#x20B9;{" "}
													{amount.packagingCharges}
												</td>
											</tr>
											<hr />
											<tr>
												<td>Total Amount</td>
												<td>
													&#x20B9;{" "}
													{amount.totalAmount}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</li>
						</ul>

						<button
							className={`uk-button uk-button-primary uk-width-1-1`}
						>
							Place Order
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default withRouter(PriceBreakup);
