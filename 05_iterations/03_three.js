// High Order loops // Array specific loops

// for of
// Syntax => for(const iterator of object){}
//iterator jaise ki i,num kuch bhi
// object mei arr, string, variable wagera kuch bhi aa sakta h
const arr = [1,2,3,4,5]
for (const i of arr) {
    //console.log(i);
}

const greetings = "Hello world"
for (const greet of greetings) {
    //console.log(`Eache char is ${greet}`);
}

// MAPS --> consists of unique values
// object h which holds key-value pairs
//order maintained karke rakhta h and unique values always

const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('BR',"Brazil")
map.set('IN',"India") // yahaan map duplicate value nhi lega
//console.log(map);

for (const [key,value] of map) { // yehi syntax h, ismei array ko destructure kar dete h
   // console.log(key , ':-' , value);
}

// maps iteratable h but objects nhi
// agar hum objects pe lagayenge for of loop

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

//for (const [key,value] of myObject) {
  //  console.log(key,value); // will throw an error stating myObject is not iteratable
    // there are other ways to it
//}

// working on objects only
const myobj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}
// objects ka case jab aaye tab hum 
//For in loop ka use karte h

for (const key in myobj) {
    console.log(key);
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}


const prog = ['js','rb','py',"c++"]
for (const keys in prog) {
    console.log(keys); // iska o/p = 0 1 2 3
    console.log(prog[keys]);
}
// for in loop keys print karata h jyada 
// warna use karo myObject[key]
// whereas for of sab kuch print kara deta h


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } // iss case mei iteratable nhi h