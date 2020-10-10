import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResult from "../containers/SearchResult";

function ResultPage({ match }) {
	const [searchValue, setSearchValue] = useState("");
	const [searchType, setSearchType] = useState("");
	useEffect(() => {
		function getSearchValue() {
			if (match.params) {
				setSearchType(match.params.searchType);
				setSearchValue(match.params.searchValue);
			}
		}
		getSearchValue();
	}, [match]);
	return (
		<React.Fragment>
			<Header />
			<SearchResult search={searchValue} searchType={searchType} />
			<Footer />
		</React.Fragment>
	);
}

export default ResultPage;
