// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
      //  console.log("5 is the best");
        
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop = ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner value = ${j} and inner loop = ${i}`);
      //  console.log(i + '*' + j + " = " + i*j );
        
    }
}

let myArr = ["sahil", "jana", "aml"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;        
    }
    console.log(`value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;        
    }
    console.log(`value of i is ${index}`);
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;        
    }
    console.log(`value of i is ${index}`);
}


// command + D => duplicate ho jayenge(selection easy)
// option + shift + down arrow => selected cheez copy down ho jayegi