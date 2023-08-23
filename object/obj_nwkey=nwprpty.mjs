const obj = {
    name1: "property",
    name2: "property2"
}

console.log(obj.name1)

obj.name3 = "property3";
console.log(obj.name3)


obj['name4']= "property4"   //////// name4 is key which is always a string in js obj so therefore it should be in double quotes
console.log(obj.name4)

// to chang the value of already name prpty 

obj.name1= "prpty1";
console.log(obj.name1)

const key = 'name5';            //////  nw key is assigned to obj 
obj.name5 = "property6";        ///////// nw prpty is assigned to nw key above
console.log(obj.name5)