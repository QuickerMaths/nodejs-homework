export default function makeContactDb({ model }) {
  async function findAll() {
    const contacts = await model.find();

    return contacts;
  }

  async function findByProperty({ property, value }) {
    const contact = await model.findOne({ [property]: value });

    return contact;
  }

  async function findById({ id }) {
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
    findByProperty,
    findById,
    create,
    remove,
    update,
  });
}
