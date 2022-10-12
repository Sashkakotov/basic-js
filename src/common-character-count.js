const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let one=s1.split('')
  let two=s2.split('')
  let count=0
  for(let i=0;i<one.length;i++){
    for(let k=0;k<two.length;k++){
      if(one[i]===two[k]){
        count=count +1
        
        two.splice(k,1)
        
        console.log("one",one)
        console.log("two",two)
        console.log(count)
        break;
      }
    }
  }
  console.log(count)
  return count
}
 let s1="aabcc"
 let s2 ="adcaa"
console.log( getCommonCharacterCount(s1,s2))
module.exports = {
  getCommonCharacterCount
};
