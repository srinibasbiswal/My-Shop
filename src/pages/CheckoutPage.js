import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PriceBreakup from "../components/PriceBreakup";
import CheckoutContainer from "../containers/CheckoutContainer";

function CheckoutPage() {
    return (
        <React.Fragment>
            <Header />
            <div
                className={`uk-text-center uk-margin-small-top`}
                uk-grid={"true"}
                uk-height-match={`target: > div > .uk-card`}
            >
                <CheckoutContainer />
                <PriceBreakup />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default CheckoutPage;
