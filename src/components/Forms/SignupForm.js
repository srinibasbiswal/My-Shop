import React, { useState } from "react";
import { useFormik } from "formik";
import { signUp } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { authTypes } from "../../data/enums/authTypes";

function SignupForm() {
	const dispatch = useDispatch();
	const authentication = useSelector((state) => state.authentication);

	const [authType, setAuthType] = useState(authTypes.EMAIL);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			phoneNumber: "",
			otp: "",
			authType: authType,
		},
		onSubmit: (values) => {
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
		formik.values.phoneNumber = formik.values.phoneNumber.toString();
		formik.values.otp = "";
		formik.handleSubmit(e);
	};

	const setAuthTypeState = (authState) => {
		formik.values.authType = authState;
		setAuthType(authState);
	};

	if (authType === authTypes.EMAIL) {
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
								className={`uk-button uk-button-primary uk-border-rounded`}
								type="submit"
							>
								Sign Up
							</button>
						</div>
					</div>
				</form>
				<hr />
				<div>
					<p>Or Sign Up Using</p>
					<div>
						<button
							className={`uk-button uk-button-primary uk-margin-small-right`}
							onClick={() => setAuthTypeState(authTypes.PHONE)}
						>
							Phone Number
						</button>
					</div>
				</div>
			</div>
		);
	} else if (authType === authTypes.PHONE) {
		return (
			<div className={`uk-card uk-card-body uk-card-default`}>
				{(() => {
					if (!authentication.isOTPSent) {
						return (
							<form
								className={`uk-form-stacked uk-text-left`}
								onSubmit={(e) => submitPhoneNumber(e)}
							>
								<div className={`uk-margin uk-width-1-1`}>
									<label
										className={`uk-form-label uk-text-bold`}
										htmlFor="phoneNumber"
									>
										Phone Number
									</label>
									<div className={`uk-form-controls`}>
										<input
											className={`uk-input uk-border-rounded`}
											placeholder="Phone Number"
											id="phoneNumber"
											name="phoneNumber"
											type="number"
											onChange={formik.handleChange}
											value={formik.values.phoneNumber}
										/>
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
										className={`uk-button uk-button-primary uk-border-rounded`}
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
											placeholder="otp"
											id="otp"
											name="otp"
											type="number"
											onChange={formik.handleChange}
											value={formik.values.otp}
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
										className={`uk-button uk-button-primary uk-border-rounded`}
										type="submit"
									>
										Sign Up
									</button>
								</div>
							</form>
						);
					}
				})()}

				<hr />
				<div>
					<p>Or Sign Up Using</p>
					<div>
						<button
							className={`uk-button uk-button-primary uk-margin-small-right`}
							onClick={() => setAuthTypeState(authTypes.EMAIL)}
						>
							Email
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SignupForm;
