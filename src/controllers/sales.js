const salesService = require('../services/sales');

const getAll = async (_req, res) => {
  const { type, message } = await salesService.getAll();
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const create = async (req, res) => {
  const { type, message } = await salesService.create(req.body);
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.update(req.body, id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteById(id);
  if (type) return res.status(type).json({ message });
  return res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};