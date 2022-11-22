const salesModelMock = require('../mocks/salesModelMock');
const salesModel = require('../../../src/models/sales');
const salesService = require('../../../src/services/sales');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testa o serviço de vendas', () => {
  afterEach(sinon.restore);
  it('Testa a função "getAll"', async () => {
    sinon.stub(salesModel, 'getAll').resolves(salesModelMock);
    const { type, message } = await salesService.getAll();
    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal(salesModelMock);
  });

  it('Testa a função "getById"', async () => {
    sinon.stub(salesModel, 'getById').resolves(salesModelMock);
    const { type, message } = await salesService.getById(1);
    expect(type).to.be.equal(null);
    expect(message).equal(salesModelMock);
  });

  it('Testa a função "create"', async () => {
    sinon.stub(salesModel, 'addSaleDate').resolves(1);
    sinon.stub(salesModel, 'create').resolves();
    const { type, message } = await salesService.create(salesModelMock);
    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal({ id: 1, itemsSold: salesModelMock });
  });
});
