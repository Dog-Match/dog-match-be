const client = require('../lib/client');
const { getEmoji } = require('../lib/emoji.js');

// async/await needs to run in a function
run();

async function run() {

  try {
    // initiate connecting to db
    await client.connect();

    // run a query to create tables
    await client.query(`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    user_name VARCHAR(512) NOT NULL, 
                    email VARCHAR(256) NOT NULL,
                    hash VARCHAR(512) NOT NULL,
                    time_to_devote INTEGER NOT NULL,
                    activity_level INTEGER NOT NULL,
                    time_dog_at_home INTEGER NOT NULL,
                    experience_with_dogs INTEGER NOT NULL,
                    dwelling_size INTEGER NOT NULL,
                    household_size INTEGER NOT NULL,
                    children_under_10 INTEGER NOT NULL,
                    special_consideration INTEGER NOT NULL,
                    main_caretaker INTEGER NOT NULL,
                    other_pets INTEGER NOT NULL,
                    protective_breed INTEGER NOT NULL,
                    state VARCHAR(256) NOT NULL,
                    zipcode INTEGER NOT NULL
                );           
                CREATE TABLE favorites (
                    id VARCHAR(512) NOT NULL,
                    favorite VARCHAR(512) NOT NULL,
                    owner_id INTEGER NOT NULL REFERENCES users(id)
                );
                CREATE TABLE temprs (
                    id VARCHAR(512) NOT NULL,
                    tempr_name VARCHAR(512) NOT NULL
                );
        `);

    console.log('create tables complete', getEmoji(), getEmoji(), getEmoji());
  }
  catch(err) {
    // problem? let's see the error...
    console.log(err);
  }
  finally {
    // success or failure, need to close the db connection
    client.end();
  }

}
