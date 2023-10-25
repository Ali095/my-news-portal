import app from "./app";
import logger from "./util/logger";

logger.info("Initializing express server...");

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  logger.info(`  App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
  logger.info("  Press CTRL-C to stop\n");
});

logger.info("Initialized express server!");

export default server;
