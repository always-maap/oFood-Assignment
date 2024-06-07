export class DomainError extends Error {
  constructor(message: string) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.message = message;
  }
}
