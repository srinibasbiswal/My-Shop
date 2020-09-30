import React from "react";
import slider1 from "../assets/images/img1.jpg";

function CartProduct() {
    return (
        <div class="uk-flex uk-flex-around">
            <div className={`uk-flex`}>
                <button
                    type="button"
                    data-uk-icon="icon: close"
                    className={`uk-margin-medium-right`}
                ></button>
                <ul class="uk-thumbnav">
                    <li class="uk-active">
                        <a href="#">
                            <img src={slider1} width="150" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div uk-grid={"true"}>
                    <div className={`uk-width-2-3`}>
                        <p className={`uk-text-lead`}>product Name</p>
                        <p>Some Description</p>
                    </div>
                    <div className={`uk-width-1-3`}>
                        <a href="" class="uk-icon-button" uk-icon="minus"></a>
                        <div>
                            {" "}
                            <h3>1</h3>{" "}
                        </div>

                        <a href="" class="uk-icon-button" uk-icon="plus"></a>
                    </div>
                </div>
            </div>
            <div className={`uk-text-center uk-card-body `}>
                <h4>
                    MRP : <strong>&#x20B9; 90</strong>
                </h4>
            </div>
        </div>
    );
}

export default CartProduct;
