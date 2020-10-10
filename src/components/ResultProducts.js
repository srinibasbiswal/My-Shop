import React from "react";
import ProductCard from "./ProductCard";

function ResultProducts(props) {
	return (
		<React.Fragment>
			<div className={`uk-width-1-1 uk-margin-medium`}>
				<p className={`uk-text-lead  uk-margin-medium-left`}>
					Showing results for{" "}
					<span className={`uk-text-primary`}>{props.search}</span>
				</p>
				<hr className={`uk-divider-icon`} />
			</div>
			<div
				className={`uk-child-width-1-4 uk-text-center uk-padding-small uk-visible@m`}
				uk-grid={"true"}
			>
				<div>
					<ProductCard />
				</div>
			</div>

			<div
				className={`uk-child-width-1-2 uk-text-center uk-padding-small uk-hidden@m`}
				uk-grid={"true"}
			>
				<div>
					<ProductCard />
				</div>
			</div>
		</React.Fragment>
	);
}

export default ResultProducts;
