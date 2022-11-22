const productModelMock = require('../mocks/productModelMock');
const productService = require('../../../src/services/product');
const productController = require('../../../src/controllers/product');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('Testa o controller de produtos', () => {
  afterEach(sinon.restore);
  
  it('Testa a função "getAll"', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getAll').resolves({type: null, message: productModelMock});

    await productController.getAll(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(productModelMock)).to.be.equal(true);
  });

  it('Testa a função "getById"', async () => {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getById').resolves({ type: null, message: productModelMock[0] });

    await productController.getById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(productModelMock[0])).to.be.equal(true);
  });

  it('Testa a função "search"', async () => {
    const req = { query: { q: 'a' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'search').resolves({ type: null, message: productModelMock });

    await productController.search(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(productModelMock)).to.be.equal(true);
  });

  it('Testa a função "create"', async () => {
    const req = { body: { name: 'a' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'create').resolves({ type: null, message: productModelMock[0] });

    await productController.create(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith(productModelMock[0])).to.be.equal(true);
  });

  it('Testa a função "update"', async () => {
    const req = { params: { id: 1 }, body: { name: 'a' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'update').resolves({ type: null, message: productModelMock[0] });

    await productController.update(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(productModelMock[0])).to.be.equal(true);
  });

  it('Testa a função "deleteById"', async () => {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();

    sinon.stub(productService, 'deleteById').resolves({ type: null, message: null });

    await productController.deleteById(req, res);

    expect(res.status.calledWith(204)).to.be.equal(true);
    expect(res.end.called).to.be.equal(true);
  });
});