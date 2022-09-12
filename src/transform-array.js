const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  let array=[]
  if(Array.isArray(arr)===false){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if (arr  === undefined || arr === null || arr === false) {
    throw Error("'arr' parameter must be an instance of the Array!")}
     if (arr.length === 0) {
      return []
    }

for(let i=0;i<arr.length;i++){

  if (arr[i] === "--discard-next") {
    if (i === arr.length-1) {} else {
    i+=2;
  }}
  else if (arr[i] === "--discard-prev") {
    if (i === 0) {} else {
      array.pop();
    }
  } 
  else if (arr[i] === "--double-next") 
  if (i === arr.length-1) {} else {
    array.push(arr[i+1]);
      }
  else if (arr[i] === "--double-prev") {
    if (i === 0) {} else {
      array.push(arr[i-1]);
  }
  } 
  else {
    array.push(arr[i]);
  }
}

return array
}
// console.log(transform([1, 2, 3, '--double-next', 4, 5]))
module.exports = {
  transform
};
