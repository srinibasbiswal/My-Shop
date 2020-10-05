import React from "react";
import styles from "../stylesheets/style.module.css";

function PriceBreakup() {
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
                        <button
                            className={`uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom`}
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
                            Total Amount &#x20B9; 210
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

export default PriceBreakup;
