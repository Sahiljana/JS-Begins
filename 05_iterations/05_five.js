// for each loop kuch return nhi karta

const coding = ["js","ruby","python"]
const values = coding.forEach( (item) => {
   // console.log(item)
    return item
})
//console.log(values); // yeh undefined return karega kyuki for each loop kuch return hi nhi karta

// filter() hum use karte h jo ki ek callback function jisko ek "condition" chahiiye hoti h aur yeh return karta h ek new array

const myNums = [1,2,3,4,5,6,7,8,9,20]
let newNums = myNums.filter( (num) => num > 4)
//console.log(newNums);

// OR

let nnums = myNums.filter( (nums) => {
    return nums > 4;       // ismei return ki zarurat h warna kuch nhi return karega yehh
})
//console.log(nnums);

// or 
// using for each loop

const numsss = []
myNums.forEach( (number) => {
    if (number > 4) {
        numsss.push(number);
    }
})
//console.log(numsss);

// filter() method usage

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks = books.filter( (bk) => bk.genre === 'History')

  //console.log(userbooks);

  const userbk = books.filter( (bk) => bk.publish > 1995 && bk.genre === 'History')

  console.log(userbk);
  
  