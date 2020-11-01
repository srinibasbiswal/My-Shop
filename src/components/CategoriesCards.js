import React, { useEffect, useState } from "react";
import { category } from "../data/category";
import { searchTypes } from "../data/enums/searchType";
import { withRouter } from "react-router";
import styles from "../stylesheets/style.module.css";

function CategoriesCards(props) {
	const [categoryList, setCategoryList] = useState([]);

	const searchByCategories = (searchValue) => {
		const searchType = searchTypes.CATEGORY;
		props.history.push(`/${searchType}/search/${searchValue}`);
	};

	useEffect(() => {
		function fetchCategories() {
			var categoryDocumentList = [];
			if (props !== undefined && props.categoryCodeList !== undefined) {
				categoryDocumentList = category.filter(function (categoryObj) {
					return props.categoryCodeList.indexOf(categoryObj.id) != -1;
				});
				setCategoryList(categoryDocumentList);
			}
			if (
				props !== undefined &&
				props.search !== undefined &&
				props.search != ""
			) {
				var matchedCategories = [];
				matchedCategories = category.filter(function (categoryObj) {
					return categoryObj.name
						.toLowerCase()
						.includes(props.search.toLowerCase());
				});
				if (
					matchedCategories !== undefined &&
					matchedCategories != []
				) {
					var categories = categoryDocumentList.concat(
						matchedCategories
					);
				}
			}
			if (categories !== undefined && categories != []) {
				setCategoryList(categories);
			}
		}
		fetchCategories();
	}, [props]);

	if (categoryList !== undefined && categoryList.length > 0) {
		console.log(categoryList);
		return (
			<div className={`uk-card`}>
				<div className={`uk-width-1-1 uk-margin-medium-left`}>
					<p className={`uk-text-lead uk-margin-medium-top`}>
						Search by category
					</p>
				</div>
				<div
					className={`uk-card uk-card-body uk-flex uk-padding-remove-top `}
				>
					{categoryList.map((category, index) => {
						return (
							<div
								className={`uk-card uk-padding-small uk-border-rounded ${styles.buttonGradient} ${styles.secondaryButton}`}
								onClick={() =>
									searchByCategories(category[`name`])
								}
							>
								{category[`name`]}
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}

export default withRouter(CategoriesCards);
