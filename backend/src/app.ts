import { errorHandler404, errorUnhandledRejection, errorUncughtException, errorHandlerAll } from "./util/apiHelpers";
import express from "express"; // framework for building APIs
import compression from "compression"; // compresses requests
import lusca from "lusca";
import cors from "cors";
import { morganMiddleware } from "./util/logger";
import { storiesRouter } from "./modules/stories";

// Create Express server
const app = express();

//Logging middleware with morgan
app.use(morganMiddleware);

// Express configuration
app.use(cors());
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

/**
 * Our API Section
 */
app.use("/api/v1/stories", storiesRouter.Router());

/**
 * Other handlers
 */
app.all("*", errorHandler404);

//Global Error handler
app.use(errorHandlerAll);
process.on("uncaughtException", errorUncughtException);
process.on("unhandledRejection", errorUnhandledRejection);

export default app;
