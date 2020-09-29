import React from "react";
import ProductSlider from "../components/ProductSlider";
import Slider from "../components/Slider";
import StaticBanner from "../components/StaticBanner";
import HeaderContainer from "../containers/HeaderContainer";

function HomePage() {
    return (
        <div>
            <HeaderContainer />
            <Slider />
            <ProductSlider />
            <StaticBanner />
        </div>
    );
}

export default HomePage;
