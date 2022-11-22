const saleModelMock = require('../mocks/salesModelMock');
const salesService = require('../../../src/services/sales');
const salesController = require('../../../src/controllers/sales');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('Testa o controller de vendas', () => {
  afterEach(sinon.restore);
  
  it('Testa a função "getAll"', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAll').resolves({ type: null, message: saleModelMock });

    await salesController.getAll(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(saleModelMock)).to.be.equal(true);
  });

  it('Testa a função "getById"', async () => {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getById').resolves({ type: null, message: saleModelMock[0] });

    await salesController.getById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(saleModelMock[0])).to.be.equal(true);
  });

  it('Testa a função "create"', async () => {
    const req = { body: { itensSold: [{ productId: 1, quantity: 1 }] } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'create').resolves({ type: null, message: saleModelMock[0] });

    await salesController.create(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith(saleModelMock[0])).to.be.equal(true);
  });

  it('Testa a função "update"', async () => {
    const req = { params: { id: 1 }, body: { itensSold: [{ productId: 1, quantity: 1 }] } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'update').resolves({ type: null, message: saleModelMock[0] });

    await salesController.update(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(saleModelMock[0])).to.be.equal(true);
  });

  it('Testa a função "deleteById"', async () => {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();

    sinon.stub(salesService, 'deleteById').resolves({ type: null, message: null });

    await salesController.deleteById(req, res);

    expect(res.status.calledWith(204)).to.be.equal(true);
    expect(res.end.called).to.be.equal(true);
  });
});