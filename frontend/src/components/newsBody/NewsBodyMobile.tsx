import { useState } from "react";
import "../../assets/styles/newsBody/newsBodyDeskTopMobile.scss";
import { NewsToggle } from "../../types/enums";
import NewsCard from "../newsCards/NewsCard";
import Latest from "./Latest";
import InfiniteScroll from "react-infinite-scroll-component";
import { Story } from "../../types/types";

export interface NewsBodyMobileDesktopProps {
	stories: Story[];
	searchResults: Story[];
	handleStories: () => Promise<void>;
}

function NewsBodyMobile({
	stories,
	searchResults,
	handleStories
}: NewsBodyMobileDesktopProps) {
	// Don't have to split the news, just put everything in a grid that exists
	const [toggle, setToggle] = useState<NewsToggle>(NewsToggle.Featured);

	return (
		<>
			<div className="news-toggle">
				<button
					onClick={() => setToggle(NewsToggle.Featured)}
					className={toggle === "featured" ? "active" : ""}
				>
					Featured
				</button>
				<button
					onClick={() => setToggle(NewsToggle.Latest)}
					className={toggle === "latest" ? "active" : ""}
				>
					Latest
				</button>
			</div>
			<div className="grid-container">
				<InfiniteScroll
					next={function () {
						handleStories();
					}}
					hasMore={true}
					loader={<p></p>}
					dataLength={stories.length}
				>
					{toggle === "latest" && (
						<div className="grid-item latest">
							<Latest />
						</div>
					)}
				</InfiniteScroll>
				{toggle === "featured" && (
					<>
						<InfiniteScroll
							next={() => handleStories()}
							hasMore={stories.length ? true : false}
							loader={<p>Loading more stories...</p>}
							dataLength={stories.length}
						>
							{searchResults.length > 0
								? searchResults?.map((story, i) => {
										return (
											<div className="grid-item">
												<NewsCard
													key={i}
													story={story}
												/>
											</div>
										);
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  })
								: stories?.map((story, i) => {
										return (
											<div className="grid-item">
												<NewsCard
													key={i}
													story={story}
												/>
											</div>
										);
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  })}
						</InfiniteScroll>
					</>
				)}
			</div>
		</>
	);
}

export default NewsBodyMobile;
