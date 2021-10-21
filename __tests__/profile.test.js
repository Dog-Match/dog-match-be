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

    jest.setTimeout(50000);
    // GET Profile
    test('GET Profile', async() => {
      const expectation = [
        { 
          activity_level: 3,
          children_under_10: 1,
          dwelling_size: 1,
          email: 'jon@user.com',
          experience_with_dogs: 3,
          hash: expect.any(String),
          household_size: 3,
          id: 2,
          main_caretaker: 2,
          other_pets: 2,
          protective_breed: 2,
          special_consideration: 1,
          state: 'AL',
          time_dog_at_home: 3,
          time_to_devote: 3,
          user_name: null,
          zipcode: null,
        }
      ];      
          
      const data = await fakeRequest(app)
        .get('/api/profile')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .expect(200);
      expect(data.body).toEqual(expectation);  
    });

    // PUT (Update) Profile 
    test('Update Profile', async() => {
      const thingy = {
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
      const expectation = thingy.profile;
      expectation.email = expect.any(String);
      expectation.hash = expect.any(String);
      expectation.id = expect.any(Number);
      const data = await fakeRequest(app)
        .put('/api/profile')
        .send(thingy)
        .set('Authorization', token)
        .expect(200);
      expect(data.body).toEqual(expectation);  
    });

  });
});
