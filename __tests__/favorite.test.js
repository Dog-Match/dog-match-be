require('dotenv').config();

const { execSync } = require('child_process');

const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {
    let token;
  
    beforeAll(async () => {
      execSync('npm run setup-db');
  
      await client.connect();
      const signInData = await fakeRequest(app)
        .post('/auth/signup')
        .send({
          email: 'jon@user.com',
          password: '1234'
        });
      
      token = signInData.body.token; // eslint-disable-line
    }, 50000);
  
    afterAll(done => {
      return client.end(done);
    });

    test('favorites-get', async() => {

      const expectation = [
        { 
          breed_id: expect.any(String),
          id: expect.any(Number),
          owner_id:expect.any(Number)
        },
        {
          breed_id: expect.any(String),
          id: expect.any(Number),
          owner_id:expect.any(Number)
        }
      ];

      const data = await fakeRequest(app)
        .get('/favorites')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });
  });
});
