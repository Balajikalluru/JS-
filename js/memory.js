// stack(primitive),heap(non-primitive

// let user="balaji" // stack
// let name=user

// name="megha"
// console.log(user)
// console.log(name)

// stack will make a copy of the referred data like above user and name. name will make a copy of user and later we can change it no effect on user
// heap will reference the data instead of copying like below example

let details =
{
    mail:"ga23@gmail.com", // heap
    password:2523
}

console.log(details)
let user_details=details 
console.log(user_details)

user_details.mail="balaji@23.com" // changing one value in heap will also change the others
console.log(details)
console.log(user_details)