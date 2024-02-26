// if

if(false){

}
// <, >, <=, >=, ==, !=, ===

// const scr=200
// if  (scr>100){
//     let powr="fly-high";
//     console.log(`User power :${powr}`)
// }
// console.log(`User power  is ${powr}`)   // cannot be accessed

const bal=300;
// if (bal>200) console.log("rest")  // implicti  scope

//--------------Switch-----------------

const month=2
// switch(month){
//     case 1:
//         console.log("January");
//         break
//     case  2:
//         console.log("February");
//         break
//     case 3:
//         console.log("March");
//         break
//     default:
//         console.log("Default no match");
//         break
// }

// const usermail= ""//[]// "hi@gmail.com" // if array it taks as true, if empty string takes as false
// if (usermail){
//     console.log("Got user mail");
// }
// else{
//     console.log("Don't have user mail");
// }

// falsy values:  false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values:  "0", 'false', " ", [], {}, function(){}


// const userEmail=[] // to check empty arrays
// if(userEmail.length===0){
//     console.log("Array is empty")
// }


// const emptyObj={}   // to check if object is empty or not
// if (Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

false ==0 // true
// false=`` // true
0==`` // true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5 ??10
// val1=null ?? 10
// val1= undefined ?? 15

// val1= null ?? 10 ??20  // output is first not null
// console.log(val1)

// Terniary Operator

// condition ? true :false 

const teaPrice=100
teaPrice <=80 ? console.log("less than 80") : console.log("more than 80")