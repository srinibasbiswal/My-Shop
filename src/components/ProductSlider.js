import React from "react";
import styles from "../stylesheets/style.module.css";
import ProductCard from "./ProductCard";

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
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                    <li>
                        <ProductCard />
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default ProductSlider;
