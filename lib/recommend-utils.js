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

//This makes testing easier
function injectTemprLists(lists) {
  chillTemprs = lists.chillTemprs;
  hyperTemprs = lists.hyperTemprs;
  beginnerTemprs = lists.beginnerTemprs;
  proTemprs = lists.proTemprs;
  guardTemprsList = lists.guardTemprs;
}

//Reverts what injectTemprLists has done
function resetTemprsLists() {
  const lists = defaultTemprs;
  injectTemprLists(lists);
}

//This makes testing easier
function injectBreedTemprs(temprs) {
  breedTemprs = temprs;
}

//reset to normal breedTemprs
function resetBreedTemprs() {
  breedTemprs = defaultBreedTemprs;
}

//Tally up three main criteria for filtering
//into three scores based on the quiz questions.
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

  //TODO: Remove after testing
  console.log(energyTemprs);
  console.log(difficultyTemprs);
  console.log(guardTemprs);

  //filter all breeds by temperament.
  const results = breedTemprs.filter(tempr => {
    const temprsList = tempr.temprs;
    let hasAnEnergyTempr = false;
    let hasADifficultyTempr = false;

    //determine if this breed has at least one matching
    //temperament from the energyTemprs list.
    for(let i = 0; i < energyTemprs.length; i++) {
      if(temprsList.includes(energyTemprs[i])) {
        hasAnEnergyTempr = true;
        break;
      }
    }
    //this breed doesn't the correct level of energy,
    //remove it from the results.
    if(!hasAnEnergyTempr) return false;

    //determine if this breed has at least one matching
    //temperament from the difficultyTemprs list.
    for(let i = 0; i < difficultyTemprs.length; i++) {
      if(temprsList.includes(difficultyTemprs[i])) {
        hasADifficultyTempr = true;
        break;
      }
    }
    //this breed isn't the correct level of difficulty,
    //remove it from the results.
    if(!hasADifficultyTempr) return false;

    //if any guardTemprs were specified:
    if(guardTemprs.length > 0) {
      //determine if this breed has at least one matching
      //temperament from the guardTempr list.
      let hasAGuardTempr = false;
      for(let i = 0; i < guardTemprs.length; i++) {
        if(temprsList.includes(guardTemprs[i])) {
          hasAGuardTempr = true;
          break;
        }
      }
      //This breed isn't suitable as a guard dog
      //remove it from the list.
      if(!hasAGuardTempr) {
        return false;
      }
      //This breed passed all three criteria,
      //keep it in the list.
      return true;
    } else {
      //This breed passed the two specified criteria
      //(guard wasn't specified), keep it in the list.
      return true;
    }
  });

  //return the filtered breed names.
  return results.map(tempr => tempr.name);
}

function getRecommendations(userData) {
  const scores = getScoresFromProfile(userData);
  const temprs = getTemprsFromScores(scores);
  const breedNames = getRecommendFromTemprs(temprs);
  return breedNames;
}

module.exports = {
  getScoresFromProfile,
  getTemprsFromScores,
  getRecommendFromTemprs,
  getRecommendations,
  resetTemprsLists,
  injectTemprLists,
  injectBreedTemprs,
  resetBreedTemprs
};

