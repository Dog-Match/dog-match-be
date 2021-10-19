/* eslint-disable */
const client = require('./client.js');

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
async function getBreedIdsFromTemprs(temprs) {
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
  console.log('bob1');

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
  
  console.log('bob2');
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
  console.log('bob3');

  query += guardQuery;
  query = `
    SELECT * from temprs
    WHERE ${query}
  `;
  
    const resp = await client.query(query, allTemprs);
    return resp;
}

module.exports = {
  getBreedIdsFromTemprs
};
