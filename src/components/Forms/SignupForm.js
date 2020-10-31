import React, { useState } from "react";
import { useFormik } from "formik";
import { signUp } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { authTypes } from "../../data/enums/authTypes";
import styles from "../../stylesheets/style.module.css";

function SignUpForm() {
	const dispatch = useDispatch();
	const authentication = useSelector((state) => state.authentication);

	const [authType, setAuthType] = useState(authTypes.PHONE);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			phoneNumber: "",
			otp: "",
			countryCode: 91,
			authType: authType,
		},
		onSubmit: (values) => {
			console.log(values);
			dispatch(
				signUp(
					values.authType,
					values.email,
					values.password,
					values.phoneNumber,
					values.otp
				)
			);
		},
	});

	const submitOTP = (e) => {
		formik.values.otp = formik.values.otp.toString();
		formik.handleSubmit(e);
	};

	const submitPhoneNumber = (e) => {
		formik.values.phoneNumber =
			"+" +
			formik.values.countryCode +
			formik.values.phoneNumber.toString();
		formik.values.otp = "";
		formik.handleSubmit(e);
	};

	const setAuthTypeState = (authState) => {
		formik.values.authType = authState;
		setAuthType(authState);
	};

	if (authType === authTypes.EMAIL) {
		return (
			<div className={`uk-card uk-card-body`}>
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
								required
							/>
						</div>
					</div>
					<div className={`uk-margin uk-width-1-1`}>
						<label
							className={`uk-form-label uk-text-bold`}
							htmlFor="password"
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
								required
							/>
						</div>

						{(() => {
							if (authentication.isSignUpError) {
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
												authentication.errorMessage !==
													""
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
														Sorry! Some error
														occurred. Please try
														again later.
													</p>
												);
											}
										})()}
									</div>
								);
							}
						})()}

						<div
							className={`uk-margin uk-width-1-1 uk-text-center`}
						>
							<button
								className={`uk-button uk-border-rounded ${styles.buttonGradient}`}
								type="submit"
							>
								Sign Up
							</button>
						</div>
					</div>
				</form>
				<div>
					<p className={`uk-text-bold`}>OR</p>
					<div>
						<button
							className={`uk-button uk-border-rounded ${styles.buttonGradient} ${styles.secondaryButton}`}
							onClick={() => setAuthTypeState(authTypes.PHONE)}
						>
							Sign Up Using Phone Number
						</button>
					</div>
				</div>
			</div>
		);
	} else if (authType === authTypes.PHONE) {
		return (
			<div className={`uk-card uk-card-body`}>
				{(() => {
					if (!authentication.isOTPSent) {
						return (
							<form
								className={`uk-form-stacked uk-text-left`}
								onSubmit={(e) => submitPhoneNumber(e)}
							>
								<div
									className={`uk-grid-small`}
									uk-grid={`true`}
								>
									<div className={`uk-width-1-4`}>
										<label
											className={`uk-form-label uk-text-bold`}
											for="form-stacked-select"
										>
											Country Code
										</label>
										<div className={`uk-form-controls`}>
											<select
												className={`uk-select uk-border-rounded`}
												required
											>
												<option>(IND) + 91 </option>
											</select>
										</div>
									</div>
									<div className={`uk-width-3-4`}>
										<label
											className={`uk-form-label uk-text-bold`}
											htmlFor="phoneNumber"
										>
											Phone Number
										</label>
										<div className={`uk-form-controls`}>
											<input
												className={`uk-input uk-border-rounded`}
												placeholder="10-digit mobile number without prefixes"
												id="phoneNumber"
												name="phoneNumber"
												type="number"
												onChange={formik.handleChange}
												value={
													formik.values.phoneNumber
												}
												required
											/>
										</div>
									</div>
								</div>
								<div id="recaptcha-container"></div>

								{(() => {
									if (authentication.isSignUpError) {
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
														authentication.errorMessage !==
															""
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
																Sorry! Some
																error occurred.
																Please try again
																later.
															</p>
														);
													}
												})()}
											</div>
										);
									}
								})()}

								<div
									className={`uk-margin uk-width-1-1 uk-text-center`}
								>
									<button
										className={`uk-button uk-border-rounded ${styles.buttonGradient}`}
										type="submit"
									>
										Sign Up
									</button>
								</div>
							</form>
						);
					} else {
						return (
							<form
								className={`uk-form-stacked uk-text-left`}
								onSubmit={(e) => submitOTP(e)}
							>
								<div className={`uk-margin uk-width-1-1`}>
									<label
										className={`uk-form-label uk-text-bold`}
										htmlFor="otp"
									>
										OTP
									</label>
									<div className={`uk-form-controls`}>
										<input
											className={`uk-input uk-border-rounded`}
											placeholder="Enter 6 digit OTP sent to you phone number"
											id="otp"
											name="otp"
											type="number"
											onChange={formik.handleChange}
											value={formik.values.otp}
											required
										/>
									</div>
								</div>

								{(() => {
									if (authentication.isSignUpError) {
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
														authentication.errorMessage !==
															""
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
																Sorry! Some
																error occurred.
																Please try again
																later.
															</p>
														);
													}
												})()}
											</div>
										);
									}
								})()}

								<div
									className={`uk-margin uk-width-1-1 uk-text-center`}
								>
									<button
										className={`uk-button uk-border-rounded ${styles.buttonGradient}`}
										type="submit"
									>
										Submit OTP
									</button>
								</div>
							</form>
						);
					}
				})()}
				<div>
					<p className={`uk-text-bold`}>OR</p>
					<div>
						<button
							className={`uk-button uk-border-rounded ${styles.buttonGradient} ${styles.secondaryButton}`}
							onClick={() => setAuthTypeState(authTypes.EMAIL)}
						>
							Sign Up Using Email
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpForm;
