import { useEffect, useState } from "react";
import NewsCard from "../newsCards/NewsCard";
import { Story } from "../../types/types";
import "../../assets/styles/favorites/favoritesGrid.scss";

function FavoritesGrid() {
	const [favoriteStories, setFavoriteStories] = useState<Story[]>([]);

	useEffect(() => {
		const favorites = localStorage.getItem("favorites");
		if (favorites) setFavoriteStories(JSON.parse(favorites));
	}, []);

	return (
		<div className="favorites-grid-container">
			{favoriteStories.length === 0 ? (
				<div>No favorites</div>
			) : (
				favoriteStories.map((story, i) => {
					return <NewsCard key={i} story={story} />;
				})
			)}
		</div>
	);
}

export default FavoritesGrid;
