const score = 300 //Automatically define kar deta h
//console.log(score); 
const balance = new Number(100) //Explicitly define karna 
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(1)); // Used to reduce or round of to specific decimal values

const otherNum = 123.8999
//console.log(otherNum.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); //commas laga deta as in indian standards

// ========== Maths =========== //


//console.log(Math);
//console.log(Math.abs(-4)); // Negative ko positive 
//console.log(Math.round(5.4)); //Mostly used
//console.log(Math.ceil(4.2)); // Round off but upper value hi lega humesha
//console.log(Math.floor(4.9)); // Round off but lower value hi lega humesha
//console.log(Math.max(3,6,8,10,23,1));
//console.log(Math.min(1,6,8,9,10,1));

console.log(Math.random()); // always between 0 and 1
console.log((Math.random()*10) + 1); // +1 taaki 0 values na aaye
console.log(Math.floor(Math.random()*10) + 1);

// ---- Trick to randomize value between range ----
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);





