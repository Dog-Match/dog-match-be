const express = require('express');
const cors = require('cors');
const client = require('./client.js');
const app = express();
const morgan = require('morgan');
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');
const { getScoresFromProfile, getTemprsFromScores } = require('./recommendations-utils.js');
const { getBreedIdsFromTemprs } = require('./tempr-utils.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

const authRoutes = createAuthRoutes();
const getBreedById = require ('./thedogapi-utils');

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
      RETURNING *;
    `, [req.userId]);
    //Get user profile
    //convert answers into three scores
    //get temperaments based on scores
    //get breeds from temperaments
    //return breeds to user
    const user = data.rows[0];
    const scores = getScoresFromProfile(user);
    const temprs = getTemperamentsFromScores(scores);
    //const breedIds = 
    console.log(temprs);
    res.json(temprs);
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

app.get('/api/breed-details/:breed_id', async(req, res)=> {
  try{
    const breed = await getBreedById(req.params.breed_id);
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
      INSERT INTO favorites (favorite_id, owner_id)
      VALUES ($1, $2) Returning *
    `, [req.body.favorite, req.userId]);
    
    res.json(favorite.rows);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/favorites/:id', async(req, res) => {
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

app.get('/test', async (req, res) => {
  try {
    const temprs = getTemprsFromScores({
      energyScore: 9,
      difficultyScore: 6,
      guardScore: 0
    });
    const ids = await getBreedIdsFromTemprs(temprs);
    console.log(ids.rows);
    res.json(ids.rows);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

module.exports = app;