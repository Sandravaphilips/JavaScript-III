/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: the value of "this" will be on the window
* 2. Implicit Binding: "this" creates an instance of a property of a object.
* 3. New Binding: "this" creates an instance of the initial constructor. But "new" is used instead.
* 4. Explicit Binding: occurs when call() or apply() is used. bind() is used to create a new function off an initial function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var topLevelVariable = 5;
console.log(window.topLevelVariable);

// Principle 2

// code example for Implicit Binding
const myObj = {
    name: "Sandrava",
    age: 34,
    print: function() {
        return `My name is ${this.name} and I'm ${age} years old.`
    }
}

// Principle 3

// code example for New Binding
function Person(name, age) {
    this.myName = name;
    this.myAge = age;
    this.myStomach = [];
  }

  const newConstructor = new Person('Sandra', 76);

// Principle 4

// code example for Explicit Binding
function randomExample () {
    return this;
}

randomExample.call('ice-cream');