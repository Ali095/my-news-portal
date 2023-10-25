import NavBar from "../components/navigation/NavBar";
import "../assets/styles/layout.scss";
import NewsCategoriesBody from "../components/newsBody/NewsCategoriesBody";
import { useState } from "react";
import { Story } from "../types/types";

function DefaultLayout({ sectionName }: { sectionName: string }) {
	const [searchResults, setSearchResults] = useState<Story[]>([]);
	return (
		<div>
			<div className="layout">
				<NavBar setSearchResults={setSearchResults} />
				<NewsCategoriesBody sectionName={sectionName} searchResults={searchResults} />
			</div>
		</div>
	);
}

export default DefaultLayout;
