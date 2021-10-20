/* eslint-disable */
const client = require('./client.js');
const { temprData } = require('./temprData.js');

function makeOrQuery(temprs, argIndexStart) {
  let i = argIndexStart;
  
  return { query, i };
}

/*
 * Finds all breed ids where:
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
async function OLDgetBreedIdsFromTemprs(temprs) {
  const {
    energyTemprs,
    difficultyTemprs,
    guardTemprs
  } = temprs;

  /* This function has to generate the sql query.
   *
   * For an input of:
   * {
   *   energyTemprs: ['abc', '123'],
   *   difficultyTemprs: ['abcd', '1234'],
   *   guardTemprs: ['abcde', '12345']
   * }
   * 
   * It will generate:
   * 
   * SELECT * FROM temprs
   * WHERE (breed_id=$0 OR breed_id=$1) AND (breed_id=$2 OR breed_id=$3) AND (breed_id=$4 OR breed_id=$5)
   * RETURNING *;
   *
   * [ 'abc', '123', 'abcd', '1234', 'abcde', '12345' ]
   * 
   * I couldn't come up with a cleaner way to write this function.
   * The generation of the ( asdf OR asdf ) stuff can't be split up
   * because the $1, $2 needs to increment across the three tempr arrays,
   * so they can't be done in individual for loops.
   */

  const allTemprs = [...energyTemprs, ...difficultyTemprs, ...guardTemprs];

  let query = '';
  let i = 0;

  let energyQuery = ''
  while(i < energyTemprs.length) {
    energyQuery += `tempr_name=$${i+1} OR `;
    i++;
  }
  energyQuery = energyQuery.slice(0, -4); //remove trailing ' OR '
  energyQuery = `(${energyQuery})`; //add parenthesis
  energyQuery += ' AND ';
  query += energyQuery

  let difficultyQuery = '';
  while(i < energyTemprs.length + difficultyTemprs.length) {
    difficultyQuery += `tempr_name=$${i+1} OR `;
    i++;
  }
  
  difficultyQuery = difficultyQuery.slice(0, -4); //remove trailing ' OR '
  difficultyQuery = `(${difficultyQuery})`; //add parenthesis
  query += difficultyQuery;

  let guardQuery = '';
  if(guardTemprs.length > 0) {
    while(i < energyTemprs.length + difficultyTemprs.length + guardTemprs.length) {
      guardQuery += `tempr_name=$${i+1} OR `;
      i++;
    }
    guardQuery = guardQuery.slice(0, -4); //remove trailing ' OR '
    guardQuery = `(${guardQuery})`; //add parenthesis
    guardQuery = ' AND ' + guardQuery;
  }

  query += guardQuery;
  query = `
    SELECT * from temprs
    WHERE ${query}
  `;
  
  const resp = await client.query(query, allTemprs);
  return resp;
}

function getBreedIdsFromTemprs(temprs) {
  const {
    energyTemprs,
    difficultyTemprs,
    guardTemprs
  } = temprs;

  console.log(energyTemprs);
  console.log(difficultyTemprs);
  console.log(guardTemprs);

  const results = temprData.filter(tempr => {
    const temprsList = tempr.temprs;
    let hasAEnergyTempr = false;
    let hasADifficultyTempr = false;

    for(let i = 0; i < energyTemprs.length; i++) {
      if(temprsList.includes(energyTemprs[i])) {
        hasAEnergyTempr = true;
        break;
      }
    }
    if(!hasAEnergyTempr) return false;

    for(let i = 0; i < difficultyTemprs.length; i++) {
      if(temprsList.includes(difficultyTemprs[i])) {
        hasADifficultyTempr = true;
        break;
      }
    }
    if(!hasADifficultyTempr) return false;

    if(guardTemprs.length > 0) {
      let hasAGuardTempr = false;
      for(let i = 0; i < guardTemprs.length; i++) {
        if(temprsList.includes(guardTemprs[i])) {
          hasAGuardTempr = true;
          break;
        }
      }
      if(!hasAGuardTempr) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  });

  return results.map(tempr => tempr.id);
}

// let a = getBreeds({
//   energyTemprs: ['Intelligent'],
//   difficultyTemprs: ['Confident'],
//   guardTemprs: []
// });

// console.log(a);

module.exports = {
  getBreedIdsFromTemprs,
};
