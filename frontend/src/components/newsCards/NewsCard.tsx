import { Link } from "react-router-dom";
import "../../assets/styles/newsBody/newsCard.scss";
import { Story } from "../../types/types";
import StarIcon from "../icons/StarIcon";
import { useEffect, useState } from "react";

interface NewsCardProps {
	story: Story;
}

function NewsCard({ story }: NewsCardProps) {
	const [isFavorite, setIsFavorite] = useState<boolean>(story.isFavorite);

	const handleFavorite = () => {
		let array: Story[] = [];
		story.isFavorite = !story.isFavorite;
		const favorites: string | null = localStorage.getItem("favorites");
		if (favorites) {
			array = JSON.parse(favorites);
			const art = array.filter((a) => a.title === story.title);

			if (art.length > 0) {
				array = array.filter((a) => a.title !== story.title);
			} else {
				//new story
				array.push(story);
			}
		} else {
			array.push(story);
		}
		localStorage.setItem("favorites", JSON.stringify(array));
	};

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	useEffect(() => {}, [isFavorite]);

	return (
		<Link to={story.url} target="_blank">
			<div className="newsCard-container">
				<div className="card-image">
					<img
						src={story.image} // "/src/assets/svg/placeholder.png"
						alt="Placeholder"
					/>
				</div>
				<div className="card-info">
					<div className="category-title">
						<div className="category">{`${story.category} ${
							story.subCategory ? "-> " + story.subCategory : ""
						}`}</div>
						<div className="title">{story.title}</div>
					</div>
					<div className="card-info__author">
						Published on{" "}
						{new Date(story.publishedDate).toDateString()}
					</div>
					<div className="card-info__author">
						Updated at{" "}
						{new Date(story.updatedAt).toLocaleString("en-US", {
							timeZoneName: "shortGeneric",
							hour12: false
						})}
					</div>
					<div className="card-footer">
						<div className="card-info__author">{story.author}</div>
						<div
							className="card-info__favorite"
							onClick={() => {
								setIsFavorite((prev) => !prev);
								handleFavorite();
							}}
						>
							<button
								className={
									isFavorite || story.isFavorite
										? "card-info__favorite__toggle active"
										: "card-info__favorite__toggle"
								}
							>
								<StarIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default NewsCard;
