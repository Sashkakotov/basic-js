const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  getLength() {
    return this.chain.split('~~').length
  },
  addLink( value ) {
    if(this.chain){
      this.chain=`${this.chain}~~( ${value} )`
      return this
    }else{
      this.chain=`( ${value} )`
      return this
    }
       
  },
  removeLink(position ) {
    let a=this.chain.split('~~')
    let b=a.splice(position-1,1)
  
    if(typeof position!=='number' ||!b.length || position<=0){
      this.chain='';
      throw new Error("You can't remove incorrect link!")
    }
    this.chain=a.join('~~')
     return this
  },
  reverseChain() {
 this.chain=this.chain.split('~~').reverse().join('~~')
    return this
  },
  finishChain() {
let c=this.chain
this.chain=''
   return  c
  },
  
};

module.exports = {
  chainMaker
};
