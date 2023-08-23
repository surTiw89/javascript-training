const firstvar = 5;  
//! three stage- [callback create--callback (called with args)--callbck assigned]    
//callback function has three stage 
//frist creation--->//![function Ogfn(callback)]
//second calling the function inside the creation function with argument ---> //![callback(argument)]  
//third  assingning the callback function to specific function---> //![Ogfn(assigned-function_name())]
function applytosquarecl(callback){ //! callback function creation 
    return callback(firstvar); //!being called inside function with argument 
}
function areaofsquare(a){ /// normal function 
    return a*a;
}
console.log(applytosquarecl(areaofsquare)) //! assigned the  function   
//------------------------------------------------------------------------->
function calculator(a,b){ ///! Not a callbck function
    return a +b;
}
function display(){
    console.log(calculator(5,9)); // Nested function  in another function statement
}
display();
//--------------------------------------------------------------------------------->
function fnwithclbck(a,b,callnameanything) //! callbck creation 
{
var sum = a + b;
callnameanything(sum);//! callbck called with arg inside fn
}
function displaycallbck(a){
    console.log(a);
}
fnwithclbck(2,3,displaycallbck); //!callbck assigned 


function clfn(a,b,c,d,callback){
    var sum1 = a+b ;
    var sum2= c+d;
    return callback(sum1,sum2);
}
function normalfunction(arg1,arg2){
    var sum12 = arg1 + arg2 ;
    console.log(sum12)
    return sum12;
}

console.log(clfn(2,3,4,5,normalfunction))
 