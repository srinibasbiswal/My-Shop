import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PriceBreakup from "../components/PriceBreakup";
import CartProductList from "../containers/CartProductList";

function CartPage() {
    return (
        <React.Fragment>
            <Header />
            <div
                className={`uk-text-center uk-margin-small-top`}
                uk-grid={"true"}
                uk-height-match={`target: > div > .uk-card`}
            >
                <div class=" uk-width-1-1@s uk-width-2-3@m">
                    <div class="uk-card uk-card-default">
                        <CartProductList />
                    </div>
                </div>
                <PriceBreakup />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default CartPage;
