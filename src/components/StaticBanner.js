import React from "react";
import img1 from "../assets/images/img1.jpg";

function StaticBanner() {
    return (
        <div className={`uk-cover-container uk-margin-small-bottom`}>
            <canvas width="" height={"200"}></canvas>
            <img src={img1} alt="" uk-cover={"true"} />
        </div>
    );
}

export default StaticBanner;
