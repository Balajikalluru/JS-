// for of

// ["","",""]  array of strings
// [{}, {}, {}] array of objects

const arr=[1,2,3,4,5]

for (const i of arr) {
    // console.log(i)
}

const hi="hello world";
for (const i of hi) {
    // console.log(`Each char is ${i}`)
}

// maps

const map=new Map()
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");
// console.log(map)
for (const [key,value] of map) {
    // console.log(key,value)
}

const myobj={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for (const [key,value] of myobj) {
//     console.log(key,value)
// }


// for in

const obj={
    js:'javascript',
    cpp:'C++',
    rb:"Ruby",
    swift:"Swift by apple"
}
for (const key in obj) {
    // console.log(obj[key])
}

const prog=["js","rb","py","java","cpp"]
for (const key in prog) {
    //console.log(key)   // output is 0,1,2,3,4
   // console.log(prog[key])
}

// prog.forEach( function (val) {
//     console.log(val)
// } )

// prog.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// prog.forEach(printMe)

// prog.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })


const coding=[
    {
        lang_name:"javascript",
        extension:"js"
    },
    {
        lang_name:"python",
        extension:"py"
    },
    {
        lang_name:"java",
        extension:"java"
    }
]

coding.forEach( (item) => {
    console.log(item.lang_name);
})