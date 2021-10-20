const request = require('superagent');

async function getBreedByName(name) {
  const response = await request 
    .get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${process.env.DOG_API}`);

  return response.body[0];
}

async function getBreedsByNames(breedNames) {
  return await Promise.all(breedNames.map(async name => await getBreedByName(name)));
}

module.exports = {
  getBreedByName,
  getBreedsByNames
};