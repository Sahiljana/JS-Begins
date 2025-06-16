// for each loop
//ismei ek function ki zarurat hoti h jo har ek itme mei jaata h
// uski naming ki zarurat nhi hoti

const coding = ["js","ruby","pyhton","c++","java"]

coding.forEach( function(val){
    //console.log(val);
})

// arrow function bhi use kar sakte h
coding.forEach( (item) => {
   // console.log(item);
})

// alag function ka bhi use kar sakte h
function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)

// aur bhi parameters ho sakte h

coding.forEach( (item, index, arr) => {
   // console.log(item, index, arr);
})


// Array with objects
// using for each

const myCoding = [
    {
        languageName : "Javascript",
        shortform : "js"
    },
    {
        languageName : "python",
        shortform : "py"
    },
    {
        languageName : "C++",
        shortform : "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName); // dot se access karte h
})