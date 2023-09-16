export default function makeUsersDb({ model }) {
  async function findByProperty({ property }) {
    const user = await model.findOne({ property });

    return user;
  }

  async function insert({ user }) {
    const user = await model.create(user);

    return user;
  }

  return Object.freeze({
    findByProperty,
    insert,
  });
}
