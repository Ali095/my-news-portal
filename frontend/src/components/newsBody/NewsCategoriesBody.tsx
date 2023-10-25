import "../../assets/styles/newsBody/newsCategoriesBody.scss";
import { Story } from "../../types/types";
import Categories from "../navigation/Categories";
import NewsBody from "./NewsBody";

interface NewsCategoriesBodyProps {
	searchResults: Story[];
	sectionName: string
}

function NewsCategoriesBody({ searchResults, sectionName }: NewsCategoriesBodyProps) {
	return (
		<div className="news-body-container">
			<div className="categories">
				<Categories />
			</div>
			<div className="news">
				<div className="news-title">{`${sectionName} Top Stories`}</div>
				<NewsBody searchResults={searchResults} />
			</div>
		</div>
	);
}

export default NewsCategoriesBody;
