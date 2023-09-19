export default function makeUsersDb({ model }) {
  async function findByProperty({ property, value }) {
    const user = await model.findOne({ [property]: value });

    return user;
  }

  async function insert({ userData }) {
    const user = await model.create(userData);

    return user;
  }

  async function update({ userId, changes }) {
    const user = await model.findByIdAndUpdate(
      userId,
      {
        ...changes,
      },
      { returnOriginal: false }
    );

    return user;
  }

  return Object.freeze({
    findByProperty,
    insert,
    update,
  });
}
