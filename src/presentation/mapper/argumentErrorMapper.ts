import { ProblemDocument } from "http-problem-details";
import { ErrorMapper } from "http-problem-details-mapper";

import { ArgumentError } from "@ofood/domain";
import { ProblemType } from "../configuration/problemDetails.js";

export class ArgumentErrorMapper extends ErrorMapper {
  constructor() {
    super(ArgumentError);
  }

  mapError(error: Error) {
    return new ProblemDocument({
      status: 400,
      title: "Bad Request",
      type: ProblemType.BadRequest,
    });
  }
}
