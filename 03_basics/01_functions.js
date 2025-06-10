// Function ek type ka package h
// Syntax:

function sayMyName(){
    console.log("S");
}

//Function call
sayMyName() //isse execute ho jayega
sayMyName // yeh sirf reference h kuch execute nhi hoga

function addTwoNum(number1, number2){ //iss brackets mei jo pass hoga usko "parameters" kehte h
    console.log(number1+number2);
}

addTwoNum(3,5) // aur jo function call mei pass hoga usko "arguments" kehte h

const result = addTwoNum(3,5)
console.log("Result: ", result); // iska output undefined aayega kyu ki hum function mei bass print hi toh kara rhe h thorugh console but hum kuch return thodi na kara rhe h
// toh uske liye

function addTwoNumbers(number1, number2){ 
    //let result = number1+number2
    //return result

    //iski jagah hum direct return bhi karsakte

    return number1+number2

    console.log("sahil"); // yeh output nhi dega kyuki yeh return ke baad h
}

const final = addTwoNumbers(3,9)
console.log("Final result : ", final);


function returnUserName(username){ //ismei default value bhi pass kar sakte h
    if(!username){
        console.log("Please enter your username");
        return // kuch nhi return karayenge taaki niche waala return na chale
    }
    return `${username} just logged in`
}

// console.log(returnUserName("Sahil")); // console.log ke bina wo return toh kar dega but print kuch nhi karega so no output

console.log(returnUserName()); // iss case mei undefined return hoga



// jab humei pta nhi hota ki aur kitna add ho sakte h parameters
// use karenge REST operator ka (...val)
//Rest operator karta yeh h ki wo bikkhre cheezon ko samet ke dedeta h into a single array

function addShoppingCart(...num1){
    return num1
}
console.log(addShoppingCart(200,330,400,250));
// agar hum parameters mei (val1, val2, ...num1) aise likhte toh pehle do arguments val1 aur val2 mei chale jaate aur baaki ke num1 mei


// Object ko function mei kaise pass kara jaa sakta
const user = {
    user_name : "Sahil",
    age: 22
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.user_name} and age is ${anyobject.age}`);
}

handleObject(user)
/* handleObject({
    user_name:"sam",
    age: 40
}) // direct aise bhi pass kar sakte h
*/

const myNewArray = [10,20,30,40,50]

function getsecondno(getnumber){
    return getnumber[1]
}
console.log(getsecondno(myNewArray));

//isko aise bhi likh sakte h directly
console.log(getsecondno([10,20,30,40,50]));

