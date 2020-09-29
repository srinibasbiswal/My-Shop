import React from "react";
import slider1 from "../assets/images/img1.jpg";
import styles from "../stylesheets/style.module.css";

function ProductCard() {
    return (
        <div className={`uk-card uk-card-default uk-border-rounded`}>
            <div className={`uk-card-media-top `}>
                <img src={slider1} alt="" className={`uk-border-rounded`} />
            </div>
            <div className={`uk-card-body uk-text-center  uk-padding-small`}>
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
    );
}

export default ProductCard;
