const express = require('express');
const productController = require('../controllers/product');
const middleware = require('../middlewares/product');

const product = express.Router();

product.get('/', productController.getAll);
product.get('/search', productController.search);
product.get('/:id', productController.getById);
product.post('/', middleware.validateProduct, productController.create);
product.put('/:id', middleware.validateProduct, productController.update);
product.delete('/:id', productController.deleteById);

module.exports = product;