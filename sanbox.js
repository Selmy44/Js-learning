// keywords
let age1 = 25;
let year =2024;
console.log(age1, year);

age1 = 35;
console.log(age1);

const points = 125;
console.log(points);

var score = 225;
console.log(score);

score = 325;
console.log(score);

// strings

console.log('Hello, world');

let email = 'snshuti@centrika.rw';
console.log(email);

//string concatenation

let fisrtName = 'Selmy';
let lastName = 'Nshuti';
let FullName = fisrtName + ' ' + lastName;
console.log(FullName);

//getting characters

console.log(FullName[6]);

//string length

console.log(FullName.length);

//string methods

console.log(FullName.toUpperCase());

// let result = FullName.toLowerCase();
// console.log(result, FullName);

//argument

let index = email.indexOf('@');
console.log(index);

let count = fisrtName.indexOf('y');
console.log(count);

//common string methods

let eemail = 'snshuti@centrika.rw'
let rresult = eemail.lastIndexOf('k');
console.log(rresult);

//slice

let rersult = eemail.slice(1,7);
console.log(rersult);

//substr

let reresult = eemail.substring(0,10);
console.log(reresult);

//replace

let ressult = eemail.replace('r', 'w');
console.log(ressult);

//mathematics
let radius = 10;
const pi = 3.14;

//division
console.log(10 / 2);

//order of operation B I D M A S
let resultt = 5* (10 - 3) **2;
console.log(resultt);

//show hand operation
// let likes = 10;

// likes++;
//this the same as likes = 10 + 1;

//likes--;
//this the same as likes = 10 - 1;

// likes += 10;
//this is the same as likes = 10 + 10;

// likes -= 5;
//this is the same as likes = 10 - 5;

// likes *= 2;
//this is the same as likes = 10 * 2;

// likes /=2;
//this is the same as likes = 10 / 2;

// console.log(likes);

//NaN - Not A Number
console.log(5 / 'Hello');
console.log(5 * 'Hello');


//template strings
const tittle = 'Best reads of 2024';
const Author = 'Nshuti';
const likes = 30;

//concatenation way
let result1 = 'The Blog called ' + tittle + ' by ' + Author + ' has ' + likes + ' likes ';
console.log(result1);

//template string way
let result2 = `The blog called ${tittle} by ${Author} has ${likes} likes`;
console.log(result2);

// creating html templates
let html = `
            <h2>${tittle}</h2>
            <p>By ${Author}</p>
            <span>This bloh has ${likes} likes</span>
`;
console.log(html);


//Arrays

//strings
let Nshuti = ['Selmy','king','David'];
 
Nshuti[1] = 'Umwami'
console.log(Nshuti[1]);

//numbers
let selmy = [10,20,30];
console.log(selmy[2]);

//Array methods

let nshuti = ['selmy','king','david'];
console.log(nshuti.join('-'));

let result3 = nshuti.indexOf('david');
console.log(result3);

let result4 = nshuti.concat('styles','david');
console.log(result4);

let result5 = nshuti.push('king');
console.log(result5);
result5 = nshuti.pop();

//NaN and Undefined

let age2 = null;
console.log(age2, age2 + 3, 'The age is ${age2}');

//Booleans & Comparisons

console.log(true, false, 'true', 'false');

//methods can return booleans
let email1 = 'snshuti@centrika.rw';
let result6 = email1.includes('@');  // this will return true because there's @ in the email
console.log(result6);

let names = ['selmy', 'nshuti', 'styles'];
let result7 = names.includes('king');  //this will return false because there's no king in the array
console.log(result7);


//comparison operators

let age3 = 25;

//equal to
console.log(age3 == 25);  //true
console.log(age3 == 30);  //false

//Not equal
console.log(age3 != 25);  //false
console.log(age3 != 30);  //true

//less and great than
console.log(age3 > 30);  //false
console.log(age3 < 25);  //true

//less and greater than or equal to
console.log(age3 >= 25);
console.log(age3 <= 20);

//comparison on strings

let names1 = 'nshuti';
console.log(names1 == 'nshuti');  //true
console.log(names1 == 'Nshuti');  //false because a name start with capital letter
console.log(names1 > 'crystal');  //true because 1st letter of 'nshuti' is greater than 1st letter of 'crystal'
console.log(names1 < 'Nshuti');   //false because in JavaScript LowerCase letter are greater than UpperCase letter


//type conversion

let score1 = '100';

score1 = Number(score1);
console.log(score1 + 1);

//for loops

//Example1
// for(let i = 0; i < 5; i++){
//         console.log('in loop :', i);
// }
// console.log('loop finished');


// //Example2
// const names2 = ['selmy','nshuti','styles'];
// for(i = 0; i < names2.length; i++){
//     console.log(names2[i]);
// }


// //Example3
// const names3 = ['selmy','nshuti','styles'];
// for(i = 0; i < names3.length; i++){
//     let html = `<div>${names3[i]}</div>`
//     console.log(html)
// }


//While loops

//Example1
let i = 0;

while(i < 5){
    console.log('in loop', i);
    i++;
}

