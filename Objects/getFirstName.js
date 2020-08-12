/**
 * @param {object} person
 */

 const getPersonFirstName=(person => {
    return person.name.first
 })

 const person = {
   age:18,
   name: {
     first:"Jennifer",
     last: "Doe"
   }
 }

 console.log(getPersonFirstName(person))

 