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

// for loops

// Example1
for(let i = 0; i < 5; i++){
        console.log('in loop :', i);
}
console.log('loop finished');


//Example2
const names2 = ['selmy','nshuti','styles'];
for(i = 0; i < names2.length; i++){
    console.log(names2[i]);
}


//Example3
const names3 = ['selmy','nshuti','styles'];
for(i = 0; i < names3.length; i++){
    let html = `<div>${names3[i]}</div>`
    console.log(html)
}


// While loops

//Example1
 i = 0;

while(i < 5){
    console.log('in loop', i);
    i++;
}

//Example2
const names4 = ['selmy','nshuti','styles'];

 i = 0;
while(i < names4.length){
    console.log(names4[i]);
    i++;
}

//do while loops
   i = 2;
do {
    console.log('Val of i is :',i);
    i++;
}
    while(i <5);


//if statements

//example1
const age = 25;

if(age > 20){
    console.log('you are over 20 years old');
}

//example2

const names5 = ['selmy', 'nshuti','styles'];
if(names5.length > 2){
    console.log("That's alot of ninjas");
}

//else if statements

const password = 'Rwanda@';

if(password.length >= 12){
    console.log('The password is mighty strong');
}

else if(password.length >= 8){
    console.log('The password is strong enough');
}

else{
    console.log('password is not long enough');
}


//Logical operators - OR || and AND &&

const password1 = 'Rwanda';  //This password is not strong because the password is under and not equal to 12 or 8. 
                             //And in the password there's no @ included

if(password1.length >= 12 && password1.includes('@')){
    console.log('The password is mighty strong');
}

else if(password1.length >= 8 || password1.includes('@') && password1.length >=5){
    console.log('The password is strong enough');
}

else{
    console.log('The password is not strong');
}

//Logical NOT ( ! )

let user = false;

if(!user){
    console.log('You must be logged in to continue');
}

//trick of the logical NOT ( ! )

console.log(!true);   //This will turn to false because of the NOT ( ! )
console.log(!false);  //This will turn to true because of the NOT ( ! )


//break and continue

const score2 = [50,25,0,30,100,20,10];

for(i = 0; i < score2.length; i++){

    if(score2[i] === 0){
        continue;
    }
    console.log('your score:', score2[i]);

    if(score2[i] === 100){
        console.log('congrats, you got the top score');
        break;
    }
}

//statements

const grade = 'C';

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log("You got a D!");
        break;
    case 'E':
        console.log('You got a E!');
        break;
    default:
        console.log('not a valid grade');
}

//function declaration

function greet(){
    console.log('Hello there');
}

//function expression (calling the function)
greet();
//you can call it many times you want
greet();
greet();
greet();

//Another way of function expression ( The best way, recommanded by Ninja )
const speak = function(){
    console.log('Have a good day!');
};

speak();
speak();
speak();

//Arguments & Parameters

//Example1
// const sum = funtion('a','b'){
//     console.log(a + b);
// };
// sum(1, 2);



const speak1 = function(name,time){
    console.log(`Good ${time} ${name}`);
};

speak1('Selmy','morning');

//another way

const speak2 = function(name = 'Nshuti', time = 'night'){
    console.log(`Good ${time} ${name}`);
};
speak2();



//returning values on regular function

const calcArea = function(radius){
    let area = 3.14 * radius ** 2;   //Area
    return area;  // return the area
};
const a = calcArea(5);  //And the area returns here.
console.log(a);  //execute



//Another way to return the function
const calc$area = function(radius){
    return 3.14 * radius ** 2;
};
const b = calc$area(5);
console.log(b);



//Arrow function //method 1
const calc$$area = (radius) =>{
    return 3.14 * radius ** 2;
};
const area =calc$$area(5);
console.log('Area is :', area);


//Arrow function //method 2 // remove the brakets on the function (radius)
const calc$$$area = radius =>{
    return 3.14 * radius ** 2;
};
const $area =calc$$$area(5);
console.log('Area is :', $area);

//Arrow function //method 3
const calCarea = radius => 3.14 * radius ** 2;

const Area =calCarea(5);

console.log('Area is :', Area);

//practice arrow functions for :
const greett = function(){
    return 'hello, world';
};
const say = greett();
console.log(say);


// answer in row function
const $greet = () => 'hello, world';
const sayy = $greet();
console.log(sayy);


//practice 2

const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));

// For products[0] = 10: 10 + 10 * 0.2 = 10 + 2 = 12
// For products[1] = 15: 15 + 15 * 0.2 = 15 + 3 = 18
// For products[2] = 30: 30 + 30 * 0.2 = 30 + 6 = 36

//arrow function :
const bill1 = (products, tax) => {
    let total = 0;
    for(let i = 0; i<products.length; i++){
        total+=products[i] + products[i] *tax;
    }
    return total;
}
console.log(bill([10,15,30],0.2));


//example of CallBack function


//Example 1
const myFunc =(callbackFunc) =>{
    //do something
    let value = 50;
    callbackFunc(value);
};
myFunc(function(value){
    //do something
    console.log(value);
});


//Example 2

// A function that simulates a network request
function fetchData(url, callback) {
    setTimeout(() => {
        const data = { name: "John Doe", age: 30 }; // Simulated data
        callback(data); // Execute the callback with the data
    }, 2000); // Simulate a 2-second network delay
}

// Usage of the fetchData function with a callback
fetchData('https://api.example.com/user', (data) => {
    console.log('Data received:', data);
});

