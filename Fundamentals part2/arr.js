///////////////////////////////////////

// const friend1 = 'ALI Haider Future CSP';
// const friend2 = 'Abdullah IQBAL Future CSP';
// const friend3 = 'Hassan RAZA BHARWANA ';
// console.log(friend1);   // output: ALI Haider Future CSP

// console.log(friend2);   // output: Abdullah IQBAL Future CSP

// console.log(friend3);   // output: Hassan RAZA BHARWANA
// Introduction to Arrays

// Array declaration
// const friends = ['ALI Haider Future CSP', 'Abdullah IQBAL Future CSP', 'Hassan RAZA BHARWANA'];
// console.log(friends);  // output: [ 'ALI Haider Future CSP', 'Abdullah IQBAL Future CSP', 'Hassan RAZA BHARWANA' ]
// console.log(friends[2]); // output: Hassan RAZA BHARWANA

//  const friends = ['Ali', 'Sheraz', 'Hamad'];
//  console.log(friends); // output: [ 'Ali', 'Sheraz', 'Hamad' ]

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
   
// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// In our previous lecture, we talked about how we can change the contents of an array, but we cannot change the array itself if it is declared as a constant (using const).
// For example, if we have an array with only one element and we want to change that element, we can do so. However, we cannot reassign the entire array to a new array because it is declared as a constant.
// This is because arrays are considered a primitive type in some programming languages, and primitive types cannot be changed in this way.

// friends[1] = 'Shahzad';
// console.log(friends);

// friends = ['Bob', 'Alice'];
// console.log(friends); // Uncaught TypeError: Assignment to constant variable. you can see this at con

// const firstName = 'Sheraz';
// const secondName = 'Ali';
// const jonas = [firstName, 'Schmedtmann',secondName,2037 - 1991, 'teacher', 'friends'];
// console.log(jonas);
// console.log(jonas.length);

// Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);
