/**
 * @param {object} person
 */

const getPersonFirstName=(person => {
  return person.name.first + ' ' + person.name.last
})

const person = {
 age:18,
 name: {
   first:"Jennifer",
   last: "Doe"
 }
}

console.log(getPersonFirstName(person))

