import { getTopStories } from "../../external/nyt";
import { StoryDTO } from "./types";

class StoriesService {
  public async getTopStories(section: string): Promise<StoryDTO[]> {
    const stories = await getTopStories(section);
    const a = new StoryDTO();
    const requiredFields: Partial<Record<keyof StoryDTO, boolean>> = {
      author: true,
      category: true,
      publishedDate: true,
      title: true,
      image: true,
      updatedAt: true,
      url: true,
    };
    // Filter out stories that don't have all the required fields defined
    const validStories = stories.filter((story: any) =>
      Object.keys(requiredFields).every(
        field => story[field] !== undefined && story[field] !== null && story[field] !== ""
      )
    );
    return validStories;
  }
}

export const storiesService: StoriesService = new StoriesService();
export default storiesService;
