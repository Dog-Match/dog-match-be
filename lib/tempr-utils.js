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

  let energyQuery = ''
  while(i < energyTemprs.length) {
    energyQuery += `breed_id=$${i} OR `;
    i++;
  }
  energyQuery.slice(0, -4); //remove trailing ' OR '
  energyQuery = `(${energyQuery})`; //add parenthesis
  energyQuery += ' AND ';

  query += energyQuery

  let difficultyQuery = '';
  while(i < energyTemprs.length + difficultyTemprs.length) {
    difficultyQuery += `breed_id=${i} OR `;
    i++;
  }
  difficultyQuery.slice(0, -4); //remove trailing ' OR '
  difficultyQuery = `(${difficultyQuery})`; //add parenthesis

  query += difficultyQuery;

  let guardQuery = '';
  if(guardTemprs.length > 0) {
    quardQuery += ' AND ';
    while(i < energyTemprs.length + difficultyTemprs.length + guardTemprs.length) {
      quardQuery += `breed_id=${i} OR `;
      i++;
    }
    quardQuery.slice(0, -4); //remove trailing ' OR '
    quardQuery = `(${quardQuery})`; //add parenthesis
  }

  query += qu

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
