import { NYT_API_Key } from "../../util/secrets";
import { StoryDTO } from "../../modules/stories";
import axios from "axios";
import logger from "../../util/logger";

export const getTopStories = async (section: string): Promise<StoryDTO[]> => {
  const baseURL = "https://api.nytimes.com/svc/topstories/v2";
  logger.debug(`Calling New York times API to fetch the top stories for "${section}" section`);
  try {
    const { data, status } = await axios.get(`${baseURL}/${section}.json?api-key=${NYT_API_Key}`);
    // if (status !== 200) throw new Error(`Error occurred while calling NYT API with status code of: ${status}`);
    if (status === 429) throw new Error(`Request limit exhausted while calling NYT API`);
    const newsData: StoryDTO[] = [];
    data.results.forEach((news: any) => {
      newsData.push({
        title: news.title,
        description: news.abstract,
        isFavorite: false,
        author: String(news.byline)?.substring(3),
        category: news.section || data.section,
        subCategory: news.subsection,
        url: news.url,
        publishedDate: news.published_date,
        image: news.multimedia?.filter((m: any) => m.format === "threeByTwoSmallAt2X" && m.type == "image")[0]?.url,
        updatedAt: news.updated_date,
        createdAt: news.created_date,
        id: String(news.uri)?.split("/").pop(),
        type: news.item_type,
      });
    });
    return newsData;
  } catch (error) {
    logger.error(`Error occured while calling NYT API with message: ${error.message}`);
    throw error;
  }
};
