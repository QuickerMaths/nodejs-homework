import jwt from "jsonwebtoken";
import config from "../../../config/config.js";
import { UnauthorizedError } from "../../../utils/errors/UnauthorizedError.js";

export default function jwtService() {
  const signToken = ({ payload }) => {
    return jwt.sign({ payload }, config.jwt.jwtSecret, {
      expiresIn: config.jwt.jwtExpiresIn,
    });
  };

  const verifyToken = ({ token }) => {
    return jwt.verify(token, config.jwt.jwtSecret, (err, decoded) => {
      if (err && err.name === "TokenExpiredError") return "expired";
      if (err) throw new UnauthorizedError("Invalid token");

      return decoded;
    });
  };

  const decodeToken = ({ token }) => {
    return jwt.decode(token);
  };

  return Object.freeze({
    signToken,
    verifyToken,
    decodeToken,
  });
}
