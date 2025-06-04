// array consists of square brackets
// array is an object
// arrays are resizable

const myArr = [0,1,2,3,4,5]
//console.log(myArr[0]);

const arrs = ["sahil","jana","22"]

const myarr2 = new Array(1,2,3,4,5)

// Array methods

//myArr.push(45) // last mei add
//myArr.pop() // last se pop

//myArr.unshift(9) // Start mei add kar dete h
//myArr.shift() // 9 hatt jaygea


//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr = myArr.join() // Join toh kar deta h but saath saath string mei bhi convert kar deta h


//console.log(myArr);
//console.log(newArr); // iska type of string aayega
//console.log(typeof newArr);


//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);

console.log(myn2);


// Slice se original array manipulate nhi hoti
// But splice se original array change ho jaata h jaise ki above output mei




