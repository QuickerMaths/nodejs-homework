export default function makeUsersDb({ model }) {
  async function findByProperty({ property, value }) {
    const user = await model.findOne({ [property]: value });

    return user;
  }

  async function insert({ userData }) {
    const user = await model.create(userData);

    return user;
  }

  return Object.freeze({
    findByProperty,
    insert,
  });
}
