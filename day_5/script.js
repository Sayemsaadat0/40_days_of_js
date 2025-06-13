console.log("Day 5");
// for loop
/* 
structure : 

for (initialization; condition ; update)
code 
*/

//

for (let count = 1; count <= 5; count++) {
  console.log("loop", count);
}

//  addition of event numbers between 1 to 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // sum = sum + i;
    sum += i;
  }
}
console.log("sum", sum);

/* 
## 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.
*/

let sumOfOdd = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    sumOfOdd += i;
  }
}

console.log("sumOfOdd", sumOfOdd);

/* 

## 4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.
*/

for (let i = 1; i <= 20; i++) {
  if (i % 3 !== 0) {
    // console.log('numbers that are not multiply by 3' ,i);
  }
}




// example
let lang = 'javascript'
for (let i = 0; i < lang.length; i++ ){
// console.log(lang.charAt(i))
}


// single dimentional data, multi dimentional data
// nested loop

// break in 25 min 