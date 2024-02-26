// array
const myarr=[0,1,2,3,4]
// console.log(myarr)
// console.log(myarr[2])

// shallow copy --> shares the same reference
// deep copy --> don't share the same reference

const myarr2=new Array(1,3,5,7)

// console.log(myarr2)

// array mathods

myarr.push(6)
// console.log(myarr)
myarr.pop()
// console.log(myarr)

// myarr.unshift(9) // 9 is inserted at the beginning
// console.log(myarr)

myarr.shift()
// console.log(myarr)

// console.log(myarr.includes(3))
// console.log(myarr.indexOf(3))

const myarr3=myarr.join() // converts int to string

// console.log(myarr)
// console.log(myarr3)

// slice, splice

// console.log("A",myarr)

const myn1=myarr.slice(1,3)

// console.log(myn1)
// console.log("B",myarr)

const myn2=myarr.splice(1,3)
// console.log(myn2)

//  --------------Part 2 ---------------

const marvel=["thor","iron-man","spider-man"]
const dc=["super-man","flash","batman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])

// marvel.concat(dc)
// console.log(marvel) // push and cocat both works same

const all=marvel.concat(dc)

// console.log(all)

const all_heros=[...marvel,...dc] // ... is used to spread same as all
// console.log(all_heros)

const other_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array=other_array.flat(Infinity)

// console.log(real_array)

// console.log(Array.isArray("Balaji"))
// console.log(Array.from("Balaji"))

// console.log(Array.from({name:"Balaji"})) // interesting

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3)) // returns an array