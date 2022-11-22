const salesModelMock = require('../mocks/salesModelMock');
const salesModel = require('../../../src/models/sales');
const connection = require('../../../src/connection');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testa o model de vendas', () => {
  afterEach(sinon.restore);

  it('Testa o método "getAllSales"', async () => {
    sinon.stub(connection, 'execute').resolves([salesModelMock]);
    const result = await salesModel.getAll();
    expect(result).equal(salesModelMock);
  });

  it('Testa o método "getSaleById"', async () => {
    sinon.stub(connection, 'execute').resolves([salesModelMock]);
    const result = await salesModel.getById(1);
    expect(result).equal(salesModelMock);
  });

  it('Testa o método "createSale"', async () => {
    sinon.stub(connection, 'execute').resolves(6556);
    const result = await salesModel.create({
      saleId: 6556,
      productId: 1,
      quantity: 1
    });
    expect(result).equal(6556);
  });

  it('Testa o método "deleteSale"', async () => {
    sinon.stub(connection, 'execute').resolves(salesModelMock);
    const result = await salesModel.deleteSale(1);
    expect(result).to.be.deep.equal({
      saleId: 1,
      productId: 1,
      quantity: 5,
      date: '2022-11-20 18:40:23'
    });
  });
});