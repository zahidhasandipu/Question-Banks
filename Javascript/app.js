// //Q1. What is the output of below code

// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// var car = new Vehicle ("Toyota", "red");
// console.log(car);

// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }

// Ans: {model: "Honda", color: "white", year: "2010", country: "UK"}
// The function declarations are hoisted similar to any variables. So the placement for Vehicle function declaration doesn't make any difference.

// Q10. What is the output of below code
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// Ans: true
//      false

//      The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right. The first statement follows the below order,

//      console.log(1 < 2 < 3);
//      console.log(true < 3);
//      console.log(1 < 3); // True converted as 1 during comparison
//      True
//      Whereas the second statement follows the below order,
     
//      console.log(3 > 2 > 1);
//      console.log(true > 1);
//      console.log(1 > 1); // False converted as 0 during comparison
//      False    

// Q 103. Explain call(), apply() and, bind() methods.

// See Answersheet (
//     call() method allows an object to use the method (function) of another object.
//     call() method takes arguments separately whereas, apply() method takes arguments as an array.
//     This method returns a new function, where the value of “this” skeyword will be bound to the owner object, which is provided as a parameter.

// )

// Q 104. What is currying in JavaScript?

// See Answersheet

// Q 105. Explain Scope and Scope Chain in javascript.

//See Answersheet

// Q 106. Explain Closures in JavaScript.

// See Answer
// const getSecret = (secret) => {
//     return {
//       get: () => secret
//     };
//   };

// Q 107. What are object prototypes?
// A prototype is a blueprint of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.


// Q 108. What are callbacks?

// A callback is a function that will be executed after another function gets executed.








