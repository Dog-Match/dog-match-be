const { breedTemprs: defaultBreedTemprs } = require('../data/breed_temprs.js');
let breedTemprs = defaultBreedTemprs;
const defaultTemprs = require('../data/tempr_categories.js');
let {
  chillTemprs,
  hyperTemprs,
  beginnerTemprs,
  proTemprs,
  guardTemprs: guardTemprsList
} = defaultTemprs;

// WOW SO COOL! It does seem to me that a lot of this work could probably have been done using jest's built-in mocking/rewiring tools, but it's so awesome that you tackled this complex mutability task here!
/*
 * Mocking functions for testing
 */

//Replaces the temprs lists that getTemprsFromScores uses
function injectTemprLists(lists) {
  chillTemprs = lists.chillTemprs;
  hyperTemprs = lists.hyperTemprs;
  beginnerTemprs = lists.beginnerTemprs;
  proTemprs = lists.proTemprs;
  guardTemprsList = lists.guardTemprs;
}

//reset to normal temprs lists
function resetTemprsLists() {
  const lists = defaultTemprs;
  injectTemprLists(lists);
}

//Replaces the breedTemprs data that getRecommendTemprs uses
function injectBreedTemprs(temprs) {
  breedTemprs = temprs;
}

//reset to normal breedTemprs
function resetBreedTemprs() {
  breedTemprs = defaultBreedTemprs;
}

/*
 * END Mocking functions for testing
 */

function getSum (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0); 
}

//Tally up three main criteria for filtering
//into three scores based on the quiz questions.
function getScoresFromProfile({
  time_to_devote, 
  activity_level, 
  time_dog_at_home, 
  household_size,
  experience_with_dogs,
  children_under_10,
  special_consideration,
  main_caretaker,  
  other_pets,
  protective_breed
}) {  
  // not sure if this way is better, but it's at least immutable! :shrug:
  return {
    energyScore: getSum([
      time_to_devote, 
      activity_level, 
      time_dog_at_home, 
      household_size
    ]),
    difficultyScore: getSum([
      experience_with_dogs,
      children_under_10,
      special_consideration,
      main_caretaker,  
    ]),
    guardScore: getSum([
      other_pets,
      protective_breed
    ])
  };
}

//Use the three scores to generate
//three lists of suitable temperaments.
function getTemprsFromScores(scores) {
  let energyTemprs = [];
  let difficultyTemprs = [];
  let guardTemprs = [];
  const { energyScore, difficultyScore, guardScore } = scores;

  if (energyScore >= 9) {
    energyTemprs = hyperTemprs;
  } else {
    energyTemprs = chillTemprs;
  }

  if (difficultyScore >= 6) {
    difficultyTemprs = proTemprs;
  } else {
    difficultyTemprs = beginnerTemprs;
  }

  if (guardScore >= 3) {
    guardTemprs = guardTemprsList;
  }

  return {
    energyTemprs,
    difficultyTemprs,
    guardTemprs
  };
}

/*
 * Finds all breed names where:
 *   breed has any of the specified energyTemprs AND
 *   breed has any of the specified difficultyTemprs AND
 *   if guardTemprs.length > 0:
 *     breed has any of the specified guardTemprs
 * 
 * 
 * temprs format:
 * 
 * temprs = {
 *   energyTemprs: ['tempr1', 'tempr2'], //must be a non empty array
 *   difficultyTemprs: ['tempr3', 'tempr4'], //must be a non empty array
 *   guardTemprs: ['tempr5', 'tempr6'] //must be an array, can be empty
 * }
 * 
 */
function getRecommendFromTemprs(temprs) {
  const {
    energyTemprs,
    difficultyTemprs,
    guardTemprs
  } = temprs;

  //filter all breeds by temperament.
  return breedTemprs.filter(tempr => {
    const breedTemprs = tempr.temprs;
    //determine if this breed has at least one matching
    //temperament from the energyTemprs list.
    const hasAnEnergyTempr = !!energyTemprs
      .find(item => breedTemprs.includes(item));
    //this breed doesn't have the correct level of energy,
    //remove it from the results.
    if(!hasAnEnergyTempr) return false;
    //determine if this breed has at least one matching
    //temperament from the difficultyTemprs list.

    const hasADifficultyTempr = !!difficultyTemprs
      .find(item => breedTemprs.includes(item));

    //this breed isn't the correct level of difficulty,
    //remove it from the results.
    if(!hasADifficultyTempr) return false;

    //if any guardTemprs were specified:
    const hasAGuardTempr = !!guardTemprs
      .find(item => breedTemprs.includes(item));

    //This breed isn't suitable as a guard dog
    //remove it from the list.
    if(!hasAGuardTempr) return false;
  
    //This breed passed all three criteria,
    //keep it in the list.
    return true;
  })
    .map(tempr => tempr.name);
}

function getRecommendations(userData) {
  const scores = getScoresFromProfile(userData);
  const temprs = getTemprsFromScores(scores);
  const breedNames = getRecommendFromTemprs(temprs);
  return breedNames;
}


