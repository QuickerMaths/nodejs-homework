import { NotFoundError } from "../../utils/errors/index.errors.js";

export default function makeContactDb({ model }) {
  async function findAll({ page, size, favorite }) {
    const { total, contacts } = await model
      .find(favorite ? { favorite } : {})
      .skip(page * size)
      .limit(size)
      .then(async (res) => {
        if (!res) {
          throw new NotFoundError("No contacts found");
        }

        const total = await model
          .find(favorite ? { favorite } : {})
          .countDocuments();

        return {
          total,
          contacts: res,
        };
      });

    return { total, contacts };
  }

  async function findByProperties({ email, phone }) {
    const contact = await model.findOne({ $or: [{ email }, { phone }] });

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
    findByProperties,
    findById,
    create,
    remove,
    update,
  });
}
