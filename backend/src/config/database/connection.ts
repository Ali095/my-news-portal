import logger from "../../util/logger";

// We will add connections in here if required, for this particular test we don't need to have one.
export const DBConnect = async (uri: string) => {
  logger.info(`Connected to DB with URI: ${uri}`);
};
