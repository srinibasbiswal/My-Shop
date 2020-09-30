import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
                <div class="uk-width-2-3">
                    <div class="uk-card uk-card-default uk-card-body">
                        <CartProductList />
                    </div>
                </div>
                <div class="uk-width-1-3">
                    <div class="uk-card uk-card-default uk-card-body">
                        <div uk-sticky={`true ; offset: 100`}>
                            <table class="uk-table">
                                <caption>Price Distribution</caption>
                                <tbody>
                                    <tr>
                                        <td>Amount</td>
                                        <td>&#x20B9; 180</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Charges</td>
                                        <td>&#x20B9; 20</td>
                                    </tr>
                                    <tr>
                                        <td>Baggage Charges</td>
                                        <td>&#x20B9; 10</td>
                                    </tr>
                                    <hr />
                                    <tr>
                                        <td>Total Amount</td>
                                        <td>&#x20B9; 210</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default CartPage;
