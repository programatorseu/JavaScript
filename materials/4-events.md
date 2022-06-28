# 4. Event Listeners

DOM elements - things that are on page - emit events 

- when they are clicked / hovered / dragged 

we can attach event listeners to all elements 

- 1) select element we want to attach it to

```js
const butts = document.querySelector('.butts');
```

- 2. call addEventListener() on button element
     1. type of event
     2. call back funxction 

```js
const butts = document.querySelector('.butts');
function handleClick() {
    console.log('It was clicked ! ');
}
butts.addEventListener('click', handleClick);
```

we can remove listener : 

bind/unbind function 

A binding essentially means taking a function and listening for a specific click within an element.

```js
butts.removeEventListener('click', handleClick);
```

***it will not work with anonymous function***  



### 4.1 Listening to events on multiple elements 

assuming we have 10 buttons 

```html
  button.buy{buy item $}*10
```

-> select all - to get nodelist 

-> multiple buttons we need to loop  over

```js
const buyButtons = document.querySelectorAll('button.buy');
function buyItem() {
    console.log('Buying Item');
}


buyButtons.forEach(function(buyButton) {
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItem);
});
```



---



### 4.2.targets, bubbling, propogation and capture

event object- bunch of information about what happens when an event fires 

-> we can get information what button was clicked 

**event**  -> parameter that is accepted by callback  ( must be the first one passed )

**target**-> element that was clicked 

```js
const buyButtons = document.querySelectorAll('button.buy');

buyButtons.forEach(function(button) {
   button.addEventListener('click', handleClick);
});

function handleClick(event) {
    console.log(event);
}
```

we have pointer event  

 - clicks 
 - touches 
 - mouse movements 

**isTrusted**

> bool if click was comming from mouse or fake

**pressure**

> pressure sensitivity 

inside handle click add :

```php
function handleClick(event) {
  console.log(event.target);
}
```

output will be - button that was clicked

```html
<button class="buy">Buy item 7</button>
```

add data attribute : 

```html
<button data-price="100" class="buy">Buy Item 1</button>
<button data-price="200" class="buy">Buy Item 2</button>
<button data-price="300" class="buy">Buy Item 3</button>
<button data-price="400" class="buy">Buy Item 4</button>
<button data-price="500" class="buy">Buy Item 5</button>
<button data-price="600" class="buy">Buy Item 6</button>
<button data-price="700" class="buy">Buy Item 7</button>
<button data-price="800" class="buy">Buy Item 8</button>
<button data-price="900" class="buy">Buy Item 9</button>
<button data-price="1000" class="buy">Buy Item 10</button>

```

then to get: : 

1. dataset
2. price
3. parseFloat - to keep decimals

```html
console.log(event.target.dataset);
//DOMStringMap { price → "200" }
console.log(event.target.dataset.price);
// 200 300
 console.log(parseFloat(event.target.dataset.price));
```

target vs current target : 

when there are elements nested inside of the element that you are listening to.

```html
<button data-price="100" class="buy">Buy Item <strong>1</strong></button>
```

```js
const myButtons = document.querySelectorAll('button.buy');
myButtons.forEach(function(button) {
     button.addEventListener('click', handleClick);
});
      function handleClick(event) {
         console.log("target");
         console.log(event.target);
         console.log("curernt target");
         console.log(event.currentTarget);
         console.log("Comparison");
         console.log(event.target === event.currentTarget);
      }
```



**target** - what actually was clicked   (<strong></strong>)

**currentTarget** -> what trigger event listener (<button>)

```js
target 
//<strong>
curernt target
<button class="buy" data-price="100">
Comparison 
false
```



we click on strong - EVENT BUBBLES UP :

> goes from element up

if we set : 

```js
window.addEventListener('click', function() {
    console.log('You clicked the Window');
});

```

if we click on h2 it will stilll show you clciked on wndow



**Propagation**



event **bubbles up**

if i click on strong -> button -> body -> html -> window -> chrome web browser - > client machine 



we can **stop from bubbling up:**

```js
event.stopPropagation();
```

we  can use window and event ; to find element on which have clicked on :

```js
window.addEventListener('click', function(event) {
    console.log(event.target);
});
```

1. click goes on every element 

2. we find element - our target 
3. bubbling begins - we have triggered clicked on 



**capture**

Document

​	--> HTML

​		--> Body

​			--> Table

​				--> tbody

​					--> tr

​						-->tdirst it says "You clicked on a button" and then it says "YOU CLICKED THE WINDOW".

​                                      ![browser console output showing event logs for clicking a button](https://wesbos.com/static/14338f596bc65e118bc25b59a7134420/aa440/344.png)            

​							-->a

**bubble**

a

​	--> td

​		-->tr

​			-->tbody

​				-->table



if we have elemnet very low in DOM (td a)  we actually clicking from top to btottom

- it is keeping track of where it was passed through
- it gets to the very lowest DOM and then it begins bubbling 

we can listen for a click on window firt and then stop it from going further

- add 3rd argument to addEventListener - bool which specified whether to use capture or not 

```js
      window.addEventListener('click', function(event) {
         console.log("you clicked the window");
         console.log(event.target);       
      }, {capture:true});
```





```js
      const photoEl = document.querySelector('.photo');
      photoEl.addEventListener("mousemove", function(e) {
         console.log(e.currentTarget);
         //<img class="photo" src="https://picsum.photos/200" alt="Nice">
      });
```





**this keyword**

- special word / a reserved word
- if we have callback and want to reference element that event was called against : ```this```

```js
 photoEl.addEventListener("mousemove", function() {
         console.log(this);
     // same result as above
```



### 4.3.prevent default and form events



Html tag:

```html
<form action="">
<label for="name">Name</label>
<input type="text" id="name" name="name" />
<label for="email">Email</label>
<input type="email" id="email" name="email" />
<input type="checkbox" id="agree" name="agree" />
<label for="agree">I agree to the terms and conditions</label>
<hr>
<button type="submit">Submit</button>
</form>

```

```
<form action="" name="signupForm">
```



```js
const signupForm = document.querySelector('[name="signupForm"]');
signupForm.addEventListener('submit', function(event) {
    const name = event.currentTarget.name.value;
    if(name.includes('basia')) {
        alert('Hej basia');
        event.preventDefault();
    }
});


function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);

```

---



### 4.4.accessibility gotchas and keyboard codes

usability for users with accessibility 

buttons - > for action that happens inside application

links - for changing page 

if we want to make image accessible for clicking : 

assing a role

```html
<img class="photo" role="button" src="" />
```

then

add event listener with keyup:

but we want to assign to tab and  enter key

```js
function handlePhotoClick(event) {
	if(event.type === 'click' || event.key === 'Enter') {
		console.log('You clicked the photo');
	}
}
const photo = document.querySelector('.photo');
photo.adEventListener('keyup', handlePhotoClick);


```

