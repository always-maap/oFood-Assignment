import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

(async () => {
  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());

  app.use(cors());

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();
