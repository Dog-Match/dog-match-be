const request = require('superagent');

async function getBreedByName (name) {
  const response = await request 
    .get(`https://api.thedogapi.com/v1/breeds?q=${name}&api_key=${process.env.DOG_API}`);

  return response.body[0];
}

module.exports = getBreedByName;