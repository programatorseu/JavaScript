## 2. Debugging Tools

### 2.1 Console Debugging 



````js
const people = [
    {name: 'Piotr', cool: true, country: 'Poland'},
    {name: 'Ania', cool:true, country: 'German'},
    {name: 'Basia', cool:true, country: 'New Zealand'}
];

people.forEach((person, index) => {
    console.log(person.name);
  	console.error(person.name);
});
// format in nice table
console.table(people);

//how many times was called:
function doctorize(name) {
  console.count('running Doctorize');
  return `Dr. ${name}`;
}
````

we can group console logs:

```js
function doALotOfStuff() {
    console.group('Doing some stuff');
    console.log('Hey Im one');
    console.warn('whatch out');
    console.error('Hey');
    console.groupEnd();
}
```

```js
people.forEach((person, index) => {
    console.group(`${person.name}`);
    console.log(person.country);
    console.log(person.cool);
    console.log('Done!');
    console.groupEnd(`${person.name}`);
});
```

### 2.2 Call stack and stack trace 

call stack / stack trace - what function was called 

in the bottom we can see in console tool where error was triggered 

```js
function doctorize(name) {
    return `Dr. ${name}`;
}
function greet(name) {
    doesNotExist();
    return `Hello ${name}`;
}

function go()
{
    const name = doctorize(greet('wes'));
    console.log(name);
}
```

### 2.3 Grabbing elements and breakpoints 



```bash
$0.value 
$1 // second last element we click
$ -> is selector in console
# if there is jquery loaded on page it will not wor k! 
$('p'); # grab 1st paragraph on page 
$$('p'); # grab all paragraphs on page 

```

#### 

we can type debugger to stop -

it is our breakpoint 

```js
people.forEach((person, index) => {
    debugger;
    console.log(person.name);
});

```

then inside browser/source we can jump between



### 
