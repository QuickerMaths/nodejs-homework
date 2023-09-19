import authService from "../services/auth/index.auth-service.js";
import usersDb from "../data-access/users/index.data-access.js";
import { UnauthorizedError } from "../utils/errors/index.errors.js";

const authMiddleware =
  ({ authService, usersDb }) =>
  async (req, res, next) => {
    const authHeader =
      req.headers["authorization"] || req.headers["Authorization"];

    if (!authHeader) {
      return next(new UnauthorizedError("Authorization header is missing"));
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return next(new UnauthorizedError("Credentials is missing"));
    }

    const decoded = await authService.jwt.verifyToken({ token });

    if (decoded === "expired") {
      await usersDb.update({
        userId: await authService.jwt.decodeToken({ token }).payload,
        changes: { token: null },
      });
      return next(new UnauthorizedError("Token expired, please login again"));
    }

    const user = await usersDb.findByProperty({
      property: "_id",
      value: decoded.payload,
    });

    if (!user) {
      next(new UnauthorizedError("User with such token was not found"));
    }

    req.user = user;

    next();
  };

export default authMiddleware({ authService, usersDb });
