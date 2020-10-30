import React from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "../actions/addressActions";
import styles from "../stylesheets/style.module.css";
import { FiCheckSquare } from "react-icons/fi";

function AddressSlider(props) {
	const dispatch = useDispatch();
	const onSelectAddress = (address) => {
		console.log(address);
		dispatch(setAddress(address));
	};

	return (
		<div className={`uk-card uk-card-default uk-card-body`}>
			<h3 className={`uk-card-title`}>Select An Address</h3>
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
							<div onClick={() => onSelectAddress(address)}>
								<div
									className={`uk-card uk-card-default uk-padding-small uk-border-rounded ${styles.buttonGradient} ${styles.secondaryButton}`}
								>
									{address.toString()}
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}

export default AddressSlider;
