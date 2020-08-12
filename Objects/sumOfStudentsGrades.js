/**
 * @param {object} student
 */

 const getTotalOfGrades = student => {
   let sum = 0;
   student.grades.forEach(grade => sum += grade)
   return sum;

 }

 const student = {
   name:"Jennifer",
   grades: [10,45,36,78,90],
   age: 17,
 }

 console.log(getTotalOfGrades(student))