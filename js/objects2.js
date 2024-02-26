const tinderuser=new Object() // single ton object
// const tinderuser={} // non single ton object

tinderuser.id="123abc"
tinderuser.name="Siri"
tinderuser.isLoggedIn=false
// console.log(tinderuser)

const regualruser={
    email:"hello@gmail.com",
    fullname:{
        userfullname:{
            firstname:"balaji",
            lastname:"kalluru"
        }
    }
}
// console.log(regualruser.fullname.userfullname.firstname) // object accessing
// console.log(regualruser.fullname?.userfullname.firstname) // ? is used to check whether object exists or not

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2} // obj3 is object of objects
// console.log(obj3)

// const obj4=Object.assign(obj1,obj2)
// console.log(obj4)

// const obj5=Object.assign({},obj1,obj2)
// console.log(obj5)

// const obj6={...obj1,...obj2}
// console.log(obj6)


const users=[            // array of objects
    {id:1,
    email:"helllo@google.com"
    },
    {
        id:1,
        email:"oyee@123.com"
    }
]
// console.log(users[1].email)

// console.log(Object.keys(regualruser))
// console.log(Object.values(regualruser))
// console.log(Object.entries(regualruser))

// console.log(regualruser.hasOwnProperty('username'))

// de-structure

const course={
    name:"js in hindi",
    price:"999",
    instructor:"hitesh"
}
// course.instructor

const {instructor:inst}=course 
console.log(inst)

// const navbar=({company}) =>{  in react js also same concept
// }
// navbar(company="hitesh")

// apis

// {                      json formatter website
//     "name": "hitesh",
//     "course":"js",
//     "price":"free"
// }

[
    {},
    {},
    {}
]