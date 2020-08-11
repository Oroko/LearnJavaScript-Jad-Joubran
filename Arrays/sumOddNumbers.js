/**
 * @param {array} numbers
 */
function sumOddNumbers(numbers){
  let sum = 0;
  numbers.forEach(function(number){
      if(number % 2 !== 0){
          sum += number
      }
  })
  return sum;
}

//sample usage
console.log(sumOddNumbers([15, -5, 10]));
