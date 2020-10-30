import React from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "../actions/addressActions";
import styles from "../stylesheets/style.module.css";
import { FiCheckSquare, FiPlusSquare } from "react-icons/fi";
import NewAddress from "./Forms/NewAddress";

function AddressSlider(props) {
	const dispatch = useDispatch();
	const onSelectAddress = (address) => {
		console.log(address);
		dispatch(setAddress(address));
	};

	return (
		<div className={`uk-card uk-card-default uk-card-body`}>
			<div
				className={`switcherParent uk-margin-small-bottom`}
				uk-switcher="animation: uk-animation-fade; toggle: > *"
			>
				<button
					class="uk-button uk-button-default uk-margin-medium-right uk-border-rounded  uk-width-1-1@s uk-width-1-3@m uk-margin-small-bottom"
					type="button"
				>
					Select An Address{" "}
					<FiCheckSquare className={styles.iconSize} />
				</button>
				<button
					class="uk-button uk-button-default uk-border-rounded  uk-width-1-1@s uk-width-1-3@m uk-margin-small-bottom"
					type="button"
				>
					Add New Address <FiPlusSquare className={styles.iconSize} />
				</button>
			</div>
			<hr />

			<ul class="uk-switcher uk-margin">
				<li>
					<div
						class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center"
						uk-grid={`true`}
						uk-height-match={`true`}
					>
						{props.addressList.map((address, index) => {
							if (props.selectedAddress.id === address.id) {
								return (
									<div>
										<div
											className={`uk-card uk-card-default uk-padding-small uk-border-rounded ${styles.buttonGradient}`}
										>
											<div
												class="uk-alert-success uk-border-rounded"
												uk-alert={`true`}
											>
												<FiCheckSquare />
												<span> Selected</span>
											</div>
											{props.selectedAddress.toString()}
										</div>
									</div>
								);
							} else {
								return (
									<div
										onClick={() => onSelectAddress(address)}
									>
										<div
											className={`uk-card uk-card-default uk-padding-small uk-border-rounded ${styles.buttonGradient} ${styles.secondaryButton}`}
										>
											{address.toString()}
										</div>
									</div>
								);
							}
						})}
						<div>
							<div
								className={`uk-card uk-card-default uk-card-body uk-border-rounded ${styles.buttonGradient} ${styles.secondaryButton}`}
								uk-switcher-item="1"
							>
								Add a new address{" "}
								<FiPlusSquare className={styles.iconSize} />
							</div>
						</div>
					</div>
				</li>
				<li>
					<NewAddress />
				</li>
			</ul>
		</div>
	);
}

export default AddressSlider;
