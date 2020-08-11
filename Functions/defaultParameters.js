/**
 * @param {string} name
 */

 function sayHello(name = "user"){
   return `Hello ${name}`

 }

 console.log(sayHello("Abel"))
 console.log(sayHello())