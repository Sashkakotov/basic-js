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
    message=message.toLowerCase()
    key=key.toLowerCase()
   
let result=[]
let keyLong=key.repeat(Math.ceil(message.length/key.length))
let i=0
let k=0
let index=97
     while(i<message.length){
             let a=message[i].charCodeAt()+keyLong[k].charCodeAt()-index
                    if(message[i].charCodeAt() - index >26 || message[i].charCodeAt() - index < 0){
         result.push(message[i])
         i++
       }
       else  if(index===97 && (message[i].charCodeAt()<96 || message[i].charCodeAt()>122)){
         result.push(message[i])
         i++
       }
       else{
       result.push(String.fromCharCode(a> (index+25) ? a-26 : a))
       i++
       k++
       }
             }
     if(this.type){
      console.log(result.join('').toUpperCase())
      return result.join('').toUpperCase() 
   }
   if(!this.type){
     console.log(result.reverse().join('').toUpperCase())
    return result.reverse().join('').toUpperCase() 
   }
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key){
      throw new Error("Incorrect arguments!")
    }
    if(!this.type){
      encryptedMessage= encryptedMessage.split('').reverse().join('')
    }
 encryptedMessage=encryptedMessage.toLowerCase()
    key=key.toLowerCase()
    let result=[]
let keyLong=key.repeat(Math.ceil(encryptedMessage.length/key.length))
let i=0
let k=0
let index=97
while(i<encryptedMessage.length){
             let a=encryptedMessage[i].charCodeAt()-keyLong[k].charCodeAt()+index
                    if(encryptedMessage[i].charCodeAt() - index >26 || encryptedMessage[i].charCodeAt() - index < 0){
         result.push(encryptedMessage[i])
         i++
       }
       // else  if(index===97 && (encryptedMessage[i].charCodeAt()<96 || encryptedMessage[i].charCodeAt()>122)){
       //   result.push(encryptedMessage[i])
       //   i++
       // }
       else{
       result.push(String.fromCharCode(a< (index) ? a+26 : a))
       i++
       k++
       }
             }
    if(this.type){
      console.log(result.join('').toUpperCase())
      return result.join('').toUpperCase() 
   }
   if(!this.type){
     console.log(result.reverse().join('').toUpperCase())
    return result.join('').toUpperCase()
   } 
  }
}
module.exports = {
  VigenereCipheringMachine
};
