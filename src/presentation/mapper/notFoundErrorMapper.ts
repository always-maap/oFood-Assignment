import { ProblemDocument } from "http-problem-details";
import { ErrorMapper } from "http-problem-details-mapper";

import { NotFoundError } from "@ofood/domain";
import { ProblemType } from "../configuration/problemDetails.js";

export class NotFoundErrorMapper extends ErrorMapper {
  constructor() {
    super(NotFoundError);
  }

  mapError(error: Error) {
    return new ProblemDocument({
      status: 404,
      title: "Not Found",
      type: ProblemType.NotFound,
    });
  }
}
