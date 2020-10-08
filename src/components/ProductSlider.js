import React, { useEffect, useState } from "react";
import styles from "../stylesheets/style.module.css";
import ProductCard from "./ProductCard";
import { products } from "../data/prodcuts";
import { category } from "../data/category";

function ProductSlider(props) {
    const [productList, setproductList] = useState([]);
    const [sliderTitle, setsliderTitle] = useState("");

    useEffect(() => {
        function fetchData() {
            if (props !== undefined && props.categoryCode !== undefined) {
                var filteredProducts = [];
                filteredProducts = products.filter(function (item) {
                    return item.categoryCode === props.categoryCode;
                });
                if (
                    filteredProducts !== undefined &&
                    filteredProducts != [] &&
                    filteredProducts.length > 1
                ) {
                    setproductList(filteredProducts);
                    console.log(productList);
                }
                var categoryObj = {};
                categoryObj = category.filter(function (cat) {
                    return cat.id === props.categoryCode;
                })[0];

                if (categoryObj !== undefined && categoryObj != {}) {
                    setsliderTitle(categoryObj.name);
                }
            }
        }
        fetchData();
    }, []);

    console.log(productList);

    if (
        productList !== undefined &&
        productList !== [] &&
        productList.length > 1 &&
        sliderTitle !== undefined &&
        sliderTitle !== ""
    ) {
        return (
            <React.Fragment>
                <h3
                    className={`uk-heading-line ${styles.textColorBlack} uk-margin-medium-left uk-margin-medium-right`}
                >
                    <span>{sliderTitle}</span>
                </h3>
                <div
                    className={`uk-position-relative uk-visible-toggle uk-light uk-slider uk-margin-small-bottom`}
                    tabIndex="-1"
                    uk-slider={`true`}
                >
                    <ul
                        className={`uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-grid uk-padding-small uk-margin-auto`}
                    >
                        {productList.map((product, index) => {
                            return (
                                <li>
                                    <ProductCard />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </React.Fragment>
        );
    } else {
        return null;
    }
}

export default ProductSlider;
