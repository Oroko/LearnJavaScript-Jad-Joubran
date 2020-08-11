/**
 * @param {string} word
 */

 function capitalize(word){
   
   return word[0].toUpperCase() + word.substring(1).toLowerCase()
 }

 console.log(capitalize("aBel"))