import { Link } from "react-router-dom";
import "../../assets/styles/newsBody/latestNewsCard.scss";
import { LatestStory } from "../../types/types";

interface LatestNewsCardProps {
	latestStory: LatestStory;
}

function LatestNewsCard({ latestStory }: LatestNewsCardProps) {
	return (
		<div className="card-container">
			<div className="time">{latestStory.publishedAt}</div>
			<div className="title">
				<Link to={latestStory.url} target="_blank">
					{latestStory.title}
				</Link>
			</div>
			<hr id="latest-news-divider" />
		</div>
	);
}

export default LatestNewsCard;
