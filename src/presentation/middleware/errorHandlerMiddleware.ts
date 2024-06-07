import { ErrorRequestHandler } from "express";

export const errorHandlerMiddleware: ErrorRequestHandler = (error, _req, _res, next) => {
  console.error(error.stack);
  next(error);
};
