/**
 * @param {object} person
 */

const getObjectValues = (person) => {
  return Object.values(person)
 }

 const person = {
   age:18,
   first_name:"Jennifer",
   last_name:"Doe"
 }

 console.log(getObjectValues(person))