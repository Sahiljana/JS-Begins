//JavaScript me prototypes ek hidden power hai jo objects ko inheritance aur memory-efficient methods dene me madad karti hai.

//🔷 What is a Prototype?
//Har object JS me automatically link hota hai ek prototype object se.
//Is prototype object me shared properties ya methods rakhe ja sakte hain — jisse inheritance aur reuse possible hota hai.




function multipleBy5(num){
    return num*5;
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// Baat yeh h ki JS mei sab kuch object hota h toh dot operator use ho sakta h
// Function function bhi h aur object bhi h, depend karta h kaise use karte h hum

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe() //Cannot read properties of undefined (reading 'printMe') 
// yeh issue aayega if hum new keyword ka istemaal nhi kare toh


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// new keyword tumhare constructor function se ek naya object banata hai, usme prototype link karta hai, constructor call karta hai, aur return kar deta hai — magic hota hai, par logical 😄