import React, { useEffect, useState } from "react";
import SignUpForm from "./Forms/SignupForm";
import LogInForm from "./Forms/LogInForm";
import styles from "../stylesheets/style.module.css";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

function AuthenticationForm(props) {
	const [pathName, setPathName] = useState("SIGNUP");
	const authentication = useSelector((state) => state.authentication);
	useEffect(() => {
		function setPath() {
			if (window.location.pathname === "/signup") {
				setPathName("SIGNUP");
			} else {
				setPathName("LOGIN");
			}
		}
		function checkIfLoggedIn() {
			if (authentication !== undefined && authentication.isLoggedIn) {
				props.history.push(`/`);
			}
		}
		setPath();
		checkIfLoggedIn();
	}, [window.location.pathname, authentication]);
	return (
		<div
			className={`uk-card uk-card-default uk-card-body uk-width-1-2@m uk-text-center uk-border-rounded ${styles.customShadow}`}
		>
			<div
				className={`switcherParent`}
				uk-switcher="animation: uk-animation-fade; toggle: > *"
			>
				<button
					class="uk-button uk-button-default uk-margin-medium-right uk-border-rounded  uk-width-1-1@s uk-width-1-3@m uk-margin-small-bottom"
					type="button"
				>
					{(() => {
						if (pathName === "SIGNUP") {
							return "Sign Up";
						} else {
							return "Log In";
						}
					})()}
				</button>
				<button
					class="uk-button uk-button-default uk-margin-medium-right uk-border-rounded  uk-width-1-1@s uk-width-1-3@m uk-margin-small-bottom"
					type="button"
				>
					{(() => {
						if (pathName === "SIGNUP") {
							return "Log In";
						} else {
							return "Sign Up";
						}
					})()}
				</button>
			</div>

			<ul class="uk-switcher uk-margin">
				<li>
					{(() => {
						if (pathName === "SIGNUP") {
							return <SignUpForm />;
						} else {
							return <LogInForm />;
						}
					})()}
				</li>
				<li>
					{(() => {
						if (pathName === "SIGNUP") {
							return <LogInForm />;
						} else {
							return <SignUpForm />;
						}
					})()}
				</li>
			</ul>
		</div>
	);
}

export default withRouter(AuthenticationForm);
