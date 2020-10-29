import React from "react";
import { useSelector } from "react-redux";
import AddressSlider from "../components/AddressSlider";
import NewAddress from "../components/Forms/NewAddress";

function CheckoutContainer() {
	const addressState = useSelector((state) => state.address);
	return (
		<div className={` uk-width-1-1@s uk-width-2-3@m`}>
			{(() => {
				if (
					addressState.addressCount !== undefined &&
					addressState.addressCount > 0
				) {
					return (
						<AddressSlider
							addressList={addressState.addressList}
							selectedAddress={addressState.selectedAddress}
						/>
					);
				} else {
					return <NewAddress />;
				}
			})()}
		</div>
	);
}

export default CheckoutContainer;
