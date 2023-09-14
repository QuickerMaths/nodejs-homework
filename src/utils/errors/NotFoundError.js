import { BaseError } from "./BaseError.js";

class NotFoundError extends BaseError {
  constructor(message) {
    super("NotFoundError", 404, message, true);
  }
}
