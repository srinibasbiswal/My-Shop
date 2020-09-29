import React from "react";
import styles from "../stylesheets/style.module.css";

function Footer() {
    return (
        <div>
            <hr className={`uk-divider-icon`} />
            <div
                class="uk-grid-divider uk-child-width-expand@s uk-margin-small-bottom"
                uk-grid={"true"}
            >
                <div>
                    <ul className={`uk-nav-primary uk-text-center`}>
                        <li className={`uk-navbar-item`}>
                            <a className={`uk-logouk-padding-remove`} href="#">
                                Logo
                            </a>
                        </li>
                        <li className={`uk-navbar-item`}>
                            <p>&#169; 2020 All rights reserved. Company Name</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={`uk-text-center`}>
                        <li className={`uk-navbar-item ${styles.FooterLink}`}>
                            Link 1
                        </li>
                        <li className={`uk-navbar-item ${styles.FooterLink}`}>
                            Link 2
                        </li>
                        <li className={`uk-navbar-item ${styles.FooterLink}`}>
                            Link 3
                        </li>
                        <li className={`uk-navbar-item ${styles.FooterLink}`}>
                            Link 4
                        </li>
                    </ul>
                </div>
                <div>
                    <p className={`uk-text-lead uk-text-center`}>Contact Us</p>
                    <p className={`uk-text-center`}>
                        Address 1 <br /> Address 2 <br /> Address 3 <br /> Phone
                        : 000 000 0000
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
