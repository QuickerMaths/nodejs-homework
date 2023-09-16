import jwt from "jsonwebtoken";
import config from "../../../config/config.js";

export default function jwtService() {
  const signToken = ({ payload }) => {
    return jwt.sign({ payload }, config.jwt.jwtSecret, {
      expiresIn: config.jwt.jwtExpiresIn,
    });
  };

  return Object.freeze({
    signToken,
  });
}
