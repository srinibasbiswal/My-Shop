import React, { useEffect, useState } from "react";
import CategoriesCards from "../components/CategoriesCards";
import ResultProducts from "../components/ResultProducts";
import { searchTypes } from "../data/enums/searchType";

function SearchResult(props) {
	const [showCategoryCards, showshowCategoryCards] = useState(true);
	useEffect(() => {
		function setCategoryShowValue() {
			if (
				props.searchType !== undefined &&
				props.searchType === searchTypes.CATEGORY
			) {
				showshowCategoryCards(false);
			}
		}
		setCategoryShowValue();
	}, [props.searchType]);

	if (props !== undefined && props.search === "") {
		return (
			<div>
				<p className={`uk-text-lead  uk-text-center`}>
					Please enter some value in the search bar
				</p>
			</div>
		);
	} else if (props !== undefined && props.search !== undefined) {
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
