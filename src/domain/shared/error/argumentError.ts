import { ZodError } from "zod";

export class ArgumentError extends Error {
  constructor(error: ZodError) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.message = error.errors.map((e) => e.message).join(", ");
  }
}
