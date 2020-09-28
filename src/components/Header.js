import React from "react";
import styles from "../stylesheets/style.module.css";

function Header() {
    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav
                className={`uk-navbar-container uk-navbar ${styles.backgroundPrimary}`}
            >
                <div className={`uk-navbar-left`}>
                    <ul className={`uk-navbar-nav`}>
                        <li className={`uk-navbar-item`}>
                            <a
                                uk-toggle="target: #menuOverlay"
                                data-uk-icon="icon: menu"
                                className={`${styles.textColorWhite} uk-navbar-toggle uk-navbar-toggle-icon uk-hidden@m uk-padding-remove`}
                            ></a>
                        </li>
                        <li className={`uk-navbar-item`}>
                            <a
                                className={`uk-logo ${styles.textColorWhite} uk-padding-remove`}
                                href="#"
                            >
                                Logo
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`uk-navbar-center`}>
                    <ul className={`uk-navbar-nav`}>
                        <li className={`uk-navbar-item`}>
                            <form action="javascript:void(0)">
                                <input
                                    className={`uk-input uk-form-width-large uk-border-rounded uk-visible@m`}
                                    type="text"
                                    placeholder="Search item1, item2 and more ... "
                                />
                            </form>
                        </li>
                    </ul>
                </div>

                <div className={`uk-navbar-right`}>
                    <ul className={`uk-navbar-nav`}>
                        <li className={`uk-navbar-item`}>
                            <form>
                                <input
                                    className={`uk-input uk-form-width-medium uk-border-rounded uk-hidden@m uk-padding-remove-right`}
                                    type="text"
                                    placeholder="Search item1 and more ... "
                                />
                            </form>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-uk-icon="icon: cart"
                                className={`${styles.textColorWhite}`}
                            ></a>
                        </li>
                        <li className={`uk-visible@m`}>
                            <a
                                href="#"
                                data-uk-icon="icon: info"
                                className={`${styles.textColorWhite}`}
                            ></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div
                id="menuOverlay"
                data-uk-offcanvas="mode: push"
                className={`uk-offcanvas uk-offcanvas-content`}
            >
                <div className={`uk-offcanvas-bar ${styles.backgroundPrimary}`}>
                    <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        <li className={`uk-navbar-item`}>
                            <a
                                className={`uk-logo ${styles.textColorWhite} uk-padding-remove`}
                                href="#"
                            >
                                Logo
                            </a>
                        </li>
                        <li class="uk-active">
                            <button
                                className={`uk-offcanvas-close uk-close`}
                                data-uk-icon="icon: close"
                            ></button>
                        </li>
                        <li className={`uk-parent`}>
                            <a href="#">Menu 1</a>
                        </li>
                        <li className={`uk-parent`}>
                            <a href="#">Menu 2</a>
                        </li>
                        <li className={`uk-parent`}>
                            <a href="#">Menu 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
