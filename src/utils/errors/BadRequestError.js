import { BaseError } from "./BaseError.js";

class BadRequestError extends BaseError {
  constructor(message) {
    super("Bad Request", 400, message, true);
  }
}

export { BadRequestError };
