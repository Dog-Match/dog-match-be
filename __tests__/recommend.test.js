require('dotenv').config();
const { execSync } = require('child_process');
const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');
const {
  getScoresFromProfile,
  getTemprsFromScores,
  injectTemprLists,
  resetTemprsLists,
  injectBreedTemprs,
  getRecommendFromTemprs,
  resetBreedTemprs
} = require('../lib/recommend-utils.js');

describe('recommendations route', () => {
  describe('recommend functions', () => {
    test('getScoresFromProfile tallies scores correctly', () => {
      const userData = {
        time_to_devote: 2,
        activity_level: 2,
        time_dog_at_home: 2,
        household_size: 2,
        experience_with_dogs: 1,
        children_under_10: 1,
        special_consideration: 1,
        main_caretaker: 1,
        other_pets: 3,
        protective_breed: 3
      };

      const expectation = {
        energyScore: 8,
        difficultyScore: 4,
        guardScore: 6
      };

      const actual = getScoresFromProfile(userData);
      expect(actual).toEqual(expectation);
    });

    test('getTemprsFromScores returns a hyper pro guard temprs list when appropriate', () => {
      const scores = {
        energyScore: 9,
        difficultyScore: 6,
        guardScore: 4 
      };

      const temprsLists = {
        chillTemprs: ['a', 'b', 'c'],
        hyperTemprs: ['d', 'e', 'f'],
        beginnerTemprs: ['g', 'h', 'i'],
        proTemprs: ['j', 'k', 'l'],
        guardTemprs: ['m', 'n', 'o']
      };

      const expectation = {
        energyTemprs: ['d', 'e', 'f'],
        difficultyTemprs: ['j', 'k', 'l'],
        guardTemprs: ['m', 'n', 'o']
      };

      injectTemprLists(temprsLists);
      const actual = getTemprsFromScores(scores);
      resetTemprsLists();

      expect(actual).toEqual(expectation);
    });

    test('getTemprsFromScores returns a chill beginners no-guard temprs list when appropriate', () => {
      const scores = {
        energyScore: 4,
        difficultyScore: 3,
        guardScore: 1 
      };

      const temprsLists = {
        chillTemprs: ['a', 'b', 'c'],
        hyperTemprs: ['d', 'e', 'f'],
        beginnerTemprs: ['g', 'h', 'i'],
        proTemprs: ['j', 'k', 'l'],
        guardTemprs: ['m', 'n', 'o']
      };

      const expectation = {
        energyTemprs: ['a', 'b', 'c'],
        difficultyTemprs: ['g', 'h', 'i'],
        guardTemprs: []
      };

      injectTemprLists(temprsLists);
      const actual = getTemprsFromScores(scores);
      resetTemprsLists();

      expect(actual).toEqual(expectation);
    });

    test('getRecommendFromTemprs returns breeds with matching temperaments', () => {
      const breedTemprs = [
        {
          name: 'bob',
          temprs: ['a', 'g']
        },
        {
          name: 'bob2',
          temprs: ['b', 'i']
        },
        {
          name: 'bob3',
          temprs: ['d', 'd']
        },
        {
          name: 'bob4',
          temprs: ['a', 'a']
        }
      ];

      const temprs = {
        energyTemprs: ['a', 'b', 'c'],
        difficultyTemprs: ['g', 'h', 'i'],
        guardTemprs: []
      };

      const expectation = ['bob', 'bob2'];

      injectBreedTemprs(breedTemprs);
      const actual = getRecommendFromTemprs(temprs);
      resetBreedTemprs();

      expect(actual).toEqual(expectation);
    });
  });

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
    }, 10000);

    afterAll(done => {
      return client.end(done);
    });

    test('GET /api/recommendations returns breed objects with the appropiate properties', async () => {
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

      const userData = {
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
        .send(userData)
        .set('Authorization', token)
        .expect(200);

      const getResp = await fakeRequest(app)
        .get('/api/recommendations')
        .set('Authorization', token)
        .expect(200)
        .expect('Content-Type', /json/);

      const actual = getResp.body;
      expect(actual).toEqual(expect.arrayContaining([expected]));
    });
  });
});
