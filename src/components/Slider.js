import React from "react";
import styles from "../stylesheets/style.module.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

function Slider() {
    return (
        <div
            className={`uk-position-relative uk-visible-toggle uk-light`}
            tabIndex="-1"
            uk-slideshow={`ratio: 7:3; animation: push; max-height: 300; autoplay: true; autoplay-interval: 7000`}
        >
            <ul className={`uk-slideshow-items`}>
                <li>
                    <img src={img1} alt="Img1" className={`uk-contain`} />
                    <div
                        className={`uk-position-center uk-position-small uk-text-center uk-light`}
                    >
                        <h2 className={`uk-margin-remove`}>Center</h2>
                        <p className={`uk-margin-remove`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={img2} alt="Img2" className={`uk-cover uk-img`} />
                    <div
                        className={`uk-position-center uk-position-small uk-text-center uk-light`}
                    >
                        <h2 className={`uk-margin-remove`}>Center</h2>
                        <p className={`uk-margin-remove`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={img3} alt="Img3" className={`uk-cover`} />
                    <div
                        className={`uk-position-center uk-position-small uk-text-center uk-light`}
                    >
                        <h2 className={`uk-margin-remove`}>Center</h2>
                        <p className={`uk-margin-remove`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </li>
            </ul>

            <a
                className={`"uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-previous`}
                href="#"
                uk-slideshow-item={`previous`}
            ></a>
            <a
                className={`uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-next`}
                href="#"
                uk-slideshow-item="next"
            ></a>
        </div>
    );
}

export default Slider;
