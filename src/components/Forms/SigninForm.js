import React from "react";
import { useFormik } from "formik";
import firebase from "../../firebaseConfig";

function SignupForm() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			firebase
				.auth()
				.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
				.then(function () {
					return firebase
						.auth()
						.signInWithEmailAndPassword(
							values.email,
							values.password
						)
						.catch(function (error) {
							var errorCode = error.code;
							var errorMessage = error.message;
							// ...
						});
				})
				.catch(function (error) {
					var errorCode = error.code;
					var errorMessage = error.message;
				});
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
