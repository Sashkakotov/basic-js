const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type=true){
this.type=type
  }
  encrypt(message,key) {
    if(!message || !key){
      throw new Error("Incorrect arguments!")
    }
   if(this.type){
let result=[]
let keyLong=key.repeat(Math.ceil(message.length/key.length))
let i=0
let k=0
let index=65
     while(i<message.length){
       if(message[i].charCodeAt()>=65 && message[i].charCodeAt()<=90){
         index=65
       }
       if(message[i].charCodeAt()>=97 && message[i].charCodeAt()<=122){
         index=97
       }
       let a=message[i].charCodeAt() +keyLong[k].charCodeAt()-index
       // console.log(index)
       
       
       if(message[i].charCodeAt() - index >26 || message[i].charCodeAt() - index < 0){
         result.push(message[i])
         i++
       }
       else  if(index===97 && (message[i].charCodeAt()<96 || message[i].charCodeAt()>122)){
         result.push(message[i])
         i++
       }
       else{
       result.push(String.fromCharCode(a> 25 ? a-26 : a))
       i++
       k++
       }
     }
     console.log(result)
   }
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key){
      throw new Error("Incorrect arguments!")
    }

    
  }
}
module.exports = {
  VigenereCipheringMachine
};
