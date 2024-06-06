import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { routes } from "./router";
import logger from "./logger";

(async () => {
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(logger);

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());

  app.use(cors());

  app.use(routes);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();
