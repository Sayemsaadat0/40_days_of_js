/* 
3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?
*/

const monthlySalary = 12300;

const handleFoundAnualBonus = (bonus) => {
  const anualSalary = monthlySalary * 12;
  const anualBonus = (anualSalary * bonus) / 100;
  return {
    annualBonus: anualBonus,
    anualCTC : anualBonus + anualSalary
  };
};

handleFoundAnualBonus(20)

// ai
// const monthlySalary = 12300;
// const annualSalary = monthlySalary * 12;
// const bonusPercentage = 20;
// const bonus = (annualSalary * bonusPercentage) / 100;
// const ctc = annualSalary + bonus;

// console.log("Annual Salary:", annualSalary); // 147600
// console.log("Bonus:", bonus);                // 29520
// console.log("CTC:", ctc);                    // 177120



// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
const color = "green" 
const traficResult = color === "red" ? 'STOP' : 'GO'
// console.log(traficResult)



/* 

Let's calculate how much you pay for electricity bills per month and annually.

 Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/

const units = 120 
const eachUnitvalue = 150
const monthlyChargedValue  = units * eachUnitvalue
const anualpayment = 12 * monthlyChargedValue
const anualDiscount = (anualpayment * 20) / 100
const anualPaymentwithoutDiscount = anualpayment - anualDiscount
// console.log(anualDiscount, anualPaymentwithoutDiscount)


// 7. Max of Three Numbers
// Find the max number from the lot.

//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.


const p = 20 
const q = 23 
const r = 5 

let max = p > q ? p : q

max = r> max ? r : max 
// console.log(max)


/* 

6. Leap Year Checker
Is 2025 a Leap Year?

 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
*/

const year = 2025 
const isLeapYear = (year % 100 !== 0 && year % 4 === 0) || (year % 400 === 0)
const result = isLeapYear ? "Leap Year" : "Not a Leap Year";

console.log(result)