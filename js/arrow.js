const user={
    username:"balaji",
    price:999,
    
    welcomemsg:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomemsg()
// user.username="sam"
// user.welcomemsg()

// console.log(this)    // empty {} as output

// function abc(){
//     let username="balaji";
//     console.log(this);
// }
// abc()

// const chai=function(){
//     let username="balaji"
//     console.log(this.username);
// }
// chai()


// const chai= () => {
//     let username="balaji"
//     console.log(this.username);
// }
// chai()

// const addTwo=(num1,num2) => (num1+num2) // implicit declaration

const addTwo=(num1,num2) => ( {username: "balaji"}) // to declare object must use {} braces

// console.log(addTwo(2,3))

