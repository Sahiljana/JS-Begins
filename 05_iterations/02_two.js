// while loop

let index = 0
while (index < 10) {
    //console.log(`value of i is ${index}`);
    index = index+2;
}

let myArray = ["sahil","jana","aiml"]

let arr = 0;
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}

// do-while.       // jyada use nhi hota
//pehle kaam hoga fir condition check hogi

let score = 1
do {
    console.log(`Score is ${score}`);
    score++;
} while (score<10);

// agar niche aisa koi case aaya jismei score = 11 h aur while loop sirf score<10 tak chalega tab bhi yeh output mei " Value is 11 " print kar dega 
//kyu ki do-while loop mei kaam pehle hota h aur fir condition check hoti h

let sc = 11
do {
    console.log(`Scores is ${sc}`);
    sc++;
} while (sc<10);