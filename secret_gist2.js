var conditionalSum = function(values, condition) {
  var result = 0;
  for (var i = 0 ; i < values.length ; i ++) {
    if (condition === "even" && values[i] % 2 === 0) {
      result += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      result += values[i];
    } else {
      result += 0;
    }
  }
    return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
