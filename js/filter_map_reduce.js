const coding=["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item) => {     // foreach loop won't return any value
    // console.log(item)
})

const mynums=[1,2,3,4,5,6,7,8,9]
//const newn=mynums.filter( (num)=> num>5) // output is [6,7,8,,9]

const newn=mynums.filter( (num)=> {
    // num>5      returns output as []
   // return num > 5      // returns [6,7,8,9]
})
// console.log(newn)


// const newnums=[]
// mynums.forEach( (num)=> {
//     if(num>5){
//         newnums.push(num)
//     }
// })

// console.log(newnums)

const numss=[1,2,3,4,5,6,7,8,9]
// const newnam=numss.map( (num) => num+10)
const newnam=numss.map( (num) => num*10).map( (num)=>num+1).filter( (num) => num>=40) // map.map
// console.log(newnam)


// reduce

const Nums=[1,2,3]
// const mytotal=Nums.reduce( function (acc,curr){
//     console.log(`acc:${acc} and currval: ${curr}`);
//     return acc+curr
// },0)

const mytotal=Nums.reduce( (acc,curr) => acc+curr,0)
// console.log(mytotal)

const shopping=[
    {
        course:"aiml",
        price:999
    },
    {
        course:"java",
        price:1999
    },
    {
        course:"python",
        price:2999
    }
]
const res=shopping.reduce( (acc,item) => acc+item.price,0)
console.log(res)