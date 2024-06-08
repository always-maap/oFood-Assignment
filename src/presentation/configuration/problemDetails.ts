import { DefaultMappingStrategy, MapperRegistry } from "http-problem-details-mapper";

import { DomainErrorMapper } from "../mapper/domainErrorMapper.js";
import { NotFoundErrorMapper } from "../mapper/notFoundErrorMapper.js";
import { ArgumentErrorMapper } from "../mapper/argumentErrorMapper.js";

export const strategy = new DefaultMappingStrategy(
  new MapperRegistry()
    .registerMapper(new DomainErrorMapper())
    .registerMapper(new NotFoundErrorMapper())
    .registerMapper(new ArgumentErrorMapper())
);

export enum ProblemType {
  InternalServerError = "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1",
  NotFound = "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4",
  BadRequest = "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1",
}
