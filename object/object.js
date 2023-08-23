const obj = {

    key1: "vlu1",
    key2: "vlu2", 
    key3: "vlu3",
    key4: "vlu4",
    key5: "vlu5",
    key6: [1,2,3,5],
    key7:function(a,b){
        return a+b;
    },
    key8: 2000,
}


/////// accessing the value in the object
console.log(obj.key1)

console.log(obj['key2'])

var keyvar= 'key3';      //////// accessing through variable
console.log(obj[keyvar])
//////// accessing the array elements
console.log(obj.key6[0])          
console.log(obj['key6'][1])
///// changing the value in the object

obj.key1= "newvlu1"
console.log(obj.key1)
obj['key1'] = 'newvluvlu1'
console.log(obj.key1)

// adding the new value explicit form outside
obj.key0= 'newvlu0'
console.log({obj})
/////// for accessing an functin 
console.log(obj.key7(2,5))
console.log(obj['key7'](100,300))


for ( let key in obj){
   
    console.log(obj[key])
}

console.log({obj})

