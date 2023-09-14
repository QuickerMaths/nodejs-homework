import { BaseError } from "./BaseError.js";

class DuplicateError extends BaseError {
  constructor(message) {
    super("DuplicateError", 409, message, true);
  }
}

export { DuplicateError };
