const products = require('../models/product');

const validateProductId = async (req, res, next) => {
  const sales = req.body;
  const productField = sales.every((sale) => sale.productId);
  if (!productField) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};

const validateQuantity = async (req, res, next) => {
  const sales = req.body;
  const quantityField = sales.every((sale) =>
    sale.quantity !== undefined && sale.quantity !== null);
  const quantityValue = sales.every((sale) => sale.quantity > 0);
  if (!quantityField) {
 return res
    .status(400).json({ message: '"quantity" is required' }); 
}
  if (!quantityValue) {
 return res
    .status(422).json({ message: '"quantity" must be greater than or equal to 1' }); 
}
  next();
};

const validateProductExist = async (req, res, next) => {
  const sales = req.body;
  const productExist = await Promise.all(sales.map((sale) => products.getById(sale.productId)));
  const productExistField = productExist.some((product) => product === undefined);
  if (productExistField) {
    return res
      .status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateProductId,
  validateQuantity,
  validateProductExist,
};
