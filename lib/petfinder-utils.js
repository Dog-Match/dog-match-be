const request = require('superagent');

let token = undefined;

async function getToken() {
  const resp = await request.post('https://api.petfinder.com/v2/oauth2/token')
    .send('grant_type=client_credentials')
    .send(`client_id=${process.env.PETFINDER_ID}`)
    .send(`client_secret=${process.env.PETFINDER_SECRET}`);
  return resp.body.access_token;
}

//Don't use this, use getDogs()
async function getPetFinderResponse(breed, location, page, limit, optionsObj) {
  let optionalQueries = '';
  if (optionsObj) {
    //Is this lazy or cool? I can't tell.
    Object.keys(optionsObj).forEach(key => optionalQueries += `&${key}=${optionsObj[key]}`);
  }
  const response = await request.get('https://api.petfinder.com/v2/animals?type=dog')
    .query('breed=' + breed)
    .query('location=' + location)
    .query('page=' + page)
    .query('limit=' + limit + optionalQueries)
    .set('Authorization', 'Bearer ' + token);
  return response;
}

/*
 * 
 * breed:     string  
 * location:  string   city, state OR latitude,longitude OR postal code.
 * page:      number   pagination page
 * limit:     number   max number of results to get, default 20, max 100
 * 
 * optionsObj: Object  optional search criteria, objects with missing properties are accepted
 * const optionsObj = {
 *   size:                Can be 'small', 'medium', 'large', 'xlarge' or combinations (like 'xlarge,small', note the absence of a space)
 *   age:                 Can be 'baby', 'young', 'adult', 'senior' or combinations
 *   coat:                Can be 'short', 'medium', 'long', 'wire', 'hairless', 'curly' or combinations
 *   good_with_children   Can be true, false, 1, or 0
 *   good_with_dogs       Can be true, false, 1, or 0
 *   good_with_cats       Can be true, false, 1, or 0
 * }
*/
async function getDogs(breed, location, page, limit, optionsObj) {
  let response = null;
  try {
    response = await getPetFinderResponse(breed, location, page, limit, optionsObj);
  } catch(e) {
    if(e.status === 401) {
      //unauthorized, hopefully the token just expired
      token = await getToken();
      response = await getPetFinderResponse(breed, location, page, limit, optionsObj);
    } else {
      throw e;
    }
  }
  return response.body.animals;
}

function getAdoptionsLinkForBreed(state, zipCode, breedName) {
  return `https://www.petfinder.com/search/dogs-for-adoption/us/${state}/${zipCode}/?breed[0]=${breedName}`;
}

module.exports = {
  getDogs,
  getAdoptionsLinkForBreed
};