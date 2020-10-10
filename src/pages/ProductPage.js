import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import slider1 from "../assets/images/img1.jpg";
import slider2 from "../assets/images/img2.jpg";
import slider3 from "../assets/images/img3.jpg";
import styles from "../stylesheets/style.module.css";
import { products } from "../data/prodcuts";

function ProductPage({ match }) {
	const [productId, setproductId] = useState("");
	const [productDetails, setProductDetails] = useState({});
	useEffect(() => {
		function getProductId() {
			if (match.params.id !== undefined && match.params.id !== "") {
				setproductId(match.params.id);
			}
		}

		function getProductDetails() {
			console.log("called");
			console.log(productId);
			if (productId !== "") {
				var filteredProducts = products.filter(function (item) {
					return item.id
						.toLowerCase()
						.includes(productId.toLowerCase());
				});
				setProductDetails(filteredProducts[0]);
			}
		}
		getProductId();
		getProductDetails();
	}, [match, productId]);

	if (productDetails !== undefined && productDetails !== {}) {
		return (
			<React.Fragment>
				<Header />
				{console.log(productDetails)}
				<div
					className={`uk-card uk-card-default uk-card-body uk-margin uk-child-width-1-2@m uk-child-width-1-1@m`}
					uk-grid={`true`}
				>
					<div className={`${styles.ProductImg}`}>
						<div
							className={`uk-position-relative`}
							uk-slideshow="animation: fade"
						>
							<div
								className={`uk-slideshow-items`}
								uk-lightbox="animation: slide"
							>
								{(() => {
									console.log(productDetails.imageCodes);
									if (
										productDetails.imageCodes !== undefined
									) {
										return productDetails.imageCodes.map(
											(image, index) => {
												return (
													<a
														href={image}
														data-caption="Caption 1"
													>
														<img
															src={image}
															alt=""
															uk-cover={`true`}
														/>
													</a>
												);
											}
										);
									}
								})()}
							</div>

							<div
								className={`uk-position-bottom-center uk-position-small`}
							>
								<ul className={`uk-thumbnav`}>
									{(() => {
										console.log(productDetails.imageCodes);
										if (
											productDetails.imageCodes !==
											undefined
										) {
											return productDetails.imageCodes.map(
												(image, index) => {
													return (
														<li
															uk-slideshow-item={
																index
															}
														>
															<a href="#">
																<img
																	src={image}
																	width="100"
																	alt=""
																/>
															</a>
														</li>
													);
												}
											);
										}
									})()}
								</ul>
							</div>
						</div>
					</div>
					<div className={`${styles.ProductDesc}`}>
						<p className={`uk-article-title`}>
							{productDetails.name}
						</p>
						<p className={`uk-text-lead`}>
							MRP :
							{(() => {
								if (productDetails.realPrice !== undefined) {
									return (
										<s className={`uk-text-meta`}>
											&#x20B9; {productDetails.realPrice}
										</s>
									);
								}
							})()}
							<strong>
								&nbsp;&#x20B9; {productDetails.price}
							</strong>
						</p>
						<div className={`uk-flex `}>
							<h4 className={`uk-margin-remove-bottom`}>
								Quantity ({productDetails.weightUOM}) :{" "}
							</h4>
							<ul className={`${styles.quantityControlList}`}>
								<li className={styles.quantityControlBorder}>
									<a href="#" uk-icon="icon: minus"></a>
								</li>
								<li
									className={`uk-margin-small-right uk-margin-small-left`}
								>
									<p
										className={`uk-margin-remove uk-text-bold`}
									>
										1
									</p>
								</li>
								<li className={styles.quantityControlBorder}>
									<a href="#" uk-icon="icon: plus"></a>
								</li>
							</ul>
						</div>
						<div className={`uk-flex uk-margin-small`}>
							<button
								className={`uk-button uk-button-primary uk-margin-small-right uk-border-rounded`}
							>
								{" "}
								Buy Now
							</button>
							<button
								className={`uk-button uk-button-primary uk-margin-small-left uk-border-rounded`}
							>
								{" "}
								Add to cart
							</button>
						</div>
						<p>Some description of the product</p>
						<p className={`uk-text-meta`}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default ProductPage;
