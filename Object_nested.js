const object1= {
    number1: 23,
    string2: "this is a string",
    booleanvalue: true,
    nwobj:{
        objattr1: "some string",
        objattr2: "some other string",
    },
    arry1:[1,2,3],
    fnadd: function(a,b){
    return a+b;    
    }
}


var  othr1= 'nwobj';
console.log(object1[othr1].objattr1)
console.log(object1.nwobj.objattr1)
console.log(object1['nwobj']['objattr1'])
var othr2 = 'objattr1';
console.log(object1.nwobj[othr2])
console.log(object1.arry1[2])
