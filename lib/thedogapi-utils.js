const request = require('superagent');




async function getBreedByName () {
  const response = await request 
    .get('https://api.thedogapi.com/v1/breeds?api_key=a72ab01b-3a81-4b0c-bb6d-e654408dd6e3');

  return response;
}