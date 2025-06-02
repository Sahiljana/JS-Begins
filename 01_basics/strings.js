const name = "Sahil"
let repoCount = 50

//console.log(name + repoCount + "Value");

//console.log(`My name is ${name} and my repo count is ${repoCount}`);  // Modern way to do work

const myName = new String('Sahiljana') // Another way of initialising a string
//console.log(myName);
//console.log(myName[2]);
//console.log(myName.length);
//console.log(myName.toUpperCase());
//console.log(myName.charAt(5));
//console.log(myName.indexOf('n'));

const newName = new String('Jana-bhai-hello')

const newString = newName.substring(0,4)
console.log(newString);

const anotherString = newName.slice(-7,4)
console.log(anotherString);  //Ismei negative indexing bhi possible h jo ki substing waale mei nhi h

const newStringone = "    Sahil    "
console.log(newStringone);
console.log(newStringone.trim()); // Spaces wagera hata deta h

const url = "https://sahil.com/sahil%20jana"
console.log(url.replace('%20','-'));
console.log(url.includes('sahil'));

console.log(newName.split('-'));



