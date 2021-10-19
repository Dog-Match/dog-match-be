const request = require('superagent');

async function getBreedsGitAPI() {
  const response = await request 
    .get('https://api-dog-breeds.herokuapp.com/api/dogs');

  return response;
}