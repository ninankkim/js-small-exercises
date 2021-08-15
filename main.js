// here we created variables and assigned them to different forms of data
// there are 7 types of data: strings, numbers, booleans, date, null, array, object, and function

// strings = "hello world"
// number = 10
// boolean = true or false
// date = (10, 21, 2020)
// null = null
// array = [1,2,3]
// object = { name: "Sarah"}
// function = function greetUser(){}

// let and const are keywords in js for setting variables - let is limited by scope and const is similar but cannot be reassigned

let name = "Nina";
let age = 24;
let color = "blue"

console.log(`Hello my name is ${name}. I am ${age} years old and my favorite color is ${color}.`);

function greetUser(name) {
    console.log(`Hello ${name}!`);
}

greetUser("Nina");

function favoriteColor(color){
    console.log(`Nina's favorite color is ${color}`)
}

favoriteColor("blue");

// we created a function called sum and because functions need to take in perameters we've named these (x,y)
// now we've told what we want this function to do, which is to return or solve what x + y is
// but here we have not told this function what x and y is 

// so we have to create a variable which we know can take in numbers, we called it sumNumbers
// we grab out function sum and then take in the number variables of 5 and 7
// then we use a console log to return what 5 +7 is which is 12

function sum(x,y) {
    return x + y;
}

let sumNumbers = sum(5,7);
console.log(sumNumbers);