import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { searchTypes } from "../data/enums/searchType";
import styles from "../stylesheets/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../actions/authActions";
import {
	FiShoppingCart,
	FiUser,
	FiMenu,
	FiUserCheck,
	FiUserPlus,
	FiLogOut,
	FiSearch,
} from "react-icons/fi";

function Header(props) {
	const dispatch = useDispatch();

	const searchType = searchTypes.ITEM;
	const [searchValue, setSearchValue] = useState("");
	const authentication = useSelector((state) => state.authentication);

	const setSearch = (event) => {
		const target = event.target;
		setSearchValue(target.value);
	};

	const handleSubmit = (e) => {
		props.history.push(`/${searchType}/search/${searchValue}`);
	};

	const logOutAccount = (e) => {
		e.preventDefault();
		dispatch(logOut());
	};

	return (
		<React.Fragment>
			<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
				<nav
					className={`uk-navbar-container uk-navbar ${styles.backgroundPrimary}`}
				>
					<div className={`uk-navbar-left`}>
						<ul className={`uk-navbar-nav`}>
							<li className={`uk-navbar-item`}>
								<Link to="/">
									<span
										className={`uk-logo ${styles.textColorWhite} uk-padding-remove ${styles.logo}`}
									>
										Logo
									</span>
								</Link>
							</li>
							<li className={`uk-navbar-item uk-visible@m`}>
								<form onSubmit={handleSubmit}>
									<div class="uk-inline">
										<a
											className={`uk-form-icon uk-form-icon-flip uk-margin-small`}
											onClick={() => handleSubmit()}
										>
											<FiSearch
												className={`${styles.iconSize}`}
											/>
										</a>
										<input
											className={`uk-input uk-form-width-large uk-border-rounded`}
											type="text"
											placeholder="Search item1, item2 and more ... "
											value={searchValue}
											onChange={setSearch}
										/>
									</div>
								</form>
							</li>
							<li className={`uk-navbar-item`}></li>
						</ul>
					</div>

					<div className={`uk-navbar-right`}>
						<ul className={`uk-navbar-nav`}>
							<li className={`uk-navbar-item`}>
								<Link to="/cart">
									<FiShoppingCart
										className={`${styles.textColorWhite} ${styles.iconSize}`}
									/>
								</Link>
							</li>

							<li className={`uk-navbar-item`}>
								<FiUser
									className={`${styles.textColorWhite} ${styles.iconSize} uk-link`}
								/>
								<div
									uk-dropdown="mode: click"
									className={`uk-border-rounded`}
								>
									<ul class="uk-nav uk-navbar-dropdown-nav">
										{(() => {
											if (authentication.isLoggedIn) {
												return (
													<React.Fragment>
														<li class="uk-nav-header">
															<p>
																Hi,{" "}
																{
																	authentication.userName
																}
															</p>
														</li>
														<li
															className={`uk-nav-header uk-button uk-button-text`}
														>
															<a
																onClick={(e) =>
																	logOutAccount(
																		e
																	)
																}
															>
																<FiLogOut
																	className={` ${styles.iconSize}`}
																/>{" "}
																Log Out
															</a>
														</li>
													</React.Fragment>
												);
											} else {
												return (
													<React.Fragment>
														<li
															className={`uk-nav-header uk-button-text`}
														>
															<Link to="/signup">
																<FiUserCheck
																	className={` ${styles.iconSize}`}
																/>{" "}
																Log In
															</Link>
														</li>

														<li
															className={`uk-nav-header uk-button-text`}
														>
															<Link to="/signup">
																<FiUserPlus
																	className={` ${styles.iconSize}`}
																/>{" "}
																Sign Up
															</Link>
														</li>
													</React.Fragment>
												);
											}
										})()}
									</ul>
								</div>
							</li>
							<li className={`uk-navbar-item`}>
								<FiMenu
									uk-toggle="target: #menuOverlay"
									className={`${styles.textColorWhite} ${styles.iconSize} uk-link`}
								/>
							</li>
						</ul>
					</div>
				</nav>
				<div
					id="menuOverlay"
					data-uk-offcanvas="mode: push; flip: true"
					className={`uk-offcanvas uk-offcanvas-content`}
				>
					<div
						className={`uk-offcanvas-bar ${styles.backgroundPrimary}`}
					>
						<ul
							className={`uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical`}
						>
							<li className={`uk-navbar-item`}>
								<a
									className={`uk-logo ${styles.textColorWhite} uk-padding-remove`}
									href="#"
								>
									Logo
								</a>
							</li>
							<li className={`uk-active`}>
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
			<div className={`uk-hidden@m ${styles.searchBarSmall}`}>
				<form onSubmit={handleSubmit}>
					<div class="uk-inline">
						<a
							className={`uk-form-icon uk-form-icon-flip uk-margin-small`}
							onClick={() => handleSubmit()}
						>
							<FiSearch className={`${styles.iconSize}`} />
						</a>
						<input
							className={`uk-input uk-form-width-large uk-border-rounded`}
							type="text"
							placeholder="Search item1, item2 and more ... "
							value={searchValue}
							onChange={setSearch}
						/>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
}

export default withRouter(Header);
