# 7 Loops



### 1. Array .forEach



```js
const toppings = [ "Mushrooms", "Tomatoes", 
"Eggs", "Chili",  "Lettuce", "Avocado", "Chiles",
"Bacon", "Pickles", "Onions"
];
```

```js
const toppings = [ "Mushrooms", "Tomatoes", 
"Eggs", "Chili",  "Lettuce", "Avocado", "Chiles",
"Bacon", "Pickles", "Onions"
];

function logTopping(element, index, array) {
    const nextElement = array[index + 1];
    const prevElement = array[index - 1];
    
    prevElement ? console.log(prevElement) : null;
    nextElement ? console.log(nextElement) : null;

    index === array.length - 1 ? console.log('Goodbye') : console.log('Next element : ');
}
toppings.forEach(logTopping);
```



### 2. Mapping

 map / filter / reduce

with map we do not return less or more 

we take sth and we return 

```js
const faces = ["sad", "happy", "exhausted", "excited", "angry", "stressed"];
function addArms(face) {
    return "left " + face + " right";
}
const toys = faces.map(addArms);
```

another good example with map is 

```js
const fullNames = ['Piotr', 'Ania', 'Basia'].map(name => `${name} Sadowski`);
console.log(fullNames);
//Array(6) [ "left sad right", "left happy right", "left exhausted right", "left excited right", "left angry right", "left stressed right" ]
```

```js
function sad(name) {
    return `${name} Sadman`;
}
function capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const fullNames = ['piotr', 'ania', 'basia']
    .map(capitalize)
    .map(sad);
console.log(fullNames);    



```



```js
const people = [
    {
        birthday: 'April 22, 1993',
        names: {
            first: 'Keith',
            last: 'Buckley'
        }
    }, 
    {
        birthday: 'January 3, 1975',
        names: {
            first: 'Tomasz',
            last: 'Buckley'
        }

    },
    {
        birthday: 'Feb 12, 1944',
        names: {
            first: 'Wojciech',
            last: 'Buckley'
        }

    }

];
```

we have that data above but not in format we want 

we want to take data and reformat : 

how many ms in year

1000 ms in second 

1000 * 60 * 60 * 24 * 365 

```js
const cleanPeople = people.map(function(person) {
    const birthday =  new Date(person.birthday).getTime();
    const now = Date.now();
    const age = Math.floor((now - birthday) / 31536000000);
    return {
        age,
        name: `${person.names.first} ${person.names.last}`, 
    }    
}); 
```

---

### 3 Looping - filter / find and higher order functions

in filter we loop over every single element in array and we say yes true or false

```js
const people = [
    {
        age: 49,
        names: {
            first: 'Keith',
            last: 'Buckley'
        }
    }, 
    {
        age: 32,
        names: {
            first: 'Tomasz',
            last: 'Buckley'
        }

    },
    {
        age: 41,
        names: {
            first: 'Wojciech',
            last: 'Buckley'
        }

    }
];

const over40 = people.filter(function(person) {
    if(person.age > 40) {
        return true;
    } else {
        return false;
    }
});

```

```js
const over40 = people.filter(person => {
    return person.age > 40;
});

```

find will only return 1 item we want 

```js
const students = [
    {
        id: '11ce',
        first_name : 'Piotr'
    },
    {
        id: '2958',
        first_name : 'Ania'
    },
    {
        id: '32qe',
        first_name: 'Basia'
    }
];
const oneStudent = students.find(student => student.id === '11ce');
console.log(oneStudent);
```



**high order function**

> func return another function 



```js
function findById(id) {
    return function isStudent(student) {
        return student.id === id;
    }
}
const student = students.find(findById('2958'));
```

```js
function findById(id) {
    return function isStudent(student) {
        return student.id === id;
    }
}
function findByProp(prop, propWeAreLookingFor) {
    return function locals(student) {
        return student[prop] === propWeAreLookingFor
    }
}
const student = students.find(findByProp('id', '2958'));
```

### 4. Looping and iterating  - reduce

- takes array of data

- return as single value 

```js
const orderTotals = [123,343,232,123,56,422,145,675];
let total = 0;
orderTotals.forEach(single => {
    total = total + single;
});
console.log(total);
```

it is not best option

tally here is accumulator - i takes what what return from previous loop 



```js
const orderTotals = [123,343,232,123,56,422,145,675];

function tallyNumbers(tally, currentTotal) {
    console.log(`The current tally is ${tally}`);
    console.log(`The current total is ${currentTotal}`);
    console.log('-------');
  	return tally + currentTotal;
}
# to know where to start with 
const allOrders = orderTotals.reduce(tallyNumbers, 0);
```

how many shirts and socks we have 

- how mamy total value 

```js
const inventory = [
    {type: 'shirt', price: 4000},
    {type: 'pants', price: 4532},
    {type: 'socks', price: 234},
    {type: 'shirt', price: 2343},
    {type: 'pants', price: 542}
];
function invetoryReducer(totals, item) {
    totals[item.type] = totals[item.type] + 1 || 1;
    return totals;
}
const inventoryCounts = inventory.reduce(invetoryReducer, {});
console.log(inventoryCounts);
```

```js
const totalInventoryPrice = inventory.reduce((acc, item) => acc + item.price, 0);
console.log(totalInventoryPrice);
```

