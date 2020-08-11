//Complete the function such that it returns a string of all people's names, separated by a comma and a space.

/**
 * @param {arrays} people
 */

 const getNameString = people => {
   return people.join(', ')
 }

 console.log(getNameString(['John','Jennifer','Liham']))