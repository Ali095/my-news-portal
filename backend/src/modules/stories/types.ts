import { DTO } from "../../common";

export class StoryDTO extends DTO {
  title: string = undefined;
  description: string = undefined;
  category: string = undefined;
  subCategory: string = undefined;
  author: string = undefined;
  image: string = undefined;
  url: string = undefined;
  isFavorite: boolean = false;
  publishedDate: string = undefined;
  type: string = undefined;
}
