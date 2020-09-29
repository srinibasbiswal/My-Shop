import React from "react";
import ProductSlider from "../components/ProductSlider";
import Slider from "../components/Slider";
import StaticBanner from "../components/StaticBanner";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";

function HomePage() {
    return (
        <React.Fragment>
            <HeaderContainer />
            <Slider />
            <ProductSlider />
            <StaticBanner />
            <ProductSlider />
            <ProductSlider />
            <ProductSlider />
            <FooterContainer />
        </React.Fragment>
    );
}

export default HomePage;
