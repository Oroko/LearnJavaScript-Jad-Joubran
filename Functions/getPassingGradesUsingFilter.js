/**
 * @param {array} grades 
 */

 const getPassingGrades = grades => {
   return grades.filter(grade => grade >= 10)
 }

 console.log(getPassingGrades([15,8,13]))