const express = require('express');
const cors = require('cors');
const client = require('./client.js');
const app = express();
const morgan = require('morgan');
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');
const request = require('superagent');
const { getRecommendations } = require('./recommend-utils.js');
const {
  getBreedByName,
  getBreedsByNames
} = require('./thedogapi-utils');
const { ensureProfile } = require('./ensure-profile.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

const authRoutes = createAuthRoutes();

app.use('/auth', authRoutes);
app.use('/api', ensureAuth);
app.get('/api/test', (req, res) => {
  res.json({
    message: `in this protected route, we get the user's id like so: ${req.userId}`
  });
});

// Get the recommended breeds for a user
app.get('/api/recommendations', async(req, res) => {
  try {
    const userProfile = ensureProfile;
    if(!userProfile) return;
    const breedNames = getRecommendations(userProfile);
    const breeds = await getBreedsByNames(breedNames, userProfile.state, userProfile.zipcode);
    res.json(breeds);
  } catch(e) {
    res.status(500);
  }
});

// GET User Profile
app.get('/api/profile', async(req, res) => {
  try {
    const data = await client.query('SELECT * from users WHERE id=$1', [req.userId]);    
    res.json(data.rows);
  } catch(e) {    
    res.status(500).json({ error: e.message });
  }
});

// PUT (Update) User Profile
app.put('/api/profile', async(req, res) => {
  try {
    const profile = req.body.profile;
    const data = await client.query(`UPDATE users 
    SET user_name=$1 , time_to_devote=$2, activity_level=$3, time_dog_at_home=$4, experience_with_dogs=$5, dwelling_size=$6, household_size=$7, children_under_10=$8, special_consideration=$9, main_caretaker=$10, other_pets=$11, protective_breed=$12, state=$13, zipcode=$14
    WHERE id=$15
    RETURNING *;`,
    [profile.user_name, profile.time_to_devote, profile.activity_level, profile.time_dog_at_home, profile.experience_with_dogs, profile.dwelling_size, profile.household_size, profile.children_under_10, profile.special_consideration, profile.main_caretaker, profile.other_pets, profile.protective_breed, profile.state, profile.zipcode, req.userId]);
    res.json(data.rows[0]);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// GET Breed Details
app.get('/api/breed-details/:breed_name', async(req, res)=> {
  try{
    const userProfile = ensureProfile(req, res);
    if(!userProfile) return;
    let breed = await getBreedByName(req.params.breed_name, userProfile.state, userProfile.zipcode);
    breed.height = breed.height.imperial + ' inches.';
    breed.weight = breed.weight.imperial + ' pounds.';
    res.json(breed); 
  }catch(e){
    res.status(500);
  }
});

// GET Favorites
app.get('/api/favorites', async(req, res)=> {
  try{
    if(!ensureProfile(req, res)) return;
    const resp = await client.query(`
    SELECT breed_name FROM favorites
    WHERE owner_id = $1 
    `, [req.userId]);

    const userProfile = req.userProfile; //this is attached by ensureProfile;
    const names = resp.rows.map(obj => obj.breed_name);
    const breedData = await getBreedsByNames(names, userProfile.state, userProfile.zipcode);
    res.json(breedData); 
  }catch(e){
    res.status(500);
  }
});

// POST Favorites
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

// DELETE Favorites
app.delete('/api/favorites/:breed_name', async(req, res) => {
  try {
    const data = await client.query(`
    DELETE from favorites 
    WHERE breed_name=$1 RETURNING *
    `, [req.params.breed_name]);

    res.json(data.rows[0]);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});


// GET Breed
app.get('/api/search-breeds', async(req, res) => {
  try{
    const response = await request.get(`https://api-dog-breeds.herokuapp.com/api/search?q=${req.query.q}`);
    let breed = response.body.filter(breed => breed.breedName.toLowerCase() === req.query.q.toLowerCase())[0];
    if(!breed){
      breed = response.body[0];
    }
    res.json(breed); 
  }catch(e){
    res.status(500);
  }
  
});

app.use(require('./middleware/error'));

module.exports = app;
