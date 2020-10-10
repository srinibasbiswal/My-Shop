import React, { useEffect, useState } from "react";
import { category } from "../data/category";

function CategoriesCards(props) {
	const [categoryCodeList, setCategoryCodeList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		function getCategoryList() {
			var categoryCodes = [];
			if (props !== undefined && props.categoryCodeList !== undefined) {
				categoryCodes = categoryCodes.concat(props.categoryCodeList);
				if (categoryCodes !== undefined && categoryCodes != []) {
					setCategoryCodeList(categoryCodes);
				}
			}
		}

		function fetchCategories() {
			var categoryDocumentList = [];
			if (categoryCodeList !== undefined && categoryCodeList !== []) {
				categoryDocumentList = category.filter(function (categoryObj) {
					return categoryCodeList.indexOf(categoryObj.id) != -1;
				});
				console.log(categoryDocumentList);
				console.log(categoryCodeList);
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
		getCategoryList();
		fetchCategories();
	}, [props]);
	console.log(props.search);
	console.log(categoryList);
	console.log(categoryCodeList);
	return (
		<div>
			<div
				className={`uk-width-1-1 uk-margin-medium uk-margin-medium-left`}
			>
				<p className={`uk-text-lead `}>Search by category</p>
			</div>
			<div
				class="uk-child-width-1-3@s uk-grid-small uk-grid-match uk-margin  uk-margin-medium-left uk-margin-medium-right"
				uk-grid={`true`}
			>
				<div>
					<div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover">
						<h3 class="uk-card-title">Default</h3>
						{console.log("1" + categoryList)}
						{console.log("2" + categoryCodeList)}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
					</div>
				</div>
				<div>
					<div class="uk-card uk-card-default  uk-card-small uk-card-body uk-card-hover">
						<h3 class="uk-card-title">Primary</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
					</div>
				</div>
				<div>
					<div class="uk-card uk-card-default  uk-card-small uk-card-body uk-card-hover">
						<h3 class="uk-card-title">Secondary</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoriesCards;
