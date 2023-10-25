import "../../assets/styles/newsBody/newsBodyDeskTopMobile.scss";
import NewsCard from "../newsCards/NewsCard";
import Latest from "./Latest";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewsBodyMobileDesktopProps } from "./NewsBodyMobile";

function NewsBodyDesktop({
	stories,
	searchResults,
	handleStories
}: NewsBodyMobileDesktopProps) {
	return (
		<>
			<InfiniteScroll
				next={() => handleStories()}
				hasMore={stories.length ? true : false}
				loader={<p>Loading more stories...</p>}
				dataLength={stories.length}
			>
				<div className="grid-container">
					<div className="grid-item latest">
						<Latest />
					</div>
					{searchResults.length > 0
						? searchResults?.map((story, i) => {
								return (
									<div key={i} className="grid-item">
										<NewsCard story={story} />
									</div>
								);
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  })
						: stories?.map((story, i) => {
								return (
									<div key={i} className="grid-item">
										<NewsCard story={story} />
									</div>
								);
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  })}
				</div>
			</InfiniteScroll>
		</>
	);
}

export default NewsBodyDesktop;
