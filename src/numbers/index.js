const isEven = (num) => {
  // write code for numbers.isEven
// if(num % 2 === 0) {
//   return true;
// }
//or
return num % 2 === 0 ? true : false;
}

const sum = (arr) => {
  // write code for numbers.sum
  var sum = arr.reduce(function(a,b) {
    return a + b;
  })
  return sum;
} 


const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  var total = arr.reduce(function(a,b) {
    return a + b;
  })
  if (total == sum) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}