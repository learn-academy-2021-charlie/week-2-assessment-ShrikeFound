# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

### 1. What is iteration?

  *Your answer:*
  Iteration is repeating the same piece of code until a condition is met

  *Researched answer:* 
  Iteration is the process of repeating steps, either for a fixed amount of steps, until a condition is met, or going through each element in a list. Iteration helps us simplify code and implement algorithms to help us solve problems.



### 2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  *Your answer:*
  it takes a function, which is run for each item in the array. the arrow function itself takes a parameter that represents the item in the function.

  *Researched answer:*
  The function actually takes **THREE** arguments, including a parameter that represents each item in the array as it's being processed. This parameter is required. Two more parameters are optional: one for the index of the item, and one for array map() is working on.



### 3. What is object destructuring?

  *Your answer:*
  taking the values of an object and saving those as individual variables.

  *Researched answer:*
  Object Destructuring is the taking of properties from an object and saving this as individual variables. Unlike array destructing, the order that the individual variables are called does not matter; we're assigning the variables the values of their corresponding keys in the object. If we want to destructure a property with an invalid syntax for variables, we can use an alias variable name:
  <code>const {keyName: newVariableName} = object</code>



### 4. What is the difference between an object and a class?

  *Your answer:*
  an object is a type of data that collects data and stores it using keys that represent values. Classes are blueprints for objects that can be used to create multiple objects with the same initial properties and methods.

  *Researched answer:*
  in addition to above: each object, being a separate instance, can have different values for its properties than other objects of the same class. An array object can have a different length property (and different elements) from another array object, despite both being of the same class.



### 5. Why would you use the method super()?

  *Your answer:*
  I'd use super() to access a class' parent class properties or methods.

  *Researched answer:*
  calling the super() method in the child class' constructor method calls the parent class' constructor method. The `extends` keyword lets the child class know it's a descended of the parent class. The super() method tells the class what constructor and properties it should get because of that connection.



### 6. STRETCH: What is hoisting in JavaScript?

  *Your answer:*
  hoisting is when javascript moves declared variables/functions ("hoists" them) to the top of their current block.

  *Researched answer:*
  as with above, except javascript only hoists certain types of functions. calling a function that is declared using the `function` keyword works, even if you call the functio before it is declared. This doesn't work for arrow functions, for example.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

*1. React:* a front-end javascript library that helps us build resuable, dynamic components.

*2. React lifecycle methods:* methods that we can use to run code at specifics points in the mounting,updated, or unmounting of a component.

*3. React state:* is an object that holds information that can be updated or remain consistent as components update

*4. Component invocation/call:* coming back to this one...

*5. DOM Events:* DOM events are things that happen on the HTML document (I think? I never really thought about where the events actually happen), like something being clicked, or a key being pressed. These can be registed by javascript through event listeners, and then we can do things with the information from those events.
