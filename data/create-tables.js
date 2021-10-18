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
                    time_to_devote VARCHAR(256) NOT NULL,
                    activity_level VARCHAR(256) NOT NULL,
                    time_dog_at_home VARCHAR(256) NOT NULL,
                    experience_with_dogs VARCHAR(256) NOT NULL,
                    dwelling_size VARCHAR(256) NOT NULL,
                    household_size VARCHAR(256) NOT NULL,
                    children_under_10 VARCHAR(256) NOT NULL,
                    special_consideration VARCHAR(256) NOT NULL,
                    main_caretaker VARCHAR(256) NOT NULL,
                    other_pets VARCHAR(256) NOT NULL,
                    protective_breed VARCHAR(256) NOT NULL
                    
                );           
                CREATE TABLE favorites (
                    id VARCHAR(512) NOT NULL,
                    favorites VARCHAR(512) NOT NULL,
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
