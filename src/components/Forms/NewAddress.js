import React from "react";
import { useFormik } from "formik";
import AddressDocument from "../../documents/AddressDocument";
import { addAddress } from "../../actions/addressActions";
import { useDispatch } from "react-redux";
import styles from "../../stylesheets/style.module.css";
import { FiMapPin } from "react-icons/fi";

function NewAddress() {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			name: "",
			phoneNumber: "",
			addr1: "",
			addr2: "",
			landmark: "",
			city: "Bhubaneswar",
			state: "Odisha",
			country: "India",
			pin: "",
		},
		onSubmit: (values) => {
			console.log(values);
			var addressDoc = new AddressDocument();
			addressDoc.name = values.name;
			addressDoc.phoneNumber = values.phoneNumber;
			addressDoc.addr1 = values.addr1;
			addressDoc.addr2 = values.addr2;
			addressDoc.landmark = values.landmark;
			addressDoc.pin = values.pin;
			dispatch(addAddress(addressDoc));
		},
	});

	return (
		<div
			className={`uk-card uk-card-body uk-card-default uk-border-rounded`}
		>
			<h3 className={`uk-card-title`}>Add Delivery Address</h3>
			<form
				className={`uk-form-stacked uk-text-left`}
				onSubmit={formik.handleSubmit}
			>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="name"
					>
						Full Name
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							placeholder="Full Name"
							id="name"
							name="name"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.name}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="phoneNumber"
					>
						Mobile Number
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							placeholder="10-digit mobile number without prefixes"
							id="phoneNumber"
							name="phoneNumber"
							type="number"
							onChange={formik.handleChange}
							value={formik.values.phoneNumber}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="pin"
					>
						PIN code
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							placeholder="6-digit [0-9] PIN code"
							id="pin"
							name="pin"
							type="number"
							onChange={formik.handleChange}
							value={formik.values.pin}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="addr1"
					>
						Flat, House no., Building, Company, Apartment
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							id="addr1"
							name="addr1"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.addr1}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="addr2"
					>
						Area, Colony, Street, Sector, Village
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							id="addr2"
							name="addr2"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.addr2}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="landmark"
					>
						Landmark
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							placeholder="Near Lingaraaj Lassi"
							id="landmark"
							name="landmark"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.landmark}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="city"
					>
						City
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							value="Bhubaneswar"
							disabled={true}
							id="city"
							name="city"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.city}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="state"
					>
						State
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							value="Odisha"
							disabled={true}
							id="state"
							name="state"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.state}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1`}>
					<label
						className={`uk-form-label uk-text-bold`}
						htmlFor="country"
					>
						Country
					</label>
					<div className={`uk-form-controls`}>
						<input
							className={`uk-input uk-border-rounded`}
							value="India"
							disabled={true}
							id="country"
							name="country"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.country}
						/>
					</div>
				</div>
				<div className={`uk-margin uk-width-1-1 uk-text-center`}>
					<button
						className={`uk-button uk-button-primary uk-border-rounded ${styles.buttonGradient}`}
					>
						Add Address <FiMapPin className={styles.iconSize} />
					</button>
				</div>
			</form>
		</div>
	);
}

export default NewAddress;
