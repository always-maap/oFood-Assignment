type NotFoundErrorOptions = {
  id: string;
  resource: string;
};

export class NotFoundError extends Error {
  constructor(options: NotFoundErrorOptions) {
    const { id, resource } = options;
    super();
    Error.captureStackTrace(this, this.constructor);

    this.message = `${resource} with id ${id} could not be found`;
  }
}
