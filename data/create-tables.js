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
                    user_name VARCHAR(512), 
                    email VARCHAR(256) NOT NULL,
                    hash VARCHAR(512) NOT NULL,
                    time_to_devote INTEGER DEFAULT 3,
                    activity_level INTEGER DEFAULT 3,
                    time_dog_at_home INTEGER DEFAULT 3,
                    experience_with_dogs INTEGER DEFAULT 3,
                    dwelling_size INTEGER DEFAULT 1,
                    household_size INTEGER DEFAULT 3,
                    children_under_10 INTEGER DEFAULT 1,
                    special_consideration INTEGER DEFAULT 1,
                    main_caretaker INTEGER DEFAULT 2,
                    other_pets INTEGER DEFAULT 2,
                    protective_breed INTEGER DEFAULT 2,
                    state VARCHAR(256) DEFAULT 'AL',
                    zipcode INTEGER
                );           
                CREATE TABLE favorites (
                    id SERIAL PRIMARY KEY,
                    breed_name VARCHAR(512) NOT NULL,
                    owner_id INTEGER NOT NULL REFERENCES users(id)
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
