const chillTemprs = [
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

const hyperTemprs = [
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

const beginnerTemprs = [
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

const proTemprs = [
  'independent',
  'confident',
  'stubborn',
  'sensitive',
  'clever'
];

const guardTemprs = [
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

/*
results = {
 energyScore: <number>,
 crazyScore: <number>,
 guardScore: <number>,
 hasCats: <boolean>,
 hasDogs: <boolean>,
 hasKids: <boolean>,
 location: <string> //Can be city, state OR lat, lon OR zip code
};
*/

function getScoresFromProfile(userData) {
  const scores = {
    energyScore: 0,
    difficultyScore: 0,
    guardScore: 0,
  };
  scores.energyScore += userData.time_to_devote;
  scores.energyScore += userData.activity_level;
  scores.energyScore += userData.time_dog_at_home;
  scores.energyScore += userData.household_size;

  scores.difficultyScore += userData.experience_with_dogs;
  scores.difficultyScore += userData.children_under_10;
  scores.difficultyScore += userData.special_consideration;
  scores.difficultyScore += userData.main_caretaker;

  scores.guardScore += userData.other_pets;
  scores.guardScore += userData.protective_breed;
  
  return scores;
}

function getTemperamentsFromResults(scores) {
  let temps = [];
  const { energyScore, difficultyScore, guardScore } = scores;

  if (energyScore >= 9) {
    temps = temps.concat(hyperTemprs);
  } else {
    temps = temps.concat(chillTemprs);
  }

  if (difficultyScore >= 6) {
    temps = temps.concat(proTemprs);
  } else {
    temps = temps.concat(beginnerTemprs);
  }

  if (guardScore >= 3) {
    temps = temps.concat(guardTemprs);
  }

  return temps;
}

function getBreedsFromTemperaments(temprs) {
  //do db stuff here
}


/*
 * nixed unless we get to the adoptions page
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
*/

module.exports = {
  getScoresFromProfile,
  getTemperamentsFromResults,
  getBreedsFromTemperaments
};