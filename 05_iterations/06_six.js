// map use kar sakte h
// yeh ek callback function h
// automatically return kar deta h
// ismei koi condition ki zarurat nhi h 
// naya array bhejta h of same length
//filter mei true or false waala case hota h , ismei sab kuch return ho jaata h

const numbers = [1,2,3,4,5,6,7,8,9,10]
//let mynum = numbers.map( (num) => num+10 )
//console.log(mynum);


//Method of Chaining
// do teen method ek saath use kar sakte h

const newNums = numbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 50)
console.log(newNums);
