import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

// ----------------------Grade book----------------------------
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
// ------------my solution---------------------------------------
// function getGrade (s1, s2, s3) {
//   let average = (s1 + s2 + s3)/3;
//   if( average >= 90){
//     return "A";
//   } else if (average >= 80){
//     return "B";
//   } else if(average >= 70){
//     return "C";
//   } else if(average >= 60){
//     return "D";
//   } else {return "F"}
// }

// ---------------------------------------------------------------

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
// --------------------my solution-----------------------------
// function list(names){
//   let namesString = "";
//   if (names.length === 0){
//     return namesString
//   } else if (names.length === 1){
//     namesString += Object.values(names[0]);
//   } else {
//     for (let i = 0; i < names.length-2; i++) {
//       namesString += Object.values(names[i]) + ", ";
//     }
//     namesString += Object.values(names[names.length-2]) + " & " + Object.values(names[names.length-1]);
//   }
//   return namesString;
// }
// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Maggie'} ]));
// -----------------Bouncing Balls---------------------------
// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Example:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).
// -----------------------my solution----------------------------

// function bouncingBall(h,  bounce,  window) {

//   if(h < 0 || bounce < 0 || bounce >= 1 || window >= h){
//     return -1;
//   }
//   else{
//     let ball = 1;
//     let bounceHeight = bounce * h;
//     while(bounceHeight > window){
//       bounceHeight = bounce * bounceHeight;
//       ball += 2;
//     }
//     return ball;
//   }
// }
// bouncingBall(3.0, 0.66, 1.5);
//-----------------------sum of digits digital roots--------------
// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2
//----------------------------my solution-----------------------
function digital_root(n) {


  let nStringList = String(n).split("");

  if(nStringList.length === 1){
    let rootNumber = nStringList.join();
    console.log(rootNumber);
    return rootNumber;
  }
  else {
    let combineNumbers = 0;
    for (let i = 0; i < nStringList.length; i++) {
      combineNumbers += parseInt(nStringList[i]);
    }
    return digital_root(combineNumbers);
  }
}
console.log(`this is what it's returning -- ${digital_root(177)}`);