import React, { useEffect, useState } from "react";
import CategoriesCards from "../components/CategoriesCards";
import ResultProducts from "../components/ResultProducts";
import { searchTypes } from "../data/enums/searchType";
import { products } from "../data/prodcuts";

function SearchResult(props) {
	const [showCategoryCards, showshowCategoryCards] = useState(true);
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		function setCategoryShowValue() {
			if (
				props.searchType !== undefined &&
				props.searchType === searchTypes.CATEGORY
			) {
				showshowCategoryCards(false);
			}
		}

		function getProducts() {
			if (props.searchType !== undefined && props.search !== undefined) {
				var filteredProducts = [];
				switch (props.searchType) {
					case searchTypes.ITEM:
						filteredProducts = products.filter(function (item) {
							return item.name
								.toLowerCase()
								.includes(props.search.toLowerCase());
						});
						setProductList(filteredProducts);
						break;
					case searchTypes.CATEGORY:
						break;

					default:
						break;
				}
			}
		}

		setCategoryShowValue();
		getProducts();
	}, [props.searchType, props.search]);

	if (props !== undefined && props.search === "") {
		return (
			<div>
				<p className={`uk-text-lead  uk-text-center`}>
					Please enter some value in the search bar
				</p>
			</div>
		);
	} else if (props !== undefined && props.search !== undefined) {
		console.log(productList);
		return (
			<React.Fragment>
				{showCategoryCards ? (
					<CategoriesCards search={props.search} />
				) : null}
				<ResultProducts search={props.search} />
			</React.Fragment>
		);
	} else {
		return <div>some error occured</div>;
	}
}

export default SearchResult;
