const chillTemprs = [
  'Gentle',
  'Calm',
  'Reserved',
  'Even',
  'Tempered',
  'Sweet-tempered',
  'Quiet',
  'Aloof',
  'Dignified',
  'Docile',
  'Patient',
  'Steady',
  'Reliable',
  'Familial'
];

const hyperTemprs = [
  'Alert',
  'Playful',
  'Energetic',
  'Active',
  'Lively',
  'Outgoing',
  'Spirited',
  'Agile',
  'Willed',
  'Responsive',
  'Bold',
  'Quick',
  'Eager'
];

const beginnerTemprs = [
  'Trainable',
  'Companionable',
  'Loving',
  'Obedient',
  'Devoted',
  'Sociable',
  'Adaptable',
  'Cheerful',
  'Kind'
];

const proTemprs = [
  'Independent',
  'Confident',
  'Stubborn',
  'Sensitive',
  'Clever'
];

const guardTemprsList = [
  'Fearless',
  'Protective',
  'Courageous',
  'Strong',
  'Faithful',
  'Dominant',
  'Watchful',
  'Tenacious',
  'Hardy'
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
  let energyScore = 0;
  let difficultyScore = 0;
  let guardScore = 0;

  energyScore += userData.time_to_devote;
  energyScore += userData.activity_level;
  energyScore += userData.time_dog_at_home;
  energyScore += userData.household_size;

  difficultyScore += userData.experience_with_dogs;
  difficultyScore += userData.children_under_10;
  difficultyScore += userData.special_consideration;
  difficultyScore += userData.main_caretaker;

  guardScore += userData.other_pets;
  guardScore += userData.protective_breed;
  
  return {
    energyScore,
    difficultyScore,
    guardScore
  };
}

function getTemprsFromScores(scores) {
  let energyTemprs = [];
  let difficultyTemprs = [];
  let guardTemprs = [];
  const { energyScore, difficultyScore, guardScore } = scores;

  if (energyScore >= 9) {
    energyTemprs = energyTemprs.concat(hyperTemprs);
  } else {
    energyTemprs = energyTemprs.concat(chillTemprs);
  }

  if (difficultyScore >= 6) {
    difficultyTemprs = difficultyTemprs.concat(proTemprs);
  } else {
    difficultyTemprs = difficultyTemprs.concat(beginnerTemprs);
  }

  if (guardScore >= 3) {
    guardTemprs = guardTemprs.concat(guardTemprsList);
  }

  console.log('guardTemprs');
  console.log(guardTemprs);
  return {
    energyTemprs,
    difficultyTemprs,
    guardTemprs
  };
}

function getBreedIdsFromTemprs(temprs) {
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
  getTemprsFromScores
};