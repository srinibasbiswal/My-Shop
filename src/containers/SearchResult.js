import React, { useEffect, useState } from "react";
import CategoriesCards from "../components/CategoriesCards";
import ResultProducts from "../components/ResultProducts";
import { searchTypes } from "../data/enums/searchType";
import { products } from "../data/prodcuts";

function SearchResult(props) {
	const [showCategoryCards, showshowCategoryCards] = useState(true);
	const [productList, setProductList] = useState([]);
	const [categoryCodeList, setCategoryCodeList] = useState([]);

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
				var categoryCodes = [];
				filteredProducts = filterProducts();
				switch (props.searchType) {
					case searchTypes.ITEM:
						setProductList(filteredProducts);
						if (
							filteredProducts !== undefined &&
							filteredProducts !== []
						) {
							filteredProducts.forEach((product) => {
								categoryCodes.push(product.categoryCode);
							});
						}
						if (categoryCodes != [] && categoryCodes.length > 0) {
							setCategoryCodeList(categoryCodes);
						}
						break;
					case searchTypes.CATEGORY:
						if (
							filteredProducts !== undefined &&
							filteredProducts !== []
						) {
							filteredProducts.forEach((product) => {
								categoryCodes.push(product.categoryCode);
							});
						}
						if (categoryCodes != [] && categoryCodes.length > 0) {
							setCategoryCodeList(categoryCodes);
						}
						break;
					default:
						break;
				}
			}
		}

		function filterProducts() {
			var filteredProducts = products.filter(function (item) {
				return item.name
					.toLowerCase()
					.includes(props.search.toLowerCase());
			});
			return filteredProducts;
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
				{console.log(categoryCodeList)}
				{showCategoryCards ? (
					<CategoriesCards
						categoryCodeList={categoryCodeList}
						search={props.search}
					/>
				) : null}
				<ResultProducts results={productList} search={props.search} />
			</React.Fragment>
		);
	} else {
		return <div>some error occured</div>;
	}
}

export default SearchResult;
