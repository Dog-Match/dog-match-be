const client = require('./client.js');

async function ensureProfile(req, res) {
  try {
    console.log(req.userId);
    const data = await client.query(`
        SELECT * FROM users
        WHERE id=$1
      `, [req.userId]);

    if(!data.rows[0]) {
      res.status(401).json({ error: 'fill out profile first' });
      return false;
    }
    console.log(data.rows[0]);
    const {
      user_name,
      time_to_devote,
      activity_level,
      time_dog_at_home,
      experience_with_dogs,
      dwelling_size,
      household_size,
      children_under_10,
      special_consideration,
      main_caretaker,
      other_pets,
      protective_breed,
      state,
      zipcode
    } = data.rows[0];

    if (
      user_name !== null &&
      time_to_devote > -1 &&
      activity_level > -1 &&
      time_dog_at_home > -1 &&
      experience_with_dogs > -1 &&
      dwelling_size > -1 &&
      household_size > -1 &&
      children_under_10 > -1 &&
      special_consideration > -1 &&
      main_caretaker > -1 &&
      other_pets > -1 &&
      protective_breed > -1 &&
      state !== null &&
      zipcode !== null
    ) {
      //all profile questions are answered, allow endpoint to continue
      req.userProfile = data.rows[0];
      return true;
    }
    //the user needs to answer some questions, redirect to form
    res.status(401).json({ error: 'fill out profile first' });
    return false;
  } catch (e) {
    res.status(500).json({ error: e.message });
    return false;
  }
}

module.exports = {
  ensureProfile
};