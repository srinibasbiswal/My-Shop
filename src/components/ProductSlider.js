import React from "react";
import slider1 from "../assets/images/img1.jpg";
import styles from "../stylesheets/style.module.css";

function ProductSlider() {
    return (
        <React.Fragment>
            <h3
                className={`uk-heading-line ${styles.textColorBlack} uk-margin-medium-left uk-margin-medium-right`}
            >
                <span>#Trending Today</span>
            </h3>
            <div
                className={`uk-position-relative uk-visible-toggle uk-light uk-slider uk-margin-small-bottom`}
                tabIndex="-1"
                uk-slider={`true`}
            >
                <ul
                    className={`uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-grid uk-padding-small uk-margin-auto`}
                >
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-border-rounded`}
                        >
                            <div className={`uk-card-media-top `}>
                                <img
                                    src={slider1}
                                    alt=""
                                    className={`uk-border-rounded`}
                                />
                            </div>
                            <div
                                className={`uk-card-body uk-text-center  uk-padding-small`}
                            >
                                <h3 className={`uk-card-title`}>Item Name</h3>
                                <p>
                                    MRP : <s>&#x20B9; 100</s>
                                    <br />
                                    <strong>&#x20B9; 90</strong>
                                </p>
                                <button
                                    className={`uk-button uk-button-primary ${styles.textColorWhite} ${styles.backgroundPrimary} uk-border-rounded`}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-border-rounded`}
                        >
                            <div className={`uk-card-media-top `}>
                                <img
                                    src={slider1}
                                    alt=""
                                    className={`uk-border-rounded`}
                                />
                            </div>
                            <div
                                className={`uk-card-body uk-text-center  uk-padding-small`}
                            >
                                <h3 className={`uk-card-title`}>Item Name</h3>
                                <p>
                                    MRP : <s>&#x20B9; 100</s>
                                    <br />
                                    <strong>&#x20B9; 90</strong>
                                </p>
                                <button
                                    className={`uk-button uk-button-primary ${styles.textColorWhite} ${styles.backgroundPrimary} uk-border-rounded`}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-border-rounded`}
                        >
                            <div className={`uk-card-media-top `}>
                                <img
                                    src={slider1}
                                    alt=""
                                    className={`uk-border-rounded`}
                                />
                            </div>
                            <div
                                className={`uk-card-body uk-text-center  uk-padding-small`}
                            >
                                <h3 className={`uk-card-title`}>Item Name</h3>
                                <p>
                                    MRP : <s>&#x20B9; 100</s>
                                    <br />
                                    <strong>&#x20B9; 90</strong>
                                </p>
                                <button
                                    className={`uk-button uk-button-primary ${styles.textColorWhite} ${styles.backgroundPrimary} uk-border-rounded`}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-border-rounded`}
                        >
                            <div className={`uk-card-media-top `}>
                                <img
                                    src={slider1}
                                    alt=""
                                    className={`uk-border-rounded`}
                                />
                            </div>
                            <div
                                className={`uk-card-body uk-text-center  uk-padding-small`}
                            >
                                <h3 className={`uk-card-title`}>Item Name</h3>
                                <p>
                                    MRP : <s>&#x20B9; 100</s>
                                    <br />
                                    <strong>&#x20B9; 90</strong>
                                </p>
                                <button
                                    className={`uk-button uk-button-primary ${styles.textColorWhite} ${styles.backgroundPrimary} uk-border-rounded`}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-border-rounded`}
                        >
                            <div className={`uk-card-media-top `}>
                                <img
                                    src={slider1}
                                    alt=""
                                    className={`uk-border-rounded`}
                                />
                            </div>
                            <div
                                className={`uk-card-body uk-text-center  uk-padding-small`}
                            >
                                <h3 className={`uk-card-title`}>Item Name</h3>
                                <p>
                                    MRP : <s>&#x20B9; 100</s>
                                    <br />
                                    <strong>&#x20B9; 90</strong>
                                </p>
                                <button
                                    className={`uk-button uk-button-primary ${styles.textColorWhite} ${styles.backgroundPrimary} uk-border-rounded`}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-border-rounded`}
                        >
                            <div className={`uk-card-media-top `}>
                                <img
                                    src={slider1}
                                    alt=""
                                    className={`uk-border-rounded`}
                                />
                            </div>
                            <div
                                className={`uk-card-body uk-text-center  uk-padding-small`}
                            >
                                <h3 className={`uk-card-title`}>Item Name</h3>
                                <p>
                                    MRP : <s>&#x20B9; 100</s>
                                    <br />
                                    <strong>&#x20B9; 90</strong>
                                </p>
                                <button
                                    className={`uk-button uk-button-primary ${styles.textColorWhite} ${styles.backgroundPrimary} uk-border-rounded`}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default ProductSlider;
