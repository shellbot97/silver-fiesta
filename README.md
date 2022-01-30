# silver-fiesta
Showing off my very very basic js skills ;) 

[Evenote Reference](https://www.evernote.com/shard/s343/sh/e17c1404-9836-6c39-8145-be3f3fecd4a4/edbe46d20a3303c3280142ff1e0286e0)
References from where this repo's content is derived from:

https://youtube.com/playlist?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ

Map:
https://youtu.be/80KX6aD9R7M
- similar to array_map in php
- return a new array
- does not change the size of original array
- makes a new array according to array
- files
	- concept-map.js
	- map-method.html
- example #1: Double, Triple and converting to Binary
```
const arr = [1,2,3,4,5];

const double = (x) => x*2; 
const triple = (x) => x*3;
const binary = (x) => x.toString(2);

const output = arr.map(double);
const output = arr.map(triple);
const output = arr.map(binary);
```
	- refer toString() for the 3rd example above

- example #2 : (realworld example) Get full name from users api response 
```
const users = {
    {firstName: : "hietsh", lastName:"Ingale"},
    {firstName: : "prajwal", lastName:"Ingale"},
    {firstName: : "shellbot", lastName:"Ingale"},
}

const output = users.map((object) => object.firstName+" "+object.lastName)
```

---
Unique Values:
https://youtu.be/yxT1lgupUrY
- how to get es6 one-liner to get unique values from the array
- files
	- unique-values.js
	- unique-values.html
---
Dynamic Object Keys
https://youtu.be/_qxCYtWm0tw
- files
	- dynamic-object-keys.js
---
Filter and Find
https://youtu.be/KeYxsev737s
- files
	- filter-and-find.js
- filter: returns a new array, can manipulate the size of array (unlike map), returns based on conditons
	- example #1: filtering out all the odd values 
```
const arr = [1,2,3,4,5,6];

const output = arr.filter((i) => i % 2 != 0)
```

	- example #2: (Real world example) finf first name of people having age < 25 from user api response
```
const users = [ 
    {firstName: "hietsh", lastName:"Ingale", age: 24},  
    {firstName: "prajwal", lastName:"Ingale", age: 24},  
    {firstName: "shellbot", lastName:"Ingale", age: 25},  
]
const output = user.filter((current) => current.age < 25).map((current) => current.firstName)
console.log(output)
```

- find: returns single instance, returns first match, if no match - undefined
---
Reduce Basics
https://youtu.be/3WkW9nrS2mw
- files
	- reduce-basics.js
- reduce iterates callback function
- reduces object to a single value number, array, object
- 1st param = accumulator =  this accumulates the output for every iteration. THIS HAS TO BE ALWAYS RETURNED AT THE END OF THE CALLBACK
- 2nd param = current = current iteration
- examples
	- #1:  sum of all elements in array
```
const arr = [1,2,3,4,5,6,7]

const totalSum = arr.reduce((total, current) => {
    total += current
    return total
}, 0)

console.log(totalSum)
```

	- #2:  find max value in the array
```
const arr = [1,2,3,4,5,6,7]

const MaxNum = arr.reduce((max, current) => {
    max = (current > max) ? current : max;
    return max
}, 0)

console.log(maxNum)
```

- example #3: (Real-World example) Group by users by age from user api response
```
const users = {
    {firstName: : "hietsh", lastName:"Ingale", age: 24}, 
    {firstName: : "prajwal", lastName:"Ingale", age: 24}, 
    {firstName: : "shellbot", lastName:"Ingale", age: 25}, 
}

const ages = users.reduce((acc, current) => {
    if(acc[current.age])
       acc[current.age] += 1
    else
       acc[current.age] = 1  
    return acc
}, {})
```

- example #4: (Real world example) finf first name of people having age < 25 from user api response
```
const users = [ 
    {firstName: "hietsh", lastName:"Ingale", age: 24},  
    {firstName: "prajwal", lastName:"Ingale", age: 24},  
    {firstName: "shellbot", lastName:"Ingale", age: 25},  
]
const output = users.reduce((acc, current) => {
    if(current.age < 25)
        acc.push(current.name)
    return acc
}, []) 
console.log(output)
```

---
Reduce - Object example
https://youtu.be/5BFkp8JjLEY
- files
	- reduce-return-an-object.js
	- reduce-counting-languages-github-repo.js
- node-fetch
- or property of assigning values
---
Array Destructuring
https://youtu.be/qhECs40xMec
- files
	- array-destructuring.js
---
Object Destructuring
https://youtu.be/i4vhNKihfto
- files
	- object-destructing.js
---
REST Operator
https://youtu.be/f-frKsJoBQU
- files 
	- rest-operator.js
- similar to spread operator
- gathers/collects items
- used : destructuring, functions
- rest is for function declaration and spread is for invoke the functions
---
Spread Operator
https://youtu.be/4Zyr5a3m0Fc
- allows and iterable to spread/expand individually inside the receiver
- spint into single items and COPY them
- files
	- spread-operator.js
---
Array.from
https://youtu.be/zg1Bv4xubwo
- not on a prototype not like person.from
- from returns array object from objext with a property or an iterable objest
- from - turns ds like array (string, nodelist, set) into an array
- files
	- array-from.js
	- array-from.html
---
Optional chaining
https://youtu.be/PuEGrylM1x8
- files
	- optional-chaining.js
---
Callback functions
https://youtu.be/GWq0XETTOTk
- function as an argument
- files
	- callback-functions.js
---
Callback hell
https://youtu.be/bx9xYPt2tdc
- files
	- callback-hell.js
	- callback-hell.html
---
Promises
https://youtu.be/IBjmTlShf6U
- files
	- promises.js
- promises avoid callback hell
- allows us to write async code in sync fashion
- main principle of promise,
	- imagine you are in a restaurant.
	- and you place an order for a milkshake, but you dont get the milkshake right away instead you get a receipt. 
	- It is a promise by the restaurant that once the item you requested for is ready you will get it 
	- once the milkshake is done preparing(2-3 minutes) you show the receipt and you get the milkshake
	- in some cases you dont get the milkshake(maybe they are out of icecream) the order will get REJECTED and you will get your refund
- promise is mostly used for http request
---
Promise example
https://youtu.be/GKVA6jYrgKc
- files
	- promise-example.js
	- promise-example.html
---
async await
https://youtu.be/iHrVo5fvmzE
- files
	- aync-await.js
- write async code in sync fashion
- await : wait till promise has returned valye
- to use await function has to be in async
- async function ALWAYS return a promise
---
fetch api
https://youtu.be/C_VIKzfpRrg
- files
	- fetch-api.js
- browser api for http requests
- default : get
- returns a promise
---
fetch errors
https://youtu.be/otrSJg1yeeo
- files 
	- fetch-errors.js
- since fetch returns a promise
- only if it cannot resolve it will throw the error
- it WILL NOT throw any error as per the http response codes (4XX, 5XX)
---
width/height
https://youtu.be/v8YENdbDv1w
- files
	- width-height.js
---
timestamps
https://youtu.be/-Sbd08tTbAA
- files
	- timestamps.js
---
ES2022
https://youtu.be/HnRjhUxepm8
- files
	- es2022.js
- 
---
get element helpers
https://youtu.be/bUa9uYFaa9M
- files
	- get-element-helpers.js
	- get-element-helpers.html