import User from "../../models/user.model.js";
import makeUsersDb from "./users.data-access";

const usersDb = makeUsersDb({ model: User });

export default usersDb;
