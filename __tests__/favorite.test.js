require('dotenv').config();

const { execSync } = require('child_process');
const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');

describe('favorites routes', () => {
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

      const profileData = {
        profile: {
          user_name: 'dylan',
          time_to_devote: 1,
          activity_level: 1,
          time_dog_at_home: 1,
          experience_with_dogs: 1,
          dwelling_size: 1,
          household_size: 1,
          children_under_10: 1,
          special_consideration: 1,
          main_caretaker: 1,
          other_pets: 1,
          protective_breed: 1,
          state: 'WA',
          zipcode: 98682
        }
      };

      await fakeRequest(app)
        .put('/api/profile')
        .send(profileData)
        .set('Authorization', token)
        .expect(200);
      
    }, 10000);
  
    afterAll(done => {
      return client.end(done);
    });

    test('favorites-post', async() => {

      const expectation =  [
        { 
          breed_name: 'Boxer',
          id:expect.any(Number),
          owner_id: expect.any(Number)
        }
      ];

      const data = await fakeRequest(app)
        .post('/api/favorites')
        .send({
          breed_name: 'Boxer',
          id:3,
          owner_id:3
        })
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('favorites-get', async() => {
      const expected = {
        weight: {
          imperial: expect.any(String),
          metric: expect.any(String)
        },
        height: {
          imperial: expect.any(String),
          metric: expect.any(String)
        },
        id: expect.any(Number),
        name: expect.any(String),
        bred_for: expect.any(String),
        breed_group: expect.any(String),
        life_span: expect.any(String),
        temperament: expect.any(String),
        reference_image_id: expect.any(String),
        imgUrl: expect.any(String),
        adoptionLink: expect.any(String)
      };

      const data = await fakeRequest(app)
        .get('/api/favorites')
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expect.arrayContaining([expected]));
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
