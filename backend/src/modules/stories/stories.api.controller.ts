import { Request, Response, NextFunction } from "express";
import { query, validationResult } from "express-validator";
import { apiOk, apiValidation } from "../../util/apiHelpers";
import { RouterClass } from "../../common/RouterClass";
import { storiesService } from "./stories.service";
import { STORIES_SECTION_LIST } from "./stories.constant";

class StoriesRouter extends RouterClass {}

export const storiesRouter = new StoriesRouter();
export default storiesRouter;

const validateSection = [
  query("section")
    .isString()
    .withMessage("Section must be a string")
    .isIn(STORIES_SECTION_LIST)
    .withMessage(`section should be one of following: ${STORIES_SECTION_LIST.join(", ")}`),
  (req: Request, res: Response, next: NextFunction) => {
    apiValidation(req, res);
    next();
  },
];

storiesRouter.get("/top", [...validateSection], async (req: Request, res: Response, next: NextFunction) => {
  const section: string = String(req.query.section);
  const result = await storiesService.getTopStories(section);
  apiOk(res, result);
});
