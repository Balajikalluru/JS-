// var c=300 
let a=100
if (true){          // {} curly braces means scope
    let a=10;
    const b=20
    // console.log("Inner scope: ",a)
    // var c=30
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username="balaji"
    
    function two(){
        const websie="youtube"
        console.log(username);
    }
    // console.log(website);      // error for this
    two()
}
// one()
// two()

if (true){
    const username="balaji"
    if (username=="balaji"){
        const website="youtube"
        // console.log(username+website);
    }
    // console.log(website);       // error
}
// console.log(username)      // error

addone(7)     // no error even if we declare it before initializing
// console.log(addone(8))  // gives output 9
function addone(num){
    return num+1;
}

addTwo(3)       // error    // hoisting, using before declaration
const addTwo=function(num){
    return num+2
}
