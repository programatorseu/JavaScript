### 1. Objects 

building blocks of js 

allow us to group properties and values

=> store related data 

=> order does not matter we could not rely on order 

Object literal syntax:

```js
const person = {
  age: 100,
  name: 'Piotr'
};
console.log(person);
```

> ​	 {age: 100, name:"piotr} .. proto

we can pass values in different form like below. 

-> we pass strange key names in ""

-> we can create sub property (sub object like clothing )

```js
const age = 29;
const piotr = {
    age,
    name : 'Piotr',
    propToCheck: 'Never',
    'cool-dude' : true,
    'really cool' : false,
    '777' : true,
    dog: 'snicker',
    clothing:  {
        shirts: 10,
        pants: 2
    },
    sayHello: function(greeting = 'Hey') {
        return `${greeting} ${this.name}`;
    }
};
piotr.job = 'Web Developer';
piotr.age = 30;
console.log(piotr.age);
```



we could not reassing : 

```js
piotr = {
  name: 'Ania',
  age: 12
}
```

we can create frozen object = immutable object

```js
const piotrFroze = Object.freeze(piotr);
piotrFroze.age = 100; // no error but it will not change value there 
```

to access properties

```js
piotr.age;
piotr['age'];
```

interesting usage like this: 

```js
   const property = prompt('What do you want to check ?');
    console.log(property);
     console.log(piotr[property]);
```


**important about input checking**

```js
      const nameInput = document.querySelector('[name="first"]');
        const name = nameInput ? nameInput.value : '';
        console.log(name);
```



**deleting property**



```js
      console.log(delete wes.job);
      //return true if deleted 
     
      // we can set age to undefined or null 
 		wes.age = undefined;
      wes.age = null;
```



### 2. Object reference vs values 



```js
      let name1 = 'piotr';
      let name2 = 'piotr';

      console.log(name1 === name2); // true
      name1 = "ania";
      console.log(name1 === name2); // false
      name1 = name2;
      console.log(name1 === name2); // true

```

person1 is not equal to person2 

```js
      const person1 = {
        first: 'piotr',
        last: 'sad',
        clothing: {
          shirts:10,
          pants: 2
        }
      };
      const person2 = {
        first: 'piotr',
        last: 'sad'
      };
      const person3 = person1;
      console.log(person1 === person3); // true
      person3.first = 'Ania';
      console.log(person1.first); // ania
      console.log(person3.first); // ania
```

more even :  if i type in console in browser

object is copied by reference 

person3 - reference to person1 variable 

```js
person1
{first: "Ania", last: "sad", clothing: {…}}
person3
{first: "Ania", last: "sad", clothing: {…}}

```

we want to take a copy : 

-  We will use spread operator : 

```js
  const person3 = {...person1};
      person3.first = 'Ania';
      
  console.log(person1.first); // piotr 
person3.clothing.shirts = 100;// it will change for person1 as well
```

it is called shallow copy  --> one level deep

for deeper copy 

* lodash for example



another example of copying:

```js
      const meatInventory = {
        bacon : 2,
        sausage: 3,
        oyster: 10
      };
      const veggieInventory = {
        lettuce: 5,
        tomatoes: 3,
        oyster: 15
      };
      const inventory = {
        ...meatInventory,
        ...veggieInventory
      };
      
```



output is :

```
inventory
{bacon: 2, sausage: 3, oyster: 15, lettuce: 5, tomatoes: 3}
```

---





### 3. Maps

similar to object with few different 

we can put any value to key  and to value 



```js
    const person1 = {
        name: 'Aania',
        age: 200
    }
    const myMap = new Map();
    myMap.set('name', 'Piotr');
    myMap.set(100, 'This is a number');
    myMap.set(person1, 'Really Cool');
    console.log(myMap);
```

output : 

```
Map(3) {"name" => "Piotr", 100 => "This is a number", {…} => "Really Cool"}
```

``` js
console.log(myMap.get(person1)); // "Really Cool"
```

why is it useful? => below another example : 

dictionary -> way of



```js
      const score = 100;
      const prizes = new Map();
      prizes.set(100, 'Bear');
      prizes.set(200, 'Duck');
      prizes.set(300, 'Car');
      console.log(`You win a ${prizes.get(score)}`); // bear 
```

```js
myMap.size; / 3 
```

order of map  is fixed 

```js
    const prizes = new Map();
    prizes.set(100, 'Bear');
    prizes.set(200, 'Duck');
    prizes.set(300, 'Cat');

    for(const prize of prizes) {
        console.log(prize);
    }

```

we got output in the same order :

```
(2) [100, "Bear"]
(2) [200, "Duck"]
(2) [300, "Cat"]
```

```js
  for(const prize of prizes) {
        console.log(prize[0], prize[1]);
    }
```

we can even destruct our map : 

```js
    for(const [points, prize] of prizes ) {
        console.log(points + " => " +  prize);
    }
```

```
100 => Bear
```

another way of creating map : 

```js
    const person = new Map([['name', 'wes'], ['age', 49]]);
```



```bash
// Map(2) {"name" => "wes", "age" => 49}
```



sending / receiving with json : 

```js
const person = {
	name: 'piotr',
	age: 100,
}
JSON.stringify(person);  // "{"name": "piotr", "age": 100}"
// we can send that json string and then we could turn into object
JSON.parse('{"name":"piotr", "age":100}')
```

there is an issue with maps changing to Json

---

####  

### 3. array



declare array

```js
const names = ["piotr", 'ania', 'basia'];
    console.log(typeof names); //object
    // to check if something is array:
    Array.isArray(names); // true
    console.log(names[2]); // basia
    console.log(names.length); // 3
    console.log(names[names.length-1]); // last element
```

mutation methods 

```js
    const numbers = [1,2,3,4,5,6,7,8,9];
    const numBackwards = numbers.reverse();
    console.log(numBackwards); // reversed order
    console.log(numbers);//  reversed
```



immutable methods

```js
    const pizzaSlice = numbers.slice(2,4);
    console.log(pizzaSlice); // 7,6 
    console.log(numbers);
```

in case of mutable methods - so best choice is to take copy of if we do not want to change original

```    js
    const numbers = [1,2,3,4,5,6,7,8,9];
    const numbersReversed = [...numbers].reverse();



// adding/removing elements to/from array 

names.push('lux'); // add to the end
names.unshif('poppy'); // add to the front 
// or using immutable way with adding to the front or back of array : 
const names2 = [...names, 'lux'];
const names3 = ['poppy', ...names];

```

for taking subset of array

**slice - >** inmutable ->. create copy of array  

**splice - > is mutable** 

splice(start, delete count)

```js
      const numbers = [1,2,3,4,5,6];
      console.log(numbers);
      numbers.splice(3,2);
      console.log(numbers);
      //[1, 2, 3, 6]
```

add to the middle 

```js
     const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
      const newBikes = [
        ...bikes.slice(0,2),
        'benotto',
        ...bikes.slice(2)
      ];
      console.log(newBikes);
    //["bianchi", "miele", "benotto", "panasonic", "miyata"]
    
    
    // here we stoped at panasonic + skipped 1 
    // go to the end 
  
    
          const newBikes2 = [
        ...newBikes.slice(0,3),
        ...newBikes.slice(4)
      ];
      // ["bianchi", "miele", "benotto", "miyata"]
```



another example  with deleting comments : 

finIndex  return "0" if found item



```js
const comments = [
            {text: 'Cool Beans', id: 123},
            {text: 'Love this', id: 133},
            {text: 'Neato', id: 233},
            {text: 'Good bikes', id: 333},
            {text: 'so good', id:433}
        ];
        function deleteComment(id, comments) {
            const commentIndex = comments.findIndex(comment => comment.id === id);
            return [
                ...comments.slice(0, commentIndex),
                ...comments.slice(commentIndex + 1)
            ];
        }
```



----

###  5. Array Cardio - static methods

1) static methods - utility methods 

