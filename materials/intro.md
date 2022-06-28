# JS Intro 

---

## 1. Functions 

> First-class citizens

- can be stored in var / pass into other functions

### 1.1 Different Ways to declare function

we will start with anonymous function (function without a name)

```js
function(firstName) {
  return `Dr. ${firstName}`;
}
```

if we will run file in browser we will get an error 

> SyntaxError: Function statements require a function name

**anonymous** only valid : 

- callbacks
- IIFE

### 1.2 Function expressions

When we store a function as a value in a variable - that's why is first-class citizen (we can store)

```js
const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
};
```

> doctorize('Ania')
>
> // "Dr. Ania"

use function expressions used to give unhelpful errors 

example: 

```js
const doctorize = function(firstName) {
  doesntExist();
  return `Dr. ${firstName}`;
};
```

> doctorize('Piotr')

```
Uncaught ReferenceError: doesntExist is not defined
    doctorize debugger eval code:2
    <anonymous> debugger eval code:1

```

function is technically an anonymous function without a name, the  browsers will now infer the name of the function from the variable name  and use that in the error

### 1.3 Function declaration vs function expression ? 

it is all about **hoisting**

```js
doctorize('Piotr');
const doctorize = function(firstName) {
 return `Dr. ${firstName}`;
};

function doctorize2(firstName) {
 return `Dr. ${firstName}`;
}
```

we will got error 

> referenceError: Cannot access 'doctorize' before initialization at ways-to-make-

```js
console.log(doctorize2('Piotr'));
const doctorize = function(firstName) {
 return `Dr. ${firstName}`;
};

function doctorize2(firstName) {
 return `Dr. ${firstName}`;
}
```

functions that are declared with function keyword are **hoisted**

JS will take keyword and **hoist** them up 

> JS will take function and bring them up to the top of code 

### 1.4 Arrow functions 

- shorter syntax 

- do not have their own scope in referece to the ```this``` keyword 
- anonymous function -- we always have to stick it into variable



```js
function inchToCm(inches) {
 return inches * 2.54;
}

/** Turn into anonymous function and store in var */
const inchToCM = function(inches) {
 return inches * 2.54;
};

/** delete function word */
const inchToCM = (inches) => {
 return inches * 2.54;
}
/** get rid of explicit return : */
const inchToCM = (inches) => inches * 2.54;
```

> 1. all in one line
> 2. No return keyword
> 3. no curly brackets 

if we have only 1 param - we can get rid of parantheses as well : 

```js
const inchToCM = inches => inches * 2.54;
```

another example : 

```js
function add(a,b=3) {
 return a + b;
}
const add = (a, b =3) => a + b;

```

**returning an object**

create function that will retun object with first & last name and age of baby 

```js
function makeABaby(first, last) {
 return {
   name: `${first} ${last}`,
   age: 0,
 };
}

const makeABaby = (first, last) => 
({name: `${first} ${last}`, age:0});
```

### 1.5  IIFE 

**IIFE** - imediately invoked function expression

* we wrap with parentheses
* immediately run in the end

```js
(function() {
  console.log('Running the anon function');
  return 'You are cool';
})();
(function(age) {
  	console.log('Running the Anon Function');
  	return `You are cool and age ${age}`;
})(10);
```

### 1.6 Methods 

live inside of an object 

```console.log```

log() is actually function that lives inside of console 

console is an object 



**objects with methods**

```js
const piotr = {
 name : "Piotr S",
 sayHi:function() {
  console.log("Hey Piotr");
  return "Hey Piotrek";
 },
 // short hand
 yellHi() {
  console.log("HEY PIOTRRRRR");
 },
  whisperHi: () => {
    console.log('hiii wess in a mouse');
  }
}
```

### 1.7 This 

scope operator.

equals to object in which was called 

```js
const piotr = {
 name: "Piotrek",
 sayHi: function() {
  console.log(this);
 // Object { name: "Piotrek", sayHi: sayHi() }
   console.log(this.name);
 }
}
```

### 1.8 Callback function

> function gets passed into antoher. function and is called by browser at a later point in time 

-> when someone click sth - run this

-> if some amount of time passed -> do this

we pass function - do not call them!!

```js
const button = document.querySelector('.clickMe');
button.addEventListener('click', wes.yellHi);

button.addEventListener('click', function() {
  	console.log('Nice job!!!');
});

function handleClick() {}
button.addEventListener('click', handleClick)
```

### 1.9 Timer callback

takes 2 things : 

- 1 function to call after a certain amount of time
- 2 duration in ms 

```js
setTimeout();
setTimeout(piotr.yellHi, 1000); // 1 second later 

setTimeout(()=> {
  	console.log("Done time to eat");
}, 1000);
```

