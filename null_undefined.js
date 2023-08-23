const obj={
    key1:'vlu1',
    key2:'vlu2',
    key3:'vlu3',
    key4:'vlu4',
    streetview:{
        streetaddress: 'vlu5',
        streetmark: 'vlu0',
    },
}

/// undefined not intialized but is declare
var unnamed;

console.log(unnamed)
// null value
var nwnull = null;
console.log(nwnull)
// check is it null or not
console.log(nwnull===null)
// check is it undefined 
console.log(unnamed===undefined)

console.log(obj.key1.streetmark)

unnamed = unnamed ?? 2;//////// here the the unnamed is null so this provides it with an value 2
console.log(unnamed)

var named=3;
named=named??7;
console.log(named)

