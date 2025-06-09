// how to declare objects using constructors

const tinderUser = new Object() // constructor way

//const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sahil"
tinderUser.isLoggedin = false

//console.log(tinderUser);

// HUM JS mei objects ke andar objects bana sakte h

const regularUser = {
    email : "Sahil@jana.com",
    fullusername:{
        fullname:{
            firstname : "Sahil",
            lastname : "Jana"
        }
    }
}

console.log(regularUser.fullusername.fullname.firstname); // Dot dot karke aage access kar sakte h

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2) // Iska use combine karne ke liye hota h ->assign
// iske liye ek naya object chahiye hota kyu ki wo copy hi wahi karta h
// {} yeh hum starting mei use karte h taaki combine ek naye mei ho warna obj1 mei hi copy hota h
// will be used less
console.log(obj3);

// used frequently => ...
const obj4 = {...obj1, ...obj2}
console.log(obj4);

//objects in arrays

const users = [
    {
        id: 1,
        email: "sahil@gmail.com"
    },
    {
        id: 1,
        email: "sahil@gmail.com"
    },
    {
        id: 1,
        email: "sahil@gmail.com"
    }
]

console.log(users[1].email)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedin'))



