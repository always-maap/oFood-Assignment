import "dotenv/config";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { routes } from "./configuration/router.js";
import logger from "./configuration/logger.js";
import swaggerJson from "../../dist/swagger-output.json" with { type: "json" };

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

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
