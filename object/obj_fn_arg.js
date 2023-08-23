const obj = {
    kyadd: 'prpty',
    kyadd: function(a,b){
        return a+b;
    },
}

console.log(obj.kyadd(1,2),obj['kyadd'](2,4))




const varfn = obj.kyadd;    /////// this is assign this a variable 
console.log(varfn(2,5))

const varfn2 = obj['kyadd'];
console.log(varfn2(2,5))


// obj method call()
console.log(varfn2.call(null,2,6))

let user = {
    name: 'Jesse',
    contact: {
      email: 'codestackr@gmail.com'
    }
  }
  console.log(user)
  console.log({user})

