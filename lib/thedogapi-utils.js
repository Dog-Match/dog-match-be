const request = require('superagent');




async function getBreedById (id) {
  const response = await request 
    .get(`https://api.thedogapi.com/v1/breeds?page=${id - 1}&limit=1&api_key=${process.env.DOG_API}`);

  return response.body;
}

module.exports = getBreedById;