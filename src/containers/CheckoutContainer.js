import React from "react";
import AddressSlider from "../components/AddressSlider";
import NewAddress from "../components/Forms/NewAddress";

function CheckoutContainer() {
    return (
        <div className={` uk-width-1-1@s uk-width-2-3@m`}>
            <AddressSlider />
            <NewAddress />
        </div>
    );
}

export default CheckoutContainer;
