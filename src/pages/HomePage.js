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
            <ProductSlider topicCode={`TR01`} />
            <StaticBanner />
            <ProductSlider categoryCode={`CH001`} />
            <ProductSlider categoryCode={`DT001`} />
            <ProductSlider categoryCode={`WP001`} />
            <FooterContainer />
        </React.Fragment>
    );
}

export default HomePage;
