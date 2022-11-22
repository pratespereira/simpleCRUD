const salesModel = require('../models/sales');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return { type: null, message: sales };
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  if (!sale.length) return { type: (404), message: 'Sale not found' };
  return { type: null, message: sale };
};

const create = async (sales) => {
  const saleId = await salesModel.addSaleDate();
  await Promise.all(sales.map((sale) => salesModel.create({ saleId, ...sale })));
  return { type: null, message: { id: saleId, itemsSold: sales } };
};

const update = async (sales, saleId) => {
  const saleExists = await getById(saleId);
  if (saleExists.type) return saleExists;
  await salesModel.deleteSaleP(saleId);
  await Promise.all(sales.map((sale) => salesModel.create({ saleId, ...sale })));
  return { type: null, message: { saleId, itemsUpdated: sales } };
};

const deleteById = async (id) => {
  const sale = await salesModel.getById(id);
  if (!sale.length) return { type: (404), message: 'Sale not found' };
  await salesModel.deleteSale(id);
  return { type: null, message: { id } };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};