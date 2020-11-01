import React from "react";
import page_not_found from "../assets/images/page_not_found.svg";
import image_404 from "../assets/images/image_404.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../stylesheets/style.module.css";
import { FiAlertCircle, FiPlusCircle, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<React.Fragment>
			<Header />
			<div className={`uk-text-center`}>
				<p className={`uk-text-lead uk-hidden@m`}>
					<span className={`uk-text-warning`}>
						<FiAlertCircle />{" "}
					</span>
					Nope! This is not the page you were looking for. <br />
					Let&apos;s{" "}
					<Link to="/">
						<span>GO HERE </span>
						<FiPlusCircle className={styles.iconSize} />
					</Link>
				</p>
				<div className={`uk-flex uk-flex-center uk-padding-small`}>
					<div>
						<img
							width={350}
							height={350}
							alt={350}
							uk-img={image_404}
							uk-svg
						/>
					</div>
					<div>
						<img
							width={350}
							height={350}
							alt={350}
							uk-img={page_not_found}
							uk-svg
						/>{" "}
					</div>
				</div>
				<p className={`uk-text-lead uk-visible@m`}>
					<span className={`uk-text-warning`}>
						<FiAlertCircle />{" "}
					</span>
					Nope! This is not the page you were looking for. <br />
					Let&apos;s{" "}
					<Link to="/">
						<span>GO HERE </span>
						<FiPlusCircle className={styles.iconSize} />
					</Link>
				</p>
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default PageNotFound;
