// Reduce method
// The reduce() method is used to reduce an array to a single value by applying a function on each element (from left to right).

//ismei ek accumulator hota h jo ki initially initial value le leta h but after applying computation wo updated value hi leta h aur ek currentValue bhi hota h

const myNums = [1,2,3]

const total = myNums.reduce( function(acc,currval) {
    console.log(`acc is ${acc} and the current value is ${currval}`);
    return acc + currval
},0) // intial value zero lega, yahaan pe koi bhi initial value le sakte h
console.log(total);


// using arrow function

const mytotal = myNums.reduce( (acc,curr) => acc+curr, 0)
console.log(mytotal);

const myShoppingCart = [
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : "py course",
        price : 999
    },
    {
        itemname : "data science course",
        price : 12999
    }
]

const pricetopay = myShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetopay);

