const request = require('superagent');
const { getAdoptionsLinkForBreed } = require('./petfinder-utils.js');

async function getImageUrl(imageId) {
  const response = await request
    .get(`https://api.thedogapi.com/v1/images/${imageId}`)
    .set('x-api-key', process.env.DOG_API);
  return response.body.url;
}

async function getBreedByName(name, state, zipcode) {
  const response = await request 
    .get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${process.env.DOG_API}`);

  const breedData = response.body[0];
  breedData.imgUrl = await getImageUrl(breedData.reference_image_id);
  breedData.adoptionLink = getAdoptionsLinkForBreed(state, zipcode, name);
  return breedData;
}

async function getBreedsByNames(breedNames, state, zipcode) {
  return await Promise.all(breedNames.map(async name => await getBreedByName(name, state, zipcode)));
} 

module.exports = {
  getBreedByName,
  getBreedsByNames
};