const obj={
    key:"value",
    prpty:"value2",
    field:"method",
    add:function(a,b){
        return a+b;
    },
    sub:(c,d)=> c*d,

    }
console.log(obj.add(1,3))
console.log(obj.sub(4,7))

class car {
    constructor(arg1,arg2){
        this.arg1=arg1;
        this.arg2=arg2;
    }
    mthd(a,b){
        return this.arg1+this.arg2; 
    }
}
class mycar extends car {
    mthd(a,b){
        return a+b;
    }
}
const mycar1 = new mycar(2023,2002)
console.log(mycar1.mthd(5,5))

const obj1 = new Object();
obj1.key = 'value1';
obj1.prpty = "value2"
obj1.mthd2= "value3"
obj1.add=(a,b)=>a+b;
obj1.sub=function(a,b){
    return a+b;
}
obj1.newfn=function(){
    return this.key;
}

console.log({obj})
console.log({obj1})

const x  = obj1 //!this does not create a copy it is reference 
x.prpty="nwwevlue2"//! changing x will obj1 as well no copy direct reference

console.log({x})

console.log(obj1.newfn())

