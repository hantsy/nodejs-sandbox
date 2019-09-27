import { expect } from 'chai';
import { agent as request } from 'supertest';
import app from '../src/app';

describe('Index Test', () => {
  it('should always pass', function() {
    expect(true).to.equal(true);
  });

  it('should POST /api/posts', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ title: 'first post', content: 'content of first post' });
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.data).not.to.be.empty;
    expect(res.body.data).to.be.an('object');
    expect(res.body.error).to.be.empty;
  });
});
