const client = require('../lib/client');
// import our seed data:
const favorites = require('./favorites.js');
const usersData = require('./users.js');
const { temprData } = require('./temprData.js');
const { getEmoji } = require('../lib/emoji.js');

run();

async function run() {

  try {
    await client.connect();

    const users = await Promise.all(
      usersData.map(user => {
        return client.query(`
                      INSERT INTO users (email, user_name, hash, time_to_devote, activity_level, time_dog_at_home, experience_with_dogs, dwelling_size, household_size, children_under_10, special_consideration, main_caretaker, other_pets, protective_breed, state, zipcode)
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
                      RETURNING *;
                  `,
        [user.email, user.user_name, user.hash, user.time_to_devote, user.activity_level, user.time_dog_at_home, user.experience_with_dogs, user.dwelling_size, user.household_size, user.children_under_10, user.special_consideration, user.main_caretaker, user.other_pets, user.protective_breed, user.state, user.zipcode]);
      })
    );
      
    const user = users[0].rows[0];

    await Promise.all(
      favorites.map(favorite => {
        return client.query(`
                    INSERT INTO favorites (breed_id, owner_id)
                    VALUES ($1, $2);
                `,
        [favorite.breed_id, user.id]);
      })
    );

    await Promise.all(
      temprData.map(tempr => {
        return client.query(`
                    INSERT INTO temprs (breed_id, tempr_name)
                    VALUES ($1, $2);
                `,
        [tempr.breed_id, tempr.tempr]);
      })
    );
    

    console.log('seed data load complete', getEmoji(), getEmoji(), getEmoji());
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
