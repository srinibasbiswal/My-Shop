import React from "react";

function AddressSlider() {
    return (
        <div className={`uk-card uk-card-default uk-card-body`}>
            <h3 className={`uk-card-title`}>
                Select any previously used addresses
            </h3>
            <div
                className={`uk-position-relative uk-visible-toggle uk-light uk-card-body`}
                tabIndex="-1"
                uk-slider={`true`}
            >
                <ul
                    className={`uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m uk-grid`}
                >
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-card-small uk-card-body uk-card-hover`}
                        >
                            <h3 className={`uk-card-title`}>Default</h3>
                            <p>
                                Lorem ipsum sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-card-small uk-card-body uk-card-hover`}
                        >
                            <h3 className={`uk-card-title`}>Default</h3>
                            <p>
                                Lorem ipsum sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-card-small uk-card-body uk-card-hover`}
                        >
                            <h3 className={`uk-card-title`}>Default</h3>
                            <p>
                                Lorem ipsum sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`uk-card uk-card-default uk-card-small uk-card-body uk-card-hover`}
                        >
                            <h3 className={`uk-card-title`}>Default</h3>
                            <p>
                                Lorem ipsum sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AddressSlider;
