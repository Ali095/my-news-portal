import Categories from "../navigation/Categories";
import FavoritesGrid from "./FavoritesGrid";

function FavoritesBody() {
	return (
		<div className="news-body-container">
			<div className="categories">
				<Categories />
			</div>
			<div className="news">
				<div className="news-title">Favorites</div>
				<FavoritesGrid />
			</div>
		</div>
	);
}

export default FavoritesBody;
