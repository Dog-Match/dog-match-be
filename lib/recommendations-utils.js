const chillTemps = [
  'gentle',
  'calm',
  'reserved',
  'even',
  'tempered',
  'sweet-tempered',
  'quiet',
  'aloof',
  'dignified',
  'docile',
  'patient',
  'steady',
  'reliable',
  'familial'
];

const hyperTemps = [
  'alert',
  'playful',
  'energetic',
  'active',
  'lively',
  'outgoing',
  'spirited',
  'agile',
  'willed',
  'responsive',
  'bold',
  'quick',
  'eager'
];

const beginnerTemps = [
  'trainable',
  'companionable',
  'loving',
  'obedient',
  'devoted',
  'sociable',
  'adaptable',
  'cheerful',
  'kind'
];

const proTemps = [
  'independent',
  'confident',
  'stubborn',
  'sensitive',
  'clever'
];

const guardTemps = [
  'intelligent',
  'fearless',
  'protective',
  'courageous',
  'strong',
  'faithful',
  'keen',
  'dominant',
  'watchful',
  'tenacious',
  'hardy',
  'attentive'
];

const friendlyTemps = [
  'affectionate',
  'friendly',
  'happy'
];

/*
const results = {
 energyScore: <number>,
 crazyScore: <number>,
 guardScore: <number>,
 hasCats: <boolean>,
 hasDogs: <boolean>,
 hasKids: <boolean>,
 location: <string> //Can be city, state OR lat, lon OR zip code
};
*/

function getResults
function getTemperamentsFromResults(energyScore, crazyScore, guardScore) {
  let temps = [];

  if (energyScore >= 9) {
    temps = temps.concat(hyperTemps);
  } else {
    temps = temps.concat(lazyTemps);
  }

  if (crazyScore >= 6) {
    temps = temps.concat(crazyTemps);
  } else {
    temps = temps.concat(chillTemps);
  }

  if (guardScore >= 3) {
    temps = temps.concat(guardTemps);
  } else {
    temps = temps.concat(socialtemps);
  }
}

function getBreedsFromTemperaments(temps) {
  //do db stuff here
}

function getDogsFromBreedsAndResults(breeds, results) {
  //TBD: how many breeds petfinder.com can handle in one query
  let optionsObj = {};
  if (results.hasCats) {
    optionsObj.good_with_cats = true;
  }
  if (results.hasDogs) {
    optionsObj.good_with_dogs = true;
  }
  if (results.hasKids) {
    optionsObj.good_with_children = true;
  }
}


