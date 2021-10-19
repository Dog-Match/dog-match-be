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
 *   if guardTemprs are specified:
 *     breed has any of the specified guardTemprs
 * 
 */
function getBreedIdsFromTemprs(temprs) {
  const {
    energyTemprs,
    difficultyTemprs,
    guardTemprs
  } = temprs;

  const allTemprs = [...energyTemprs, ...difficultyTemprs, ...guardTemprs];

  let query = '';
  let i = 0;
  while(i < energyTemprs.length) {
    query += `breed_id=$${i} OR `;
    i++;
  }
  query.slice(0, -4); //remove trailing ' OR '
  query = `(${query})`; //add parenthesis
  query += ' AND ';

  while(i < energyTemprs.length + difficultyTemprs.length) {
    query += `breed_id=${i} OR `;
    i++;
  }
  query.slice(0, -4); //remove trailing ' OR '
  query = `(${query})`; //add parenthesis

  if(guardTemprs.length > 0) {
    query += ' AND ';
    while(i < energyTemprs.length + difficultyTemprs.length + guardTemprs.length) {
      query += `breed_id=${i} OR `;
      i++;
    }
    query.slice(0, -4); //remove trailing ' OR '
    query = `(${query})`; //add parenthesis
  }

  query = `
    SELECT * FROM temprs
    WHERE ${query}
    RETURNING *;
  `  

  console.log(query);
}

getBreedIdsFromTemprs({
  energyTemprs: ['abc', '123'],
  difficultyTemprs: ['abc', '123'],
  guardTemprs: ['abc', '123']
});

module.exports = {
  getBreedIdsFromTemprs
};
