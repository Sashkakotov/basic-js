const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
 let aa=str.split('')
 let count=1
 let res=[]
 for(let i=0;i<aa.length;i++){
  
  if(aa[i]===aa[i+1]){
count ++
  }else{
res.push(count>1?`${count}${aa[i]}`:aa[i])
count =1
  }
 }
 return res.join('')
}

module.exports = {
  encodeLine
};
