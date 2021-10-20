const express = require('express');
const cors = require('cors');
const client = require('./client.js');
const app = express();
const morgan = require('morgan');
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');
const request = require('superagent');
const { getScoresFromProfile,
  getTemprsFromScores,
  getRecommendFromTemprs
} = require('./recommendations-utils.js');
const getBreedByName = require('./thedogapi-utils');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

const authRoutes = createAuthRoutes();

// setup authentication routes to give user an auth token
// creates a /auth/signin and a /auth/signup POST route. 
// each requires a POST body with a .email and a .password
app.use('/auth', authRoutes);

// everything that starts with "/api" below here requires an auth token!
app.use('/api', ensureAuth);

// and now every request that has a token in the Authorization header will have a `req.userId` property for us to see who's talking
app.get('/api/test', (req, res) => {
  res.json({
    message: `in this proctected route, we get the user's id like so: ${req.userId}`
  });
});

app.get('/favorites', async(req, res) => {
  try {
    const data = await client.query('SELECT * from favorites');
    
    res.json(data.rows);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/recommendations', async(req, res) => {
  try {
    const data = await client.query(`
      SELECT * FROM users
      WHERE id = $1
    `, [req.userId]);
    const user = data.rows[0];
    const scores = getScoresFromProfile(user);
    const temprs = getTemprsFromScores(scores);
    const names = getRecommendFromTemprs(temprs);
    const breeds = await Promise.all(names.map(async name => {
      const breed = await getBreedByName(name);
      return breed;
    }));
    res.json(breeds);
  } catch(e) {
    res.status(500);
  }
});

// Get User Profile
app.get('/api/profile', async(req, res) => {
  try {
    const data = await client.query('SELECT * from users WHERE id=$1', [req.userId]);    
    res.json(data.rows);
  } catch(e) {    
    res.status(500).json({ error: e.message });
  }
});

// Create User Profile
app.put('/api/profile', async(req, res) => {
  try {
    console.log(req.body);
    const profile = req.body.profile;
    const data = await client.query(`UPDATE users 
    SET user_name=$1 , time_to_devote=$2, activity_level=$3, time_dog_at_home=$4, experience_with_dogs=$5, dwelling_size=$6, household_size=$7, children_under_10=$8, special_consideration=$9, main_caretaker=$10, other_pets=$11, protective_breed=$12, state=$13, zipcode=$14
    WHERE id=$15`,
    [profile.user_name, profile.time_to_devote, profile.activity_level, profile.time_dog_at_home, profile.experience_with_dogs, profile.dwelling_size, profile.household_size, profile.children_under_10, profile.special_consideration, profile.main_caretaker, profile.other_pets, profile.protective_breed, profile.state, profile.zipcode, req.userId]);
    
    res.json(data.rows);

  } catch(e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
});

// Update Profile (put)

app.use(require('./middleware/error'));

app.get('/api/breed-details/:breed_name', async(req, res)=> {
  try{
    const breed = await getBreedByName(req.params.breed_name);
    res.json(breed); 
  }catch(e){
    res.status(500);
  }
});
app.use(require('./middleware/error'));



app.get('/api/favorites', async(req, res)=> {
  try{
    const favorite = await client.query(`
    SELECT * FROM favorites
    WHERE user_id = $1 
    RETURNING *; 
    `, [req.userId]);

    res.json(favorite.rows); 
  }catch(e){
    res.status(500);
  }
});
app.use(require('./middleware/error'));


app.post('/api/favorites', async(req, res) => {
  try {
    const favorite = await client.query(`
      INSERT INTO favorites (breed_name, owner_id)
      VALUES ($1, $2) Returning *
    `, [req.body.breed_name, req.userId]);
    
    res.json(favorite.rows);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/favorites/:breed_name', async(req, res) => {
  try {
    const data = await client.query(`
    DELETE from favorites 
    WHERE favorite_id=$1 RETURNING *
    `, [req.params.id]);

    res.json(data.rows[0]);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});

/*
app.get('/test', async (req, res) => {
  try {
    const temprs = getTemprsFromScores({
      energyScore: 3,
      difficultyScore: 6,
      guardScore: 0
    });
    const ids = getBreedIdsFromTemprs(temprs);
    const breeds = await Promise.all(ids.map(async name => {
      const breed = await getBreedByName(name);
      return breed;
    }));

    //console.log(ids);
    res.json(breeds);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});
*/

app.get('/api/search-breeds', async(req, res) => {
  try{
    const response = await request.get(`https://api-dog-breeds.herokuapp.com/api/search?q=${req.query.q}`);
    res.json(response.body); 
  }catch(e){
    res.status(500);
  }
});
app.use(require('./middleware/error'));

module.exports = app;