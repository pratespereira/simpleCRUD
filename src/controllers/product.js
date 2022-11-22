const product = require('../services/product');

const getAll = async (req, res) => {
  const { type, message } = await product.getAll();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await product.getById(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const search = async (req, res) => {
  const { q } = req.query;
  const { type, message } = await product
    .search(q);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const create = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await product.create(name);
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await product.update(id, name);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await product.deleteById(id);
  if (type) return res.status(type).json({ message });
  res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  search,
  create,
  update,
  deleteById,
};
