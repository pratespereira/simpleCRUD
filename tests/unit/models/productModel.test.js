const productModelMock = require('../mocks/productModelMock');
const productModel = require('../../../src/models/product');
const connection = require('../../../src/connection');
const sinon = require('sinon');
const chai = require('chai');
const { afterEach } = require('mocha');
const { expect } = chai;

describe('Testa o model de produtos', () => {
  afterEach(sinon.restore);

  it('Testa a função "getAll"', async () => {
    sinon.stub(connection, 'execute').resolves([productModelMock])
    const response = await productModel.getAll();
    expect(response).to.be.deep.equal(productModelMock);
  });

  it('Testa a função "getById"', async () => {
    sinon.stub(connection, 'execute').resolves([[productModelMock[0]]])
    const response = await productModel.getById(1);
    expect(response).to.be.deep.equal(productModelMock[0]);
  });

  it('Testa a função "search"', async () => {
    sinon.stub(connection, 'execute').resolves([productModelMock])
    const response = await productModel.search('Product');
    expect(response).to.be.deep.equal(productModelMock);
  });

  it('Testa a função "create"', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }])
    const response = await productModel.create('Product');
    expect(response).to.be.deep.equal({ id: 1, name: 'Product' });
  });

  it('Testa a função "update"', async () => {
    sinon.stub(connection, 'execute').resolves()
    const response = await productModel.update(1, 'Product');
    expect(response).to.be.deep.equal({ id: 1, name: 'Product' });
  });

  it('Testa a função "deleteById"', async () => {
    sinon.stub(connection, 'execute').resolves()
    const response = await productModel.deleteById(1);
    expect(response).to.be.deep.equal();
  });
});