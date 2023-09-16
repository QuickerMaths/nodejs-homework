import { BaseError } from "./BaseError.js";

class UnauthorizedError extends BaseError {
  constructor(message) {
    super("UnauthorizedError", 401, message, true);
  }
}

export { UnauthorizedError };