---

### 5. Reduce excercise 

grab all the text from a web page 

// count how many times each letter and number occurs : 

> 1) convert to array using split() method based on nothing  ```split('')```



```js
const text = `
oronawirus. Czerwona strefa to za ma??o. Oto regiony zagro??one "czarn?? stref??"
Czerwone strefy i obostrzenia epidemiczne w nich obowi??zuj??ce na niewiele si?? zda??y. Jak ustali??a Wirtualna Polska, kilkana??cie powiat??w pod wzgl??dem zaka??e?? wielokrotnie przekroczy??o wska??niki Ministerstwa Zdrowia. Czy ju?? czas na wprowadzenie "czarnych stref"- i gdzie mog??yby one powsta???
Koronawirus. Czerwone powiaty bij?? rekordy. Czas na nowe obostrzenia?
Koronawirus. Czerwone powiaty bij?? rekordy. Czas na nowe obostrzenia? (ONS.pl, Fot: Photoshot)

- Musimy mocno nacisn???? hamulec i wprowadzi?? wi??ksze obostrzenia. W strefach czerwonych, kt??rych liczb?? monitorujemy, znajduje si?? ju?? 300 z 380 powiat??w w Polsce. Bronimy wydolno??ci systemu opieki zdrowotnej - powiedzia?? w Sejmie minister zdrowia Adam Niedzielski. Wspomnia?? o ewentualnym podj??ciu "drastycznych ??rodk??w". Nie poda?? szczeg??????w, poza mo??liwym przej??ciem na nauczanie zdalne starszych klas w szko??ach podstawowych.

Tymczasem eksperci coraz cz????ciej wspominaj?? o "czarnych strefach" zagro??enia koronawirusem. Chodzi o powiaty, kt??re znalaz??y si?? czerwonych strefach, ale liczba zaka??e?? nadal szybowa??a w nich w g??r??. To tam, wed??ug pojawiaj??cych si?? spekulacji, mog??oby doj???? do zamkni??cia szk????, a nawet ograniczenia swobody przemieszczania si?? mieszka??c??w.

Czerwona strefa nie wystarczy??a. B??dzie czarna strefa?
- Do wprowadzenia jeszcze bardziej surowych obostrze?? aspiruje obecnie 16 powiat??w. Wska??nik nowych zaka??e?? na 10 tys. mieszka??c??w wynosi tam ponad 42. Siedmiokrotnie przekracza wsp????czynnik dla strefy ??????tej - komentuje Piotr Tarnowski analityk i ekspert IT, kt??ry na bazie danych Ministerstwa Zdrowia opracowuje dane o najbardziej zaka??onych koronawirusem powiatach.



Szczeg????y na poni??szej mapie. Najbardziej zagro??one regiony zaznaczone s?? kolorem fioletowym. To powiaty: ??osicki, garwoli??ski, brzezi??ski, gosty??ski, krotoszy??ski, namys??owski, kluczborski, miechowski, kolbuszowski, prudnicki, my??lenicki, suski, limanowski, tatrza??ski, leski oraz miasto Krak??w (ci??gu 14 dni przyby??o tam 4,5 tys. zaka??onych).


Piotr Tarnowski
(Piotr Tarnowski)
- Obecny podzia?? na strefy czerwone i ??????te jest ju?? mocno nieaktualny, bo zgodnie z trendami epidemii, ca??a Polska b??dzie wkr??tce spe??nia?? kryteria strefy czerwonej. Nale??a??oby rozwa??y?? wprowadzenie nowego typu obostrze??, polegaj??cych na maksymalnym ograniczeniu kontakt??w ludzi - dodaje rozm??wca WP.

Andrzej Duda podpisa?? ustaw?? o Funduszu Medycznym. W??adys??aw Kosiniak-Kamysz: to pomys?? mojej ??ony
"Potrzebujemy czarnych stref". Nauczanie zdalne
O ewentualnym wprowadzeniu "czarnych stref" wspomina?? dr Franciszek Rakowski z Interdyscyplinarnego Centrum Modelowania Matematycznego i Komputerowego Uniwersytetu Warszawskiego. To jeden z ekspert??w, kt??ry przygotowuje scenariusze rozwoju epidemii dla rz??du.
`;
function isValidChar(char) {
    return char.match(/[a-z0-9]/i);
}
function lowercase(char) {
    return char.toLowerCase();
}
function instanceCounter(counts, char)
{
    counts[char]
    ? counts[char] = counts[char] + 1
    : counts[char] = 1;
    return counts;
}

function sortByValue(a,b) {
    return a[1] - b[1];
}

const result = text
        .split('')
        .filter(isValidChar)
        .map(lowercase)
        .reduce(instanceCounter, {});


const sortedResult = Object
    .entries(result)
    .sort(sortByValue);
console.log(sortedResult);

```



---

### 6.loops

for  - requires 3 

1) initial expression

2)condition

3)increment expression 

```js
for(let i = 100; i<=120; i+= 2) {
  console.log(i);
}
```

```js
for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

for -of  

> looping over iterables 

```js
const name = 'wes bos';
for (const letter of name) {
  console.log(letter);
}
const numbers = [1,2,3,4,5,6];
for(const number of numbers) {
  console.log(number);
}
```

