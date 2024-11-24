// let js = "javascript";
// console.log('Sheraz');
// console.log('ahmed');

////////////////////////////////////
// Linking a JavaScript File
//  let js = "amazing";
//  console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

////////////////////////////////////
// Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

////////////////////////////////////
// let, const and var
//  let age = 30;
// age = 31;
                           
// let birthYear = 1991;    // const bith year=1991   in this we cannot be avle to change becsuse const cannot be chnage 
// birthYear = 1990;

 // try to avoid use var becsue in ld javscrit var wrere used not n modern javscritp let is used     


// let job;
// job = 'programmer';
//  job = 'teacher';   /// var job = 'teacher';  it will give error  
// console.log(job);
// let lastName = 'schmendtmann';
// console.log(lastName);

////////////////////////////////////
// Basic Operators
//Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// //console.log(ageJonas);

// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
///2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

//const firstName = 'Jonas';
//const lastName = 'Schmedtmann';
//console.log(firstName + ' ' + lastName);

// Assignment operators
//let x = 10 + 5; // 15
//x += 10; // x = x + 10 = 25
//x *= 4; // x = x * 4 = 100
//x++; // x = x + 1
//x--;
//x--;
//console.log(x);

// Comparison operators
//console.log(ageJonas > ageSarah); // >, <, >=, <=
//console.log(ageSarah >= 18);

//const isFullAge = ageSarah >= 18;

//console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence


// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x , y);
//   const now = 2037;
//   const ageJonas = now -1991;
//   const ageSarah = now -2018
//   console.log(ageJonas,ageSarah);
//  const averageAge = (ageJonas + ageSarah) / 2;
// console.log(averageAge);


////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const mass_of_Mark = 78;
// const height_Mark = 1.69;
// const mass_of_John = 92;
// const height_John = 1.95;

// /*
// const mass_of_Mark = 95;
// const height_Mark = 1.88;
// const mass_of_John = 85;
// const height_John = 1.76;

// const BMI_of_Mark = mass_of_Mark / height_Mark ** 2;
// const BMI_of_John = mass_of_John / (height_John * height_John);
// const markhasHigher_BMI = BMI_of_Mark > BMI_of_John;

// console.log(BMI_of_Mark, BMI_of_John, markhasHigher_BMI);

////////////////////////////////////
//strings and template literals
// const firstname = 'Jonas';
// const birthYear = 1991;
// const year = 2037;
// const job = 'teacher';
  

// const jonas = "I'm " + firstname + ', a ' + (year - birthYear ) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstname}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);


// console.log(`Just a regular string...`);

// console.log("string \n\
// multiple \n\
//   lines");

// console.log(`String
// multiple
// lines`);


////////////////////////////////////
// Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);


/// my self code 

// const $date_of_join = 1995;

// let retirement;
// if ($date_of_join => 1992) {
//   retirement = 2030;
// }
// else{
//  retirement = 2031;
// }
// console.log(retirement);

// practice myself 
// const $date = 1990;

// let retired = 0;
// if ($date > 1999) {

//   retired = 2033;
// }
// else {

//  retired = 2034;
// }
// console.log(retired);


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

//  const massMark = 95;
//  const heightMark = 1.88;
//  const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)  
// }



  /// coding challeng by myself    for 
// const radius1 = 6;
// const radius2 = 10;

// const area1 = Math.PI * radius1 ** 2;
// const area2 = Math.PI * radius2 ** 2;

// if (area1 > area2) {
//     console.log("Area of the  1st radius  is greater.");

// }  else if (area1 < area2) {
//   console.log("Area of the  2nd redius  is greater.");

// }   else {
//   console.log("both are equal");
// }   


//Compare the areas of two rectangles and determine which one has the larger area, or if they are equal.

//Dummy Data:
//Rectangle 1: Length = 12, Width = 8
//Rectangle 2: Length = 10, Width = 10
//Now go ahead and implement it in your code. Happy coding! 😊



// const length1 = 12;
// const width1 =8;
// const length2 =10;
// const width2 =11;


// const areaofrectangle1 = length1 *width1;
// const areaofrectangle2 = length2 *width2;

// console.log(areaofrectangle1, areaofrectangle2);

// if (areaofrectangle1 > areaofrectangle2) {
//     console.log("Area of the  1st rectangle  is larger.");

// }  else if (areaofrectangle1 < areaofrectangle2) {
//   console.log("Area of the  2nd rectangle  is larger.");

// }   else {    
//   console.log("Both are equal");
// }

////////////////////////////////////
// Type Conversion and Coercion ( in which we chnage the data type of a value)

// type conversion
//  const inputYear = "1991";
//   console.log(typeof(inputYear));
//  console.log(inputYear);
//  console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 43 + ' years old');
// console.log('43' - '10' - 3);
// console.log('43' / '2');

// let n = '1' + 1; // '11'
//const sum = 1 + 1;
//console.log(sum);   // it give ouput 2 

//const result ='10' + '1';
//console.log(result);    /// it give 101 ouput
//let n = 11;
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
//console.log(Boolean('Jonas'));
//console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
//console.log(Boolean(''));

