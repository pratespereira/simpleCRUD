const productModelMock = require('../mocks/productModelMock');
const productModel = require('../../../src/models/product');
const productService = require('../../../src/services/product')
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testa o serviço de produtos', () => {
  it('Testa a função "getAll"', async () => {
    sinon.stub(productModel, 'getAll').resolves(productModelMock);
    const { type, message } = await productService.getAll();
    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal(productModelMock);
  });

  it('Testa a função "getById"', async () => {
    sinon.stub(productModel, 'getById').resolves(productModelMock[0]);
    const { type, message } = await productService.getById(1);
    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal(productModelMock[0]);
  });

  it('Testa a função "create"', async () => {
    sinon.stub(productModel, 'create').resolves(productModelMock[0]);
    const { type, message } = await productService.create(productModelMock[0]);
    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal(productModelMock[0]);
  });

  it('Testa a função "update"', async () => {
    sinon.stub(productModel, 'update').resolves(productModelMock[0]);
    const { type, message } = await productService.update(4, 'Lançador de teia');
    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal({
      id: 4,
      name: 'Lançador de teia',
    });
  });

  it('Testa a função "delete"', async () => {
    sinon.stub(productModel, 'deleteById').resolves(productModelMock);
    const { type, message } = await productService.deleteById(productModelMock[0].id);
    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal({ id: 1 });
  });
});
