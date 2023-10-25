import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/newsBody/latest.scss";
import RedDotIcon from "../icons/RedDotIcon";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import RightArrowIcon from "../icons/RightArrowIcon";
import LatestNewsCard from "../newsCards/LatestNewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useRef, useState } from "react";
import { Story, LatestStory } from "../../types/types";
import { getTopNewsStories } from "../../api/stories";

function Latest() {
	const location = useLocation();
	const path = location.pathname.substring(1);
	const [latestStories, setLatestStories] = useState<LatestStory[]>([]);
	const dataFetchedRef = useRef(false);

	const handleStories = async () => {
		let filterParams = "home";
		switch (path) {
			case "home":
				filterParams = "home";
				break;
			case "general":
				filterParams = "world";
				break;
			case "latest":
				filterParams = "world";
				break;

			default:
				filterParams = path;
				break;
		}

		getTopNewsStories(filterParams).then((news: Story[]) => {
			news.forEach((data) => {
				const story: LatestStory = {
					title: data.title,
					publishedAt: new Date(data.publishedDate).toLocaleString(
						"en-US",
						{
							timeZoneName: "shortOffset",
							hour12: false
						}
					),
					url: data.url
				};

				setLatestStories((current) => [...current, story]);
			});
		});
	};

	useEffect(() => {
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		handleStories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="latest-container">
			<div className="latest-title">
				<RedDotIcon />
				<div className="title">Latest news</div>
			</div>
			<InfiniteScroll
				next={() => handleStories()}
				hasMore={true}
				loader={<p></p>}
				dataLength={latestStories.length}
				scrollableTarget={"latest-news-widget"}
			>
				<div className="latest-body" id="latest-news-widget">
					{latestStories?.map((story, i) => {
						return <LatestNewsCard key={i} latestStory={story} />;
					})}
				</div>
			</InfiniteScroll>
			<div className="latest-footer">
				<Link to={AvailableRoutes.Latest}>
					See all news
					<RightArrowIcon />
				</Link>
			</div>
		</div>
	);
}

export default Latest;
