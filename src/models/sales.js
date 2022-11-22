const connection = require('../connection');

const getAll = async () => {
  const query = `SELECT ps.sale_id AS saleId,
     ps.product_id AS productId,
     ps.quantity AS quantity,
     s.date AS date
     FROM StoreManager.sales_products AS ps LEFT JOIN StoreManager.sales AS s ON ps.sale_id = s.id
     ORDER BY s.id ASC, ps.product_id ASC`;
  const [result] = await connection.execute(query);
  return result;
};

const getById = async (id) => {
  const query = `SELECT ps.product_id AS productId,
      ps.quantity AS quantity,
      s.date AS date
      FROM StoreManager.sales_products AS ps LEFT JOIN StoreManager.sales AS s ON ps.sale_id = s.id
      WHERE ps.sale_id = ?
      ORDER BY s.id ASC, ps.product_id ASC`;
  const [result] = await connection.execute(query, [id]);
  return result;
};

const create = async ({ saleId, productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return saleId;
};

const addSaleDate = async () => {
  const date = new Date();
  const [saleDate] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [date],
  );
  return saleDate.insertId;
};

const deleteSaleP = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.sales_products WHERE sale_id=?',
    [id],
  );
};

const deleteSale = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id=?';
  await deleteSaleP(id);
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAll,
  getById,
  create,
  addSaleDate,
  deleteSaleP,
  deleteSale,
};
