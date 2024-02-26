// Dates

let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let created_date=new Date(2024,0,4)

let created_date=new Date("2024-02-04")
// console.log(created_date.toDateString())
// console.log(created_date.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(created_date.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log(newDate)

// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{weekday:"long"})