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
        return a+b;    }
};
console.log(object1.number1)
console.log(object1['number1'])
var key = 'number1';
console.log(object1[key])
var key2= "string2";
console.log(object1[key2])
var key3= 'booleanvalue';
console.log(object1[key3])

var forvar= 'nwobj';
console.log(object1[forvar].objattr1)     //////// forvar variable containing property should be in square bracket[]
///  this is wrong console.log(object1.forvar.objattr1)
console.log(object1.nwobj.objattr2)   ////////<---------- this is without variable
 console.log(object1['nwobj']['objattr1'])  //////////// remember to put quotes in square bracket in ['quotes']
 /////////using variable 
 var anthrvar = 'nwobj';
 console.log(object1[anthrvar].objattr1)
 console.log(object1['nwobj']['objattr1'])
 console.log(object1.nwobj.objattr1)
 var varantr= 'objattr2';
 console.log(object1.nwobj[varantr])
console.log(object1['nwobj'][varantr])

console.log(object1.arry1[0])
console.log(object1.arry1)
console.log(object1['arry1'][2])

