function name(){
    console.log("b");
    console.log("a");
    console.log("l");
    console.log("a");
    console.log("j");
    console.log("i");
}

name // won't give any output
// name() // gives output

// function add(num2,num3)
// {
//     console.log(num2+num3);   
// }
function add(num2,num3)
{
    // let res=num2+num3;
    // return res
    return num2+num3;
}
// add(2,2) // returns output
// add(3,"a") // returns 3a

// const res=add(4,5)
// console.log("Result ",res)

function loginuser(username)
{
    if (username === undefined) // iif (!username)
    {
        console.log("Plese enter user name");
        return 
    }
    return `${username} just logged in`
}
// let user=loginuser("balu") // if loginuser() is provided with nothing then it returns undefined
// console.log(user)

function calculatecartprice(val1,val2, ...num1){
    return num1
}
// console.log(calculatecartprice(200,500,300)) // output is 200 if only one parameter

const user={
    username:"balaji",
    price:199
}
function handleobject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}` )
}

// handleobject(user)

// handleobject({
//     username:"sam",
//     price: 399
// })

const mynewarray=[200,300,400,500]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray))