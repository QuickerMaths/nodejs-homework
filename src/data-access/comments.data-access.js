export default function makeContactDb({ model }) {
  async function findAll() {
    const contacts = await model.find();

    return contacts;
  }

  async function getById({ id }) {
    const contact = await model.findById(id);

    return contact;
  }

  async function create({ ...contactData }) {
    const contact = await model.create({ ...contactData });

    return contact;
  }

  async function remove({ id }) {
    const contact = await model.findByIdAndDelete(id);

    return contact;
  }

  async function update({ id, changes }) {
    const contact = await model.findByIdAndUpdate(id, { ...changes });

    return contact;
  }

  return Object.freeze({
    findAll,
    getById,
    create,
    remove,
    update,
  });
}
