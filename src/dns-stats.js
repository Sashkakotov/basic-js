const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
  domains = [
   'code.yandex.ru',
   'music.yandex.ru',
   'yandex.ru'
  ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
  function getDNSStats(domains) {
    let map = domains
      .map((el) => el.split(".").reverse().map((al)=>`.${al}`))
    let mapFlat=map.flat(1)
  
   
    let sum={}
     for(let el of map){
       let s='' 
                 
       for(al of el){
         s+=al
                sum[s]=sum[s]?sum[s]+1:1
        
       }
     }
    
           return sum
  }
let domains = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];
getDNSStats(domains);
module.exports = {
  getDNSStats,
};
