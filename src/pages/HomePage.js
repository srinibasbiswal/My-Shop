import React from "react";
import ProductSlider from "../components/ProductSlider";
import Slider from "../components/Slider";
import HeaderContainer from "../containers/HeaderContainer";

function HomePage() {
    return (
        <div>
            <HeaderContainer />
            <Slider />
            <ProductSlider />
        </div>
    );
}

export default HomePage;
