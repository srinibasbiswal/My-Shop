import React from "react";
import { useFormik } from "formik";
import firebase from "../../firebaseConfig";

function SignupForm() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
		onSubmit: (values) => {
			if (values.rememberMe) {
				firebase
					.auth()
					.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
					.then(function () {
						return firebase
							.auth()
							.createUserWithEmailAndPassword(
								values.email,
								values.password
							)
							.catch(function (error) {
								var errorCode = error.code;
								var errorMessage = error.message;
								alert(errorMessage);
							});
					})
					.catch(function (error) {
						var errorCode = error.code;
						var errorMessage = error.message;
					});
			} else {
				firebase
					.auth()
					.setPersistence(firebase.auth.Auth.Persistence.SESSION)
					.then(function () {
						return firebase
							.auth()
							.createUserWithEmailAndPassword(
								values.email,
								values.password
							)
							.catch(function (error) {
								var errorCode = error.code;
								var errorMessage = error.message;
								alert(errorMessage);
							});
					})
					.catch(function (error) {
						var errorCode = error.code;
						var errorMessage = error.message;
					});
			}
		},
	});

	return (
		<div className={`uk-card uk-card-body uk-card-default`}>
			<form
				className={`uk-form-stacked uk-text-left`}
				onSubmit={formik.handleSubmit}
			>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="email"
					>
						Email
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							placeholder="Email"
							id="email"
							name="email"
							type="email"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="email"
					>
						Password
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							placeholder="Password"
							id="password"
							name="password"
							type="password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
					</div>
					<div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
						<label>
							<input
								class="uk-checkbox"
								type="checkbox"
								id="rememberMe"
								name="rememberMe"
								onChange={formik.handleChange}
								value={false}
							/>{" "}
							Remember Me
						</label>
					</div>
					<div className={`uk-margin uk-width-1-1 uk-text-center`}>
						<button
							className={`uk-button uk-button-primary uk-border-rounded`}
							type="submit"
						>
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignupForm;
