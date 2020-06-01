/* Functions */
function sayHello(name) {
  return "Hello " + name;
}
sayHello("Jaguar");

/* Instanciate functions */
var sayHello = function (name) {
  return "Hello " + name;
};
/* Instatiate a function in ES6. (this9 keyword is hadled differently in es6 functions */
var sayHello = (name) => {
  return "Hello " + name;
};

/* Global Namespace. Default namespace is the (window) object */
var myname = "Jade";
// myname;
window.myname;
window.myname == "Jade"; // Reurns true
/* 
Keep variables in their own scope by wrapping them in functions 
to avoid name coliision!   
*/

function test() {
  var name = "Jade";
  return name;
}
test(); // Returnerar "Jade". (name) variabeln inte tillgänglig utanför funktionen...

/* 
IIFE: Immediately Invoked Function Expression 
Möjliggör för en att skapa en rackvidd(scope) 
att ha sin applikation i.
*/
(function () {
  var name = "Jade";
})();

(function () {
  var name = "Bob";
})();
/*
 Ingen namnkollision med IIFE eftersom variabler 
 hör till egena räckvidd(scope) 
 
 Important: Whenever you are creating your JS
 application you should wrap the whole of your
 JS appication in an iife. For scope and namespace 
 try and wrap your varaible names in their own function
 and try to avoid having variables in the global namespace
 which is the (window)...
*/

/** (this) keyword */
this === window;
/*
(window) is the global object 
(this) refers to whatever objekt 
it is contained in...
*/
var myobj = {
  name: "Jade", // Key:value pair
  hello: function () {
    return "Hello " + this.name; // (this) refers to the object it is contained in:(myobj)
  },
};

/* Object Creation: Creating more than one of an object... */
var person = function (name, age) {
  this.name = name;
  this.age = age;
};

var jade = new person("Jade", 23);
jade; // Returns a person...

var bob = new person("Bob", 23);
bob; // Returns a person...
// Use factoring to create more people as done above..

var jane = new person();
jane;
/* 
jane returns a person with undefined values for the parameters...
so one might want to use default values for the parametrs --> prototypes
*/

/* Prototypes: */
var person = function () {
  /*
  Instead of defining our variables inside 
  here we can use prototypes instead...
  */
};
person.prototype.name = "n/a";
person.prototype.age = 0;

jade = new person();
jade; // Returns person with all the prototypes assigned to the constructor

// Prototypes allows us to add methods to our objects...
person.prototype.hello = function () {
  return "Hello " + this.name;
};
jade.hello();
/* 
 Returns "Hello n/a" indicating that (this) keyword
 refers to whatever object it is attached to...
*/
jade.name; // Returns "n/a"
jade.age; // Returns 0
/*
 Return values here come from prototypes and are not directly defined in objects
 which allows us to create very light weight objects...
*/

person.prototype.hello = function () {
  return "Hello " + this.name;
};
/* Prototypes also allow us to add metods to our objects */

jade.hello();
/*
 Returns "Hello n/a" implying that (this) keyword refers to whatever
 it is attached to..
*/
jade.name = "Jade";

jade.hello(); // Returns "Hello Jade";

/* call()/apply()/bind() ==> These are all ways od binding objects to functions */

var myobj = {
  name: "Jade",
};
var sayHello = function () {
  return "Hello " + this.name;
};
sayHello.call(mybj);

var myobj = {
  num: 2,
};
var myfunc = function (add) {
  return this.num + add;
};
myfunc.call(myobj, 2); // Returns 4

var myfunc = function (num1, num2) {
  return this.num + num1 + num2;
};
myfunc.call(myobj, 2, 3);
myfunc.apply(myobj, [2, 3]); // With apply pass the arguments in an array...

var myobj = {
  num1: 2,
  num2: 4,
};
var myfunc = function () {
  return this.num1 + this.num2;
};
var added = myfunc.bind(myobj);
added(); // Returns 6
var myobj2 = {
  num1: 3,
  num2: 10,
};
var another = myfunc.bind(myobj2);
another(); // Returns 13
/*
In the above we are binding the same function to different objects and
(this) keyword will refer to whatever object we bind to in each case...
*/

/*
 Classes have been introduced in ES6
 and they are the ES6 way of constructing objects...
*/

class peep {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    return "Hello " + this.name;
  }
}

var jade = new peep("Nyaga", 23);
jade;
/*
peep {name: "Nyaga", age: 23}age: 23name: "Nyaga"__proto__: constructor: class peephello: ƒ hello()__proto__: Object
The function hello() is under the prototype
*/
jade.hello();
("Hello Nyaga");

/*
 ES6 converter...
 https://babeljs.io/en/repl
 There's a lot of other really cool things you can do with ES6..
*/

/* Closure: A function that returns a function. */

var add = function (num1) {
  return function (num2) {
    return num1 + num2;
    // num1 is preserved in the second function making a (closure)
  };
};
var addTwo = add(2);
addTwo(3); // returns 5

var addTen = add(10);
addTen(5); // returns 15
/*
(Closure) gör att koden kan skalas ner mycket mer och att 
koden blir mycket mer återanvändbar
*/

/* 
Promises:
You use Promises to make asynchronous code. Sometime you make a
call to a database or you make an API call and it returns some data
that you want to do something with that return data...
*/

var mypromise = new Promise(function (resolved, rejected) {
  /* Gör någonting här och koontrollera utfallet... */
  if (true) {
    resolved(1234);
  } else {
    rejected();
  }
});

mypromise.then(function () {}).catch(function () {});

mypromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function () {
    console.log("Your promise failed :( ");
  });
/*
 A (Promise) takes a (then) and a catch()...
 and that's based on what happens inside the function passed to the (Promise)
 when creating a new (promise)...
*/

/* ----
Callbacks 
These are about passing a function to another function...
*/

function calc(num, callback) {
  return callback(num); // Returnerar numret som skickas till callback function...
}
var addTen = function (num) {
  return num + 10;
};
calc(3, addTen); // Returnera 13

// Http Request
var request = new XMLHttpRequest();
/*
När request startas körs denna funktion...
(onreadystatechange): är en event liistener
*/
request.onreadystatechange = function () {
  console.log(request.response);
};
/*
 Innan funktionen oven körs skickar vi några parametrar till request.
 get:  ==> Hämtar data från någonstans...
 post: ==> skickar iväg data någonstans, till en server eller databas...
 */

// request.open("get","url","true");
request.open("get", "https://randomuser.me/api/", "true");

request.send();
/*--------------------- */

// Promise & Http Request

// mypromise: som är lika med en resolved eller rejected
var mypromise = new Promise(function (res, rej) {
  // kör en request...
  var request = new XMLHttpRequest();
  request.open("get", "https://randomuser.me/api/");

  // om request lyckas...
  request.onload = res;

  // om request misslyckas..
  request.onerror = rej;

  // skicka request...
  request.send();
});

mypromise
  .then(function (data) {
    // om (promise) har blivit resolved
    data = data.target.response;
    console.log(data);
  })
  .catch(function () {
    // om request har blivit rejected...
    console.log("There was error!");
  });
