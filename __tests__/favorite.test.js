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
    }, 500000);
  
    afterAll(done => {
      return client.end(done);
    });

    jest.setTimeout(10000);
    test('favorites-post', async() => {

      const expectation =  [
        { 
          breed_name: 'Mixed',
          id:expect.any(Number),
          owner_id: expect.any(Number)
        }
      ];

      const data = await fakeRequest(app)
        .post('/api/favorites')
        .send({
          breed_name: 'Mixed',
          id:3,
          owner_id:3
        })
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });


    test('favorites-get', async() => {

      const expectation = [
        { 
          breed_name: expect.any(String),
          id: expect.any(Number),
          owner_id:expect.any(Number)
        }
      ];

      const data = await fakeRequest(app)
        .get('/api/favorites')
        .set('Authorization', token)
        .expect('Content-Type', /json/);
        //.expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('favorites-delete', async() => {
      const expectation = 
        {         
          breed_name: 'Mixed',
          id:1,
          owner_id:1
        };
    
      const data = await fakeRequest(app)
        .delete('/api/favorites/Mixed')
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);
    
      expect(data.body).toEqual(expectation);

      const Favorites = await fakeRequest(app)
        .get('/api/favorites')
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(Favorites.body).toEqual(expect.not.arrayContaining([expectation]));
    });
  });
});
