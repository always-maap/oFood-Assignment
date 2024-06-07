import { DefaultMappingStrategy, MapperRegistry } from "http-problem-details-mapper";
import { DomainErrorMapper } from "../mapper/DomainErrorMapper.js";

export const strategy = new DefaultMappingStrategy(new MapperRegistry().registerMapper(new DomainErrorMapper()));

export enum ProblemType {
  InternalServerError = "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1",
}
