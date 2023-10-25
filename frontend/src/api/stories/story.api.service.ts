/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Story } from "../../types/types";

const baseURL = "http://localhost:3000";
/**
 * We will implement real time caching ofcourse. As the NYT API has rate limiter this is for smooth app experience
 */
let cachedData: Record<string, Story[]> = {};

// Delete all cache after 5 minutes for getting the updated records
setInterval(() => {
	cachedData = {};
}, 50 * 60 * 1000);

const getTopNewsStories = async (section: string): Promise<Story[]> => {
	if (section in cachedData && cachedData[section].length > 0) {
		console.log(
			`Using cached data for "${section}" section in which found ${cachedData[section].length} records`
		);
		return cachedData[section];
	}
	console.log(
		`Calling API to fetch the top stories for "${section}" section`
	);
	try {
		if (!section || section === "") section = "home";
		const { data, status } = await axios.get(
			`${baseURL}/api/v1/stories/top?section=${section}`
		);
		if (![200, 304].includes(status))
			throw new Error(`API call failed with status code: ${status}`);
		const newsData: Story[] = data.result;
		console.log(
			`Successfully fetched "${newsData.length}" records for "${section}" section `
		);
		//Add data to cache
		cachedData[section] = newsData;
		return newsData;
	} catch (error) {
		console.error("Error occured while calling API", error);
		return [];
	}
};

export { getTopNewsStories };
