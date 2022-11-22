const express = require('express');
const salesController = require('../controllers/sales');
const { validateProductExist,
  validateProductId,
  validateQuantity } = require('../middlewares/sales');

const sales = express.Router();

sales.get('/', salesController.getAll);
sales.get('/:id', salesController.getById);
sales.post('/',
  validateProductId, validateQuantity, validateProductExist, salesController.create);
sales.put('/:id',
  validateProductId, validateQuantity, validateProductExist, salesController.update);
sales.delete('/:id', salesController.deleteById);

module.exports = sales;