// for

for (let i= 0; i<= 10; i++) {
    const element = i;
   // console.log(element)
}

for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let j=1; j<=10; j++){
        // console.log(`Inner loop value: ${j}`);
       // console.log(i+ '*' + j + '=' + i*j);
    }
    
}

let myarr=['flash','batman','superman']

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element)
}

// break and continue

for (let index = 1; index <=20; index++) {
    if(index==5){
        //console.log(`detected 5`);
        // break
        continue
    }
    // console.log(`Value of i is ${index}`)
}

// while 
let index=0
while (index<=10) {
    //console.log(`value of index is ${index}`);
    index=index+2
}


let arr=['flash','batman','superman']
let a=0
while(a<arr.length){
    // console.log(arr[a])
    a+=1
}

// do-while

let score=11
do{
    console.log(`Score is ${score}`);
    score++
}while (score<=10)