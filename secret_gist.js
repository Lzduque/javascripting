var repeatNumbers = function(data) {
  var result = "";
  for (var i = 0 ; i < data.length ; i++) {
    var a = data[i][0];
    var b = data[i][1];
    for (var j = 0 ; j < b ; j++) {
    result = result + a;
    }
    if (i < data.length - 1) {
    result = result + ", ";
    }
  }
  return result;
}

console.log(repeatNumbers([[1, 10]]));
// 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]]));
// 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
// 10101010, 343434343434, 9292

