// Immediately Invoked Function Expressions (IIFE)

(function hello(){
    console.log("DB conneted");
})();

// first () function definition
// second () function execution

(function hi(){
    console.log("DB connected two");
})();

// when there are two iife, then ';' is mecessary to add at the end of the first iife

((name)=>{
    console.log(`hello,${name}`)
})('baljai')