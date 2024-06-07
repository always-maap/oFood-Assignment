import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { HttpProblemResponse } from "express-http-problem-details";
import swaggerUi from "swagger-ui-express";

import { routes } from "./configuration/router.js";
import logger from "./configuration/logger.js";
import swaggerJson from "../../dist/swagger-output.json";
import { strategy } from "./configuration/problemDetails.js";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";

const app = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === "development") {
  app.use(logger);
}

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
}

app.use(routes);

app.use(errorHandlerMiddleware);

app.use(HttpProblemResponse({ strategy }));

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
