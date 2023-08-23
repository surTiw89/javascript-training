const obj= {
    nm1ky1: "prpty1",
    arry1:[2,3,4],
}

console.log(obj.arry1[1])
console.log(obj['arry1'][1])

//using obj mthd

console.log(Object.values(obj.arry1))
console.log(Object.values(obj['arry1'])[2])
console.log(Object.values(obj))
console.log(Object.values({obj}))

