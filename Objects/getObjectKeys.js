/**
 * @param {object} person
 */

 const getObjectKeys = (person) => {
  return Object.keys(person)
 }

 const person = {
   age:18,
   first_name:"Jennifer",
   last_name:"Doe"
 }

 console.log(getObjectKeys(person))