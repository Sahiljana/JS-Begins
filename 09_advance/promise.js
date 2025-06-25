// Promise ek JavaScript ka feature hai jo asynchronous kaam ko handle karta hai.
//Yeh ek “commitment” hota hai future mein kisi kaam ke complete hone ya fail hone ka.

//🧠 Real-Life Example:
//Tumne online food order kiya (async task)
//Zomato ne bola: “Wait, order bana rahe hain” → Promise diya

//Order mil gaya = resolve()

//Cancel ho gaya = reject()

// Promise ek object h

// promise bana rhe h yahaan hum
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() // yeh zaruri h taaki aage consume ho paaye
    },1000)
}) 

// ab promise create ho chuka h toh usse consume karna h

promiseOne.then(function(){
    console.log('Promise consumed');
}) // iska sidha connection h resolve ke saath


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');   
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved ');
})
// ek hi mei kar lia without koi alag variable use kare


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Sahil", mail : "sahil@google.com"}) // parameters mei bhi pass kar sakte h
        // yahaan object pass kiya h humne
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({users : "Sahil", password : "123"})
        }
        else{
            reject('ERROR: something went wrong') // yeh reject kar dega
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.users;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected."))
// yahaan humne chaining ki h



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({users : "Javascript", password : "123"})
        }
        else{
            reject('ERROR: JavaScript went wrong') 
        }
    },1000)
})

// dusra way to consume
// async await waale method mei directly errors ko handle nhi kar sakte, try-catch block mei kar sakte h
//Jab tum kisi function ko async bana dete ho, wo function hamesha ek Promise return karta hai.
//await sirf async function ke andar hi use hota hai. Promise complete hone ka wait karta hai


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E : ", error);
    }
}
getAllUsers()

//fetch() ek modern JavaScript function hai jo server se data get/post karne ke liye use hota hai.
//Ye asynchronous hota hai aur Promise return karta hai.

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))