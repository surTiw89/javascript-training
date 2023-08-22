function fn(x,y){
    this.prptyassign=x;
    this.prptyassign2=y;
}

const fnobj2=new fn(3,5)
const fnobj=new fn(1,3)
console.log(fnobj.prptyassign)

fnobj.prptyassign3=5;//!added to constructor function object not to fn itself  

console.log({fnobj})

fnobj2.fn=function(){   //!added to 2 obj not fn itself
    return this.prptyassign + this.prptyassign2; 
}

console.log({fnobj2})
console.log(fnobj2.fn())
//! directly adding to constructor function we need prototype
fn.prototype.prptyassign4viproto=28;


console.log(fnobj2.prptyassign4viproto)