import User from "../../models/users.model.js";
import makeUsersDb from "./users.data-access.js";

const usersDb = makeUsersDb({ model: User });

export default usersDb;
