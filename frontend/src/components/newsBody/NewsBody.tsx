import { useEffect, useRef, useState } from "react";
import "../../assets/styles/newsBody/newsBody.scss";
import NewsBodyDesktop from "./NewsBodyDesktop";
import NewsBodyMobile from "./NewsBodyMobile";
import { useLocation } from "react-router-dom";
import { Story } from "../../types/types";
import { getTopNewsStories } from "../../api/stories";

interface NewsBodyProps {
	searchResults: Story[];
}

function NewsBody({ searchResults }: NewsBodyProps) {
	const location = useLocation();
	const path = location.pathname.substring(1);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [stories, setStories] = useState<Story[]>([]);
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
			setStories(news);
		});
	};

	useEffect(() => {
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		handleStories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const checkIsMobile = () => {
		setIsMobile(window.innerWidth <= 767);
	};

	useEffect(() => {
		window.addEventListener("resize", checkIsMobile);
		checkIsMobile(); // Initial check

		return () => {
			window.removeEventListener("resize", checkIsMobile);
		};
	}, []);

	return (
		<div className="newsBody-container">
			<div className="news-card-grid-latest">
				{isMobile ? (
					<NewsBodyMobile
						stories={stories}
						handleStories={handleStories}
						searchResults={searchResults}
					/>
				) : (
					<NewsBodyDesktop
						stories={stories}
						handleStories={handleStories}
						searchResults={searchResults}
					/>
				)}
			</div>
		</div>
	);
}

export default NewsBody;
