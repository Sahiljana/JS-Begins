//An object in JavaScript is a collection of key-value pairs. It allows you to store multiple values in a single variable using named properties.

// Object.create() // One method of creating objects

// Symbol is another primitive data type
const mySmb = Symbol("key1")

const JSuser = {
    name : "Sahil",
    "full name" : "Sahil Jana", //Can't be accessed by dot
    [mySmb] : "mykey1", //Aise hi symbol ko karte h
    age: 22,
    location: "Delhi",
    lastloggedin : ["monday","tuesday"], // arrays bhi de sakte h
    isLoggedIn : false
} // Another way of creating objects

console.log(JSuser.location); //One way of accessing

console.log(JSuser["location"]) //Another good way
console.log(JSuser["age"]); //No use of dot function
//console.log(JSuser.full_name); // will throw an error
console.log(JSuser[mySmb]);

JSuser.location = "Chandigarh" // Values of objects can be override

// Object.freeze(JSuser) // iske baad iski koi bhi value change nhi hogi
//sab freeze ho jayegi

console.log(JSuser);

JSuser.greeting = function(){
    console.log("hello JS user");
}
console.log(JSuser.greeting);
console.log(JSuser.greeting()); //yeh undefined return karega kyu ki hum koi return nhi kara rhe kuch bass print karwa rhe h

JSuser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JSuser.greetingTwo);
console.log(JSuser.greetingTwo());






