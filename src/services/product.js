const product = require('../models/product');

const getAll = async () => {
  const products = await product.getAll();
  return { type: null, message: products };
};

const getById = async (id) => {
  const productById = await product.getById(id);
  if (!productById) return { type: 404, message: 'Product not found' };
  return { type: null, message: productById };
};

const search = async (q) => {
  const products = await product.search(q);
  return { type: null, message: products };
};

const create = async (name) => {
  const newProduct = await product.create(name);
  return { type: null, message: newProduct };
};

const update = async (id, name) => {
  const productById = await product.getById(id);
  if (!productById) return { type: 404, message: 'Product not found' };
  await product.update(id, name);
  return { type: null, message: { id, name } };
};

const deleteById = async (id) => {
  const productById = await product.getById(id);
  if (!productById) return { type: 404, message: 'Product not found' };
  await product.deleteById(id);
  return { type: null, message: { id } };
};

module.exports = {
  getAll,
  getById,
  search,
  create,
  update,
  deleteById,
};