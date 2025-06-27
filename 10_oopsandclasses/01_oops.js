//Object literals are the simplest way to create objects in JavaScript, even before using class or constructor functions.

const user = {
    username: "Sahil",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        //console.log("Got details from the database")
        console.log(`Username : ${this.username}`) //yahaan agar this use nhi kiya tab error throw hoga kyu ki context ka hi nhi pta na toh tabhi "this" use hota h idhar
        console.log(this) // isse poora above context mil jayega saara kuch
    }
}

//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this) // global context mei empty return karega


// CONSTRUCTOR FUNCTION

//Before class was introduced in ES6, JavaScript used constructor functions to create multiple objects (instances) with the same structure. This is the foundation of OOP in JS.
//Ek normal function hoti hai jo "new" keyword ke saath call ki jaati hai taaki ek naya object ban sake.

function User(username, loginCount, isLoggedIn){
   // myusername = username // left waala variable and right waala jo hum pass karke de rhe h, but yeh hum generally use nhi karte, hum "this" use karte h

   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;

   //return this // isko na bhi likhe toh chalega

   this.greeting = function(){
    console.log(`Welcome ${this.username}`)
   }
}

const userOne = new User("Sahil", 9, true)
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne) // agar hum new kwyword nhi use karnenge toh override kar dega aur chaiaurcode print ho jayega
console.log(userTwo)

// jaise hum new keyword use karenge toh ek naya empty object banta h jisko hum "instance" kehte h


console.log(userOne.constructor) // khud ka hi reference dedeta h


