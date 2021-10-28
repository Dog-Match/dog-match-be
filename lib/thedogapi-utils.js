const request = require('superagent');
const { getAdoptionsLinkForBreed } = require('./petfinder-utils.js');

// with the complexity of the data models you're working with here, I think it would be a fun project, if you ever feel like it, to rewrite all these utils/endpoints using typescript, since it seems like there's a lot of "oh wait, what's the key at this moment in time" going on here
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
  // very nice promise array!
  return await Promise.all(breedNames.map(async name => await getBreedByName(name, state, zipcode)));
} 

module.exports = {
  getBreedByName,
  getBreedsByNames
};