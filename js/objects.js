// singleton 
// object create

// object literals

const mysym=Symbol("key1")

const  jsuser={
    name:"balaji",
    age:20,
    "location":"guntur",
   // mysym:"mysym1",
    [mysym]:"mysym1",
    email:"balaji1123@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"]) // email is treated as string by default

// console.log(jsuser.location) // location is set as string implicityly
// console.log(jsuser[mysym]) // mysym is treated as string here to make it symbol,it should be like [mysym]


jsuser.email="hello1123@gmail.com" // to change  values
// console.log(jsuser.email)

// Object.freeze(jsuser) // to freeze values
// jsuser.email="srm123@gmail.com"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello js users");
}

jsuser.greetingtwo=function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())