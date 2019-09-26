import { expect } from 'chai';
import { agent as request } from 'supertest';
import app from '../src/app';

describe('Index Test', () => {
  it('should always pass', function() {
    expect(true).to.equal(true);
  });

  it('should POST /api/todo v2', async function() {
    const res = await request(app)
      .post('/api/todo')
      .send({ todo: 'first todo' });
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.data).not.to.be.empty;
    expect(res.body.data).to.be.an('object');
    expect(res.body.error).to.be.empty;
  });
  it('should GET /api/todo', async function() {
    const res = await request(app).get('/api/todo');
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.data).not.to.be.empty;
    expect(res.body.data).to.be.an('array');
    expect(res.body.error).to.be.empty;
  });
});
