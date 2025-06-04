const marvel_hero = ["cap","thor","wolverine"]
const dc_hero = ["supes","batman","flash"]

//marvel_hero.push(dc_hero)
//console.log(marvel_hero); 
//yeh above waala chal toh jayega but issue create karega 
// jo ki hoga ki array ke andar array
// isko karne ke liye use karo concat ko aur concat mei hum ek naya array hi return karte h

const allhero = marvel_hero.concat(dc_hero)
//console.log(allhero);

// a more easy approach used by all to do the above task
// using spread operator => ... 
// iska fayda yeh bhi h ki multiple bhi ek saath jod sakte ho

const all_new_hero = [...marvel_hero, ...dc_hero]
//console.log(all_new_hero);


//Rarely used thing but we need to know

const another_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

// bas upar waale complex array ko flat kar deta h aur return karta h 
// ismei brackets mei depth deni hoti h

console.log(Array.isArray("Sahil")); //check karta h array h ki nhi
console.log(Array.from("Sahil")); //convert karta h to array
console.log(Array.from({name : "Sahil"}));// interesting case h empty array dega

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// from ki jagah of bhi use kar sakte h





