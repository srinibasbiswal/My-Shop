import React from "react";
import { useFormik } from "formik";
import { logIn } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { authTypes } from "../../data/enums/authTypes";

function LogInForm() {
	const dispatch = useDispatch();
	const authentication = useSelector((state) => state.authentication);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
		onSubmit: (values) => {
			dispatch(
				logIn(
					authTypes.EMAIL,
					values.email,
					values.password,
					values.rememberMe
				)
			);
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

					{(() => {
						if (authentication.isLogInError) {
							return (
								<div
									class="uk-alert-danger uk-text-center"
									uk-alert={`true`}
								>
									<a
										class="uk-alert-close"
										uk-close={`true`}
									></a>
									{(() => {
										if (
											authentication.errorMessage !==
												undefined &&
											authentication.errorMessage !== ""
										) {
											return (
												<p>
													{
														authentication.errorMessage
													}
												</p>
											);
										} else {
											return (
												<p>
													Sorry! Some error occurred.
													Please try again later.
												</p>
											);
										}
									})()}
								</div>
							);
						}
					})()}

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

export default LogInForm;
