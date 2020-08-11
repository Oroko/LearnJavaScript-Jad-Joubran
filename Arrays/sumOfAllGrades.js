/**
 * @param {array} grades
*/
function sumGrades(grades){
    // variable that will hold the sum. We initialize it to 0 because we start counting from 0 (multiplications start from 1)
    let sum = 0;
    grades.forEach(function(grade){
        // one by one, add every grade to the `sum` variable
        sum = grade + sum;
    });
    // return from the sumGrades function. This is the result of the function
    return sum;
}