* from / isArray / of 

The are not with prototype 

```js
Array.of('Basia', 'Ania');  //  we will never use it i think 
// ['Basia', 'Ania'];
[...'piotr']; // ["p", "i", "o", "t", "r"]
Array.from({length:10}) // create array with 10 spots 

```

```js
const range = Array.from({length: 10}, function() {
        return 'Piotrek';
      });
      //["Piotrek", "Piotrek"]
```

we can give : 

```js
 const range = Array.from({length: 10}, function(item, index) {
        return index;
      });
      // 0 - 9
      // if return item :
      // 10 times undefined 
```

we can create a function to create number and populate with numbers 

 ```js
 function createRange(start, end) {
        const range = Array.from({length: end-start+1},
          function(item, index) {
            return index + start;
          });
        return range
      }
      var ar = createRange(4,7);
// 4, 5, 6 ,7 
 ```

**creating array from object :**

```js
      const meats = {
        beyond:10,
        beef: 5,
        pork:7
      };
      console.log(Object.entries(meats)); // array with arrays 
      // [["beyond", 10], ["beef", 5], ["pork", 7]]
      console.log(Object.keys(meats)); // [beyond, beef, pork]
      console.log(Object.values(meats)); // [10,5,7]
      
```



---

### 6. Array cardio - instance methods

live on eah array 



```js
      const buns = ["egg", "wonder", "brioche"];
      console.log(buns.join()); // egg, wonder, brioche
      console.log(buns.join(' or ')); // egg or wonder or brioche

      const foodString = "hot dogs, pizza, sausage, corn";
      console.log(foodString.split(',')) 
			//[ "hot dogs", " pizza", " sausage", " corn" ]	
      console.log('wes bos'.split(''));
     
      
       const toppings = ["mushroom", "tomatoes", "eggs", "chili", "lettuce", "Avocado", "chilles", "bacon"];
      // those 4 methods are mutating ones: 
      
      const lastItem = toppings.pop(); // bacon => and it will be removed
      toppings.push(lastItem);
      const firstItem = toppings.shift(); 
      toppings.unshift(firstItem);
      
      
      // inmutating method : 
      //slice:
      
        const toppings = ["mushroom", "tomatoes", "eggs", "chili", "lettuce", "Avocado", "chilles", "bacon"];
     let newToppings = toppings.slice(0, toppings.length -1); // without bacon
     newToppings = [...newToppings, toppings[toppings.length - 1]]; // with bacon 

      
      
```

1. create copy of array with slice : 
2. create copy with spread operator 
3. use splice (destructor method) to take out 3-5
4. find index of Avocado with indexOf 
5. index in case of objects 
6. check with includes 

```js
//1
const toppingsCopy = toppings.slice(0);
//2
const toppingsCopy = [...toppings];
//3 take out 3-5 elements  = destructive metohd 
toppingsCopy.splice(2,5);

//4
 const avoIndex = toppings.indexOf('Avocado');
 console.log(avoIndex); // 5
 
 //5
 
   const basia = {name: 'basia'}
      const people = [{name: 'Ania'}, basia];
      console.log(people.indexOf(basia)); // 1 
 
 //6
       const isInToppings = toppings.includes('Hot Sauce');
      if(isInToppings !== true) {
        toppings.push('Hot Sauce');
      }
      toppings.reverse();
console.log(toppings); 
```

---

### 7 .Callback Methods and Function Generation

take function as argument in looping 



```js
const feedback = [
    {comment: 'Love the burgs', rating: 4},
    {comment: 'Horrible service', rating: 2},
    {comment: 'Smoothiers are great like the burger too', rating: 5},
    {comment: 'Ambiance needs work' , rating: 3},
    {comment: 'I do not like BURGERS', rating: 1}
];

// find - return 1st found element 
const burgRAting =  feedback.find(
        rating => rating.comment.includes('burg'));
// {comment: "Love the burgs", rating: 4}
```



create function 

-> element - each individual that is in array

```js
function findBurgRating(element) {
    console.log(element)
}
const burgRating = feedback.find(findBurgRating);
console.log(burgRating);

/*
{comment: "Love the burgs", rating: 4}
 {comment: "Horrible service", rating: 2}
 {comment: "Smoothiers are great like the burger too", rating: 5}
{comment: "Ambiance needs work", rating: 3}
{comment: "I do not like BURGERS", rating: 1}
*/

```





```js
function findBurgRating(element) {
   return element.comment.includes('burg');
}
const burgRating = feedback.find(findBurgRating);
console.log(burgRating);
// return 1st one

```

Swap to arrow function : 

```js
const findBurgRating = (element) => element.comment.includes('burg'); 
 
const burgRating = feedback.find(findBurgRating);
console.log(burgRating);
```

we are going to return another function that will return 

```js
function findByWord(word) {
    return function(element) {
        return element.comment.includes(word);
    } 
}
const burgRating = feedback.find(findByWord('burg'));
```

```js
const goodReviews = feedback.filter(element => {
    if(element.rating >= 2) {
        return true;
    } else {
        return false;
    }
});

//or even shorten that function:
const goodReviews = feedback.filter(single => single.rating > 2);

console.table(goodReviews);
```

