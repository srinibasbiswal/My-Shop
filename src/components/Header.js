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
							<li className={`uk-navbar-item`}>
								<form onSubmit={handleSubmit}>
									<input
										className={`uk-input uk-form-width-large uk-border-rounded uk-visible@m`}
										type="text"
										placeholder="Search item1, item2 and more ... "
										value={searchValue}
										onChange={setSearch}
									/>
								</form>
							</li>
							<li className={`uk-navbar-item`}></li>
						</ul>
					</div>

					<div className={`uk-navbar-right`}>
						<ul className={`uk-navbar-nav`}>
							{console.log(authentication)}
							{(() => {
								if (authentication.isLoggedIn) {
									return (
										<li className={`uk-navbar-item`}>
											<p>Hi {authentication.userName}</p>
											<button
												className={`uk-button uk-button-default`}
												onClick={(e) =>
													logOutAccount(e)
												}
											>
												Logout
											</button>
										</li>
									);
								}
							})()}

							<li className={`uk-navbar-item`}>
								<Link to="/cart">
									<FiShoppingCart
										className={`${styles.textColorWhite} ${styles.iconSize}`}
									/>
								</Link>
							</li>

							<li className={`uk-navbar-item`}>
								<FiUser
									className={`${styles.textColorWhite} ${styles.iconSize}`}
								/>
								<div
									uk-dropdown="mode: click"
									className={`uk-border-rounded`}
								>
									<ul class="uk-nav uk-navbar-dropdown-nav">
										<li class="uk-nav-header">
											<Link to="/signup">
												<FiUserCheck /> Log In
											</Link>
										</li>

										<li class="uk-nav-header">
											<Link to="/signup">
												<FiUserPlus /> Sign Up
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className={`uk-navbar-item`}>
								<FiMenu
									uk-toggle="target: #menuOverlay"
									className={`${styles.textColorWhite} ${styles.iconSize}`}
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
					<input
						className={`uk-input uk-border-rounded `}
						type="text"
						placeholder="Search item1, item2 and more ... "
						value={searchValue}
						onChange={setSearch}
					/>
				</form>
			</div>
		</React.Fragment>
	);
}

export default withRouter(Header);
