const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let str1=String(str)
  let option=options.addition
  if( option !==undefined){
    option=String(option)
  }
    let addition=option || ''
    let additionRepeatTimes=options.additionRepeatTimes|| 1
  let additionSeparator=options.additionSeparator|| '|'
let repeatTimes=options.repeatTimes|| 1
let separator=options.separator|| '+'
  return Array(repeatTimes).fill(str1+Array(additionRepeatTimes).fill(addition).join(additionSeparator)).join(separator)
}

module.exports = {
  repeater
};
