import React from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "../actions/addressActions";

function AddressSlider(props) {
	const dispatch = useDispatch();
	const onSelectAddress = (address) => {
		dispatch(setAddress(address));
	};

	return (
		<div className={`uk-card uk-card-default uk-card-body`}>
			<h3 className={`uk-card-title`}>Select An Address</h3>
			<div
				className={`uk-position-relative uk-visible-toggle uk-light uk-card-body`}
				tabIndex="-1"
				uk-slider={`true`}
			>
				<ul
					className={`uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m uk-grid`}
				>
					<li>
						<div
							className={`uk-card uk-card-default uk-card-small uk-card-body uk-box-shadow-large uk-card-hover`}
						>
							<input
								class="uk-checkbox"
								type="checkbox"
								checked
							/>{" "}
							<span
								className={`uk-text-success uk-text-uppercase`}
							>
								Selected
							</span>
							<p>{props.selectedAddress.toString()}</p>
						</div>
					</li>
					{props.addressList.map((address, index) => {
						return (
							<li>
								{(() => {
									if (
										props.selectedAddress.id !== address.id
									) {
										return (
											<div
												className={`uk-card uk-card-default uk-card-small uk-card-body uk-card-hover`}
												onClick={(address) =>
													onSelectAddress(address)
												}
											>
												<p>{address.toString()}</p>
											</div>
										);
									}
								})()}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default AddressSlider;