// const money = 100;
// if (money > 50) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 5;
// if (height) {
//   console.log('YAY! Height is defined');
//   console.log('height is better');
// } else {
//   console.log('Height is UNDEFINED');
// }

////////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// console.log(typeof(age));
// if (age === 18) console.log('You just became an adult :D (strict)');  // it check number value also be same and datatype will also be same
// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }
// if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
// const hasDriversLicense = true; 
// const hasGoodVision = false; 
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }
// */

////////////////////////////////////
// Coding Challenge #3  

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }

 // prcatice challenge 

  //Team A: Scores = 88, 102, 94
 //Team B: Scores = 95, 108, 100

  // const scoreTeamA = (88 + 102 + 94) / 3;
  // const scoreTeamB = (95 + 108 + 100) / 3;
  // console.log(scoreTeamA,scoreTeamB);

  // if (scoreTeamA > scoreTeamB) {
  
  // console.log("Team A is the winner 🥇 "); 

  // }   else if  (scoreTeamB > scoreTeamA) {

  //   console.log("Team B is the winner 🥇 ");

  // }  else if (scoreTeamA === scoreTeamB ) {
  //   console.log("Both team are the winners ");
  // }  else {

  //   console.log("no one wins the trophy 🏆");
  // }
  
     //*******************   Bonus  1   ****************************
 //Team A: Scores = 110, 122, 98
 //Team B: Scores = 106, 111, 107


  // const scoreTeamA = (97 + 109 + 99) / 3;
  // const scoreTeamB = (95 + 108 + 100) / 3;
  //  console.log(scoreTeamA,scoreTeamB);

  // if (scoreTeamA > scoreTeamB && scoreTeamA >= 100) {
  
  //  console.log("Team A wins trophy  "); 

  //  }   else if  (scoreTeamB > scoreTeamA && scoreTeamB >= 100) {

  //    console.log("Team B wins trophy 🏆 ");

  //  }  else if (scoreTeamA === scoreTeamB && scoreTeamA >= 100 && scoreTeamB >= 100) {
  //    console.log("Both team are the winner of trophy 🏆 ");
  //  }  else {

  //    console.log("no one wins the trophy 🏆");
  //  }


////////////////////////////////////
// The switch Statement
// const day = 'friday';

//  switch (day) {
//   case 'monday':                             // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }
 
//  sample code of switch statement

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }



// *** the switch statements  practices  *****

//  const today = 7 ;

//  switch (today) {
//   case 1:                             
//     console.log('Full body workout');
//     break;
//   case 2:
//     console.log('Cardio workout');
//     break;
//   case 3:
//     console.log('Yoga and stretching');
//     break;
//   case 4:
//     console.log('strength training');
//     break;
//   case 5:
//     console.log('HIIT (High Intensity Interval Training)');
//     break;
//   case 6:
//   console.log('Enjoy the weekend ');
//   break;
//   case 7:
//     console.log('Outdoor activities (e.g., hiking, cycling,running)');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

//    let today = "monday";
//    today = "tuesday";   // value chnages 
//    today = "friday";    // value chnages
//    today = "hdhfdbccgcwe";  // give invalid value
// if (today === 'monday') {
//   console.log('full body workout');
  
// } else if (today === 'tuesday') {
//   console.log('cardio workout');
// } else if (today === 'wednesday')  {
//   console.log('yoga and stretching');
// }  else if (today === 'Thursday')  {
//   console.log('Abs workout and chest workout'); 
// }
// else if (today === 'friday') {
//   console.log('hiit (high intensity interval training)');
// } else if (today === 'saturday' ) {
//   console.log('enjoy the weekend');
// } 
// else if(today === 'sunday') {
//   console.log('Outdoor activities (e.g., hiking, cycling,running)');
// }
// else {
//   console.log('Not a valid day!');
// }


////////////////////////////////////
// Statements and Expressions
// 3 + 4
// 1991
// true && false && !false
// const str = 23;
// const me =  'greater';
// if (23 > 10) {
//   console.log(`${str} ${me}`);
//  }  else {
//   console.log("10 is smaller");
//  }
 
 
// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);  // this is concept of string interpoation

////////////////////////////////////
// The Conditional (Ternary) Operator
//The conditional (ternary) operator is a shorthand way of writing an if-else statement. It takes three operands and is often used to assign a value based on a condition.
//Syntax:
//javascript
// condition ? expression_if_true : expression_if_false;
// Explanation:
// condition: This is the condition to be evaluated.
// expression_if_true: This expression is executed if the condition is true.
// expression_if_false: This expression is executed if the condition is false
// const age = 18;
// const canDrive = age >= 16 ? 'Yes, can drive!' : 'No, too young!';
// console.log(canDrive);  // Outputs: Yes, can drive!

//const years = 13;
// years >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 15 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// const score = 65;
// const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
// console.log(grade);  // Outputs: B

// const age =15;
// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);
// console.log(`i like to drink ${drink} as it is my favourite drink`);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/


//Test with bill values: 150, 45, and 500.

//  const bill = 500;
//  const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2 ;
//  console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


