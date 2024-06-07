import { ProblemDocument } from "http-problem-details";
import { ErrorMapper } from "http-problem-details-mapper";

import { DomainError } from "@ofood/domain";
import { ProblemType } from "../configuration/problemDetails.js";

export class DomainErrorMapper extends ErrorMapper {
  constructor() {
    super(DomainError);
  }

  mapError() {
    return new ProblemDocument({
      status: 500,
      title: "Internal Server Error",
      type: ProblemType.InternalServerError,
    });
  }
}
