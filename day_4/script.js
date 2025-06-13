// solution 1

// "It's a normal day."

/* 
2. Build an ATM Cash Withdrawal System

Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
*/

// let amount = 550;

// if (amount % 100 === 0) {
//   console.log("Withdrawal successful");
// } else {
//   console.log("invalid amount");
// }

/* 

3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
*/

// const operator = "-";
// const value1 = 30;
// const value2 = 20;

// switch (operator) {
//   case "+":
//     console.log(value1 + value2);
//     break;
//   case "-":
//     console.log(value1 - value2);
//     break;
//   case "*":
//     console.log(value1 * value2);
//     break;
//   case "/":
//     console.log(value1 / value2);
//   default:
//   // code block
//   console.log('invalid operator')
// }

// 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:

// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

// const age = 100
// if(age < 18 ){
//     console.log('Price of the Ticket is $3')
// }else if (age >= 18 && age <= 60){
//     console.log('Price of the Ticket is $10')
// }else {
//     console.log('Price of the Ticket is $8')
// }

/* 
5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else. */

const months = "March and April";
switch (months) {
  case "March and April":
    console.log("Aries");
    break;
  case "April and May":
    console.log("Taurus");
    break;
  case "May and June":
}

/* 

| Month(s)           | Zodiac Sign |
| ------------------ | ----------- |
| March, April       | Aries       |
| April, May         | Taurus      |
| May, June          | Gemini      |
| June, July         | Cancer      |
| July, August       | Leo         |
| August, September  | Virgo       |
| September, October | Libra       |
| October, November  | Scorpio     |
| November, December | Sagittarius |
| December, January  | Capricorn   |
| January, February  | Aquarius    |
| February, March    | Pisces      |

*/
