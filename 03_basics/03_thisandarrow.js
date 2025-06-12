//  this keyword use hota h for current context

const user ={
    username : "Sahil",
    price : 999,

    welcome_message : function(){
        console.log(`${this.username} , welcome to website`); //yahaan current context ko use karne ke liye this ka use kiya gya
        //console.log(this);
        
    }
}

user.welcome_message()
user.username = "Jana"
user.welcome_message() // this ka use kiya toh current context ko hi refer kiya

//agar upar waala console.log(this) na kare aur bahaar kare toh wo empty return karega
//console.log(this)

function chai(){
    let users = "Sahil"
    console.log(this.users);
}
chai() // iss case mei undefined return karega kyu ki this functions mei kaam nhi karta bass objects mei karta h

// ARROW function
// Basic syntax = () => {}

const chaii = () => {
    let usersss = "Sahil"
    console.log(usersss);
}
// agar hum this.usersss karte iss case mei tab bhi undefined hi aata
chaii()

// do tareeke se likh sakte h

//const addtwo = (num1,num2) => {
  //  return num1 + num2
//}

const addtwo = (num1,num2) => num1+num2 // single line implicitly bhi kar sakte h
//const addtwo = (num1,num2) => (num1+num2)
console.log(addtwo(4,5));

//const addTwo = (num1, num2) => ({username: "hitesh"})
// object ke liye yeh sab karn padhega


