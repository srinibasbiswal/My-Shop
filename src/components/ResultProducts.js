import React from "react";
import ProductCard from "./ProductCard";

function ResultProducts(props) {
	if (props !== undefined && props.results !== undefined) {
		if (props.results.length > 0) {
			return (
				<React.Fragment>
					<div className={`uk-width-1-1 uk-margin-medium`}>
						<p className={`uk-text-lead  uk-margin-medium-left`}>
							Showing results for{" "}
							<span
								className={`uk-text-primary uk-text-uppercase`}
							>
								{props.search}
							</span>
						</p>
						<hr className={`uk-divider-icon`} />
					</div>
					<div
						className={`uk-child-width-1-4 uk-text-center uk-padding-small uk-visible@m`}
						uk-grid={"true"}
					>
						{props.results.map((product, index) => {
							return (
								<div>
									<ProductCard
										id={product.id}
										productName={product.name}
										price={product.price}
										realPrice={product.realPrice}
										primaryImageCode={
											product.primaryImageCode
										}
									/>
								</div>
							);
						})}
					</div>

					<div
						className={`uk-child-width-1-2 uk-text-center uk-padding-small uk-hidden@m`}
						uk-grid={"true"}
					>
						{props.results.map((product, index) => {
							return (
								<div>
									<ProductCard
										id={product.id}
										productName={product.name}
										price={product.price}
										realPrice={product.realPrice}
										primaryImageCode={
											product.primaryImageCode
										}
									/>
								</div>
							);
						})}
					</div>
				</React.Fragment>
			);
		} else {
			return <div>No Results found</div>;
		}
	} else {
		return <div>Some Error Occured</div>;
	}
}

export default ResultProducts;
