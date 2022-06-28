# 3. Document Object Model

document object model - > what browser transform page

we can listen for clicks, scroll, add elements etc.

`innerWidth`, which will tell us how wide the browser is if you type it in the console.

```js
window. // window of browser 
document. // start from <html> and end </html>
navigator. // higher level than window - it give info about device 

```

---

### 3.1 Selecting Elements 

to use it we need to wait till whole DOM loads up so : 

`querySelector / querySelectorAll`

we need to embed script tag after we load html

or we can wrap inside in function and wait for event like this.: 

```js
function init() {
    const p = document.querySelector('p');
    console.log(p);
}

document.addEventListener('DOMContentLoaded', init);


```

let's say we have got 5 images inside item (emmet for simplify) : 

```html
 .item>img.custom * 5
```

we want to select them:  

* querySelector : 

```js
const img = document.querySelector('.item img');
console.log(img); // first image 
```

* querySelectorAll : 

```js
const imgs = document.querySelectorAll('.item img');
console.log(imgs);
```

only wanted `divs` with a class of `item`

```js
document.querySelectorAll("div.item");
```

searching inside already selected elements : 

```js 
const item2 = document.querySelector('.item2');
const item2image = item2.querySelector('img');
```



---



### 3.2  Properties and Methods

```js
const heading = document.querySelector('h2'); 
console.dir(heading); // get a lot of properties 

heading.textContent = 'Basia jest najlepsza';
//inner text is older
console.log(heading.innerHTML);
//Basia jest najlepsza
console.log(heading.outerHTML);
//<h2>Basia jest najlepsza</h2>

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList);
// add pizza to content
pizzaList.textContent = `${pizzaList.textContent} 🍕`;
//different way of adding
//afterbegin | beforebegin | afterend | beforeend
pizzaList.insertAdjacentText('beforeend', '🍕');

```





### 3.3 css classes -  how to work with them 



```js
const image = document.querySelector('.nice');
console.log(image.classList);
//DOMTokenList(2) ["nice", "cool", value: "nice cool"]
image.classList.add('open');
image.classList.remove('cool');
image.classList.contains('cool'); // false 

function toggleRound() {
    image.classList.toggle('round');
}
image.addEventListener('click', toggleRound);


```

```css
img {
    transition: all .2s;
}
.round {
     border-radius: 50%;
  transform: rotate(1turn) scale(2);
  box-shadow: 0 0 10px black;
}
```

**contains method**

```js
image.classList.contains('open');
```



---

### 3.4 Data attributes

Attributes are anything provided to an element as additional information. Things like `classes`, `src`, `alt` are all attributes.

```js
image.alt = 'zdjecie';
image.width = 200;
console.log(image.width); // 0 -> we have to wait till image is downloaded 
// better choice is :

window.addEventListener('load', function() {
    console.log(image.naturalWidth); // 500
});
image.setAttribute('alt', 'selfie imag');
console.log(image.getAttribute('alt'));

```

**data attributes**

od tego :

```js
<img class="custom" data-name="Ania" src="https://picsum.photos/200" />
         <img data-name="Basia" src="https://picsum.photos/200" />
         <img data-name="Rysiu" src="https://picsum.photos/200" />
```

to access it : 

```js
const custom = document.querySelector('.custom');
console.log(custom.dataset);
//DOMStringMap { name → "Ania" }

custom.addEventListener('click', function() {
	alert(`Welcome ${custom.dataset.name}`);
});

```

---

### 3.5  creating HTML 

create html in js / can be done in few ways : 

`document.createElement()`

```js
const myParagraph = document.createElement('p');
console.log(myParagraph);
```

There is no shortcut to create an element with a class or with a set attribute,

```js
const myP = document.createElement('p');
myP.textContent = 'I am P';
myP.classList.add('special');
console.log(myP);
//<p class="special">I am P</p>

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);
//<img src="https://picsum.photos/500" alt="Nice photo">

```

**how do we add it to the page ? **

- use another API called ```appendChild``` 

```js
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

document.body.appendChild(myDiv);
myDiv.appendChild(myImage);
myDiv.appendChild(myImage);
```

like we can see - we have appended many times -> it is not good because of optimaztion reasons that's why we should  start wrom other side

**add to dom once** 

```
myDiv.appendChild(myImage);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);
```



**insertAdjacentElement** 

it is quiet handy : 

```js
// we forgot about heading
const heading = document.createElement('h2');
heading.textContent = 'Cool things';
myDiv.insertAdjacentElement('beforebegin', heading);
```



create ul with li

```js
const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);
document.body.insertAdjacentElement('afterbegin', list);

const li5  = document.createElement('li');
li5.textContent = 'Five';
list.appendChild(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

```



---

### 3.6. HTML from strings and XSS

potential security hole with that method 

scary things about cross-site-scripting 

```js
    const item = document.querySelector('.item');
    item.innerHTML = `<h1> Hey how are you ? </h2>`; 
```



innertHTML 

```js
const item = document.querySelector('.item');
const width = 500;
const src = `https://picsum.photos/${500}`;
const desc = `Kocham Anie`;

const myHTML = `
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src="${src}" alt="${desc}" />
    </div>
`;

console.log(myHTML.classList); // undefined
console.log(typeof myHTML); // string 
item.innerHTML = myHTML;

```



**document.createRange() and document.createFragnent()**

Range -> collection elements with informatino about container , offset 

createContextualFragment create #document-fragment

```js
      const width = 500;
      const src = `https://picsum.photos/${width}`;
      const desc = "Cute pup";
      const myHTML = `
         <div class="wrapper">
         <h2>Cute ${desc}</h2>
         <img src="${src}" alt="${desc}"/>
         </div>`;
      const myFragment = document.createRange().createContextualFragment(myHTML);
      document.body.appendChild(myFragment);
```

**XSS (cross site Scripting**

people try to insert script tags 







---



### 3.7. Traversing and Removing Nodes

moving up / down  / left / removing / moiving element 

moving / removing elements in 

the all methods will ignore text node 

```html
<p class="piotr">
	I am Piotrek and I <em>love</em> my family 
</p>
```



```js
const piotr = document.querySelector('.piotr');
// whole paragrah
console.log(piotr.children);
//html collection of 1 element : <em>
console.log(piotr.childNodes);
//nodelist - text, em, text
console.log(piotr.firstElementChild);
//<em>love</em>
console.log(piotr.lastElementChild);
//<em>love</em>
console.log(piotr.previousElementSibling);
//here -  null because there was no parentSibling
console.log(piotr.nextElementSibling);
//<img src=""
console.log(piotr.parentElement);
//<body>

```

here we have got methods that will not ignore text node : 

```
.childNodes
.firstChild
.lastChild
.previousSibling
.nextSibling
.parentNode
```



```js
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
// we will still have access from JS memory 
```

---

### 
