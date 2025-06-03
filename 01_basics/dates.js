// Javascript Date objects represents a single moment in time

let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleTimeString());
//console.log(typeof myDate); // object

//let newDate = new Date(2025,0,5) //Months 0 se shuru hote h JS mei
//let newDate = new Date(2025,0,5,5,3)
//let newDate = new Date("2025-03-24")
//console.log(newDate.toLocaleString());

let myTimeStamp = Date.now() // Current timestamps dene ke liye
//console.log(myTimeStamp);  // output milliseconds mei aata h
//console.log(Math.floor(Date.now()/1000)); // Convert to seconds by divide by 1000

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// one method which will be very useful to us
// can be used for customization

newDate.toLocaleString('default',{
    weekday: "long",
    
})










