const fn = function (a,b){
    return a+b;
}
console.log(fn(1,3))

const fnt=(c,d)=>{
    return c*d;
}

console.log(fnt(5,6))

const fnt1 = (w,x)=> w*x;//! here return and {curly} bracket can ignored and return can be ignored for only return statement
console.log(fnt1(1,6))

const fnt2=arg1=>arg1*arg1;//! here for single argument  (bracket) can be ignored
console.log(fnt2(3))

const ary = [1,"two","three",4]
console.log(ary.indexOf('two'))
console.log(ary.includes(4))

const ary1= [2,4,6,8]
console.log(ary.every((a)=>a%2===0));//! answer = true // all/every should do
console.log(ary.some((a)=>a%4===0));//! answer = true // only some would do

console.log(ary1.find((a)=>a>4)); //! returns value according to condition
console.log(ary1.findIndex((a)=>a>6));//! return index according to condition
