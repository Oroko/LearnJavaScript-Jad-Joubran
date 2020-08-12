/**
 * @param {object} person
 * @param {string} key
 * 
 */

 const getDynamicKey = (person, key) => {
  return person[key]
 }

 const person = {
   age:18,
   first_name: "Abel",
   last_name:"Gechure"
 }



console.log(getDynamicKey(person, "age"))
console.log(getDynamicKey(person, "first_name"))