# silver-fiesta
Showing off my very very basic node js skills ;) 

[Evenote Reference](https://www.evernote.com/shard/s343/sh/82df2599-9c64-b997-858e-5226ce01337c/390f63bfbb77d8e8338837829aac38eb)
References from where this repo's content is derived from:

- https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP

How JS works | Execution Context
https://youtu.be/ZvbzSrg0afE
- Everything in javascript happens inside the execution context
- 2 components
	- memory component (variable environment)
		- variables and functions are stored in key-value pairs
	- code component (thread of execution)
		- code executed line by line
- Javascript is a synchronous single threaded language(checkout How NodeJS works in NodeJS)
---
How JS code is executed | call stack
https://youtu.be/iLWTnMzWtj4
- 
```
var n = 2;
function square(num){
    var ans = num * num;
    return ans
}
var square2 = square(n);
var square 4 = square(4);
```
- Execution context is created in 2 phases
	- memory creation phase
		- skims the program line-by-line and allocate memory to all variables and functions
		- steps:
			- allocate memory for "n" (saves it as undefined)
			- allocate memory for  functions "square()" (literally the code of function)
			- allocate memory for "square2" (saves it as undefined)
			- allocate memory for "square4" (saves it as undefined)
	- code execution phase
		- runs through the whole program line-by-line
		- steps
			- places value 2 in "n" (which was previously undefined)
			- from line 2 to 5 there is nothing to execute so move on to next line
			- now we get function execution, every function when invoked will create a brand new execution context which again has
				- memory component
					- allocate memory for "num" which is a function param (saves it as undefined)
					- allocate memory for "ans" (saves it as undefined)
				- code execution component
					- value of "n" (argument) is passed to "num" (param)
					- put num*num inside ans (which was previously undefined). Now ans = 4
					- return the control back to the execution context where this function was invoked
				- this child execution will be deleted
			- value of "square2" will now be the value returned by child execution context ie 4 (which was previously undefined)
			- now we again get a function executions, so again a saperate execution context is created
- To manage every execution context JS uses a call stack
	- every time at the bottom of the stack we have global execution context
	- whenever a new execution context is created it is pushed to this stack
	- whenever top inserted execution context is done executing it is popped of the stack and then control moves to the next execution context
	- callstack maintains the order of execution of each execution context
	- other names for call stacks
		- Execution context stack
		- program stack
		- runtime stack
		- control stack
		- machine stack
---
Hoisting in Javascript (Variables and functions)
https://youtu.be/Fnlnw8uY6jo
- files
	- hoisting-1.js
	- hoisting-2.js
- By Hoisting you access the variables and functions even before initializing it without any error.
- Hoisting for variable:
```
    console.log(x); // this will give undefined
    var x = 7;
```
	- the above scenario is due to the fact that every variable decalred inside a code will get a special placeholder defined to it which is "Undefined"
```
    console.log(x) // ERROR: x is not defined
```
	- here instead of undefined we get Error: not defined because in the memory allocation the compiler could not find x and hence when in the execution context this line was executed it gave an error
- Hoisting for functions
	- functions will behave differently incase of hoisting
	- in the memory allocation phase, the entire function gets stored in the memory (literally)
	- due to which for following scenario, it gives the correct output
```
    getName() // Hitesh
    function getName(){
        console.log('Hitesh')
    }
```
- a trick to view stop the compilation in memory component
	- write a js code, run in the browser
	- go to chrome tools > sources > our script
	- put a debugger on the first line
	- refresh the page
	- go in the scope, here you will see all the variables and functions already there even before the code is executed(since it is paused on the first line itself)
	  ![scope-in-browser](assets/scope-in-browser.png)

	- incase of an arrow function, the following will give an error
```
    getname2() // getname2 is not a function
    var getname2 = () => { 
        console.log('hellow');
    }
```
	- since arrow functions are stored inside a variable
	- hence in the memory component getname2 will be assigned a value undefined since it is a variable

- Call stack in browser:

![call-stack-in-browser](assets/call-stack-in-browser.png)

---
How Functions are executed in JS
https://youtu.be/gSDncyuGw0s

```
var x = 0;
a();
b();
console.log(x); //0

function a() {
    var x = 7;
    console.log(x); //7
}

function b() {
    var x = 100;
    console.log(x); //100
}
```

- Execution of above program
	- create a global execution context
	- push this GEC(Global Execution Context) inside the callstack
	- inside this GEC,
		- memory allocation
			- allocate memory to
				- var x (initially undefined)
				- function a(), (code itself)
				- function b() (code itself)
		- code execution
			- var x = 0
			- fun a() is invoked
				- an execution context for this function is created and pushed to the call stack. Inside this function execution context
					- memory allocation
						- allocate memory to,
							- var x = undefined (this x is separate variable then the x in GEC)
					- code execution
						- var x = 7
						- console.log(x) // 7
				- this execution stack will be deleted from call stack
			- now fun b() is invoked
				- an execution context for this function is created and pushed to the call stack. Inside this function execution context
				- memory allocation
					- allocate memory to,
						- var x = undefined (this x is separate variable then the x in GEC)
				- code execution
					- var x = 100
					- console.log(x) // 100
				- this execution stack will be deleted from call stack
			- console.log(x) // 0
	- Delete the GEC
- For more clarity check the execution of this function in browser using debugger, scope and callstack

![local-scope-and-global-scope](assets/local-scope-and-global-scope.png)

---
Window and this keyword
https://youtu.be/QCRpVw2KXf8
- window
	- always points to GEC
	- whenever JS code is executed it is the responsibility of the engine that is executing it to create some variables pointing to the GEC
	- incase of browsers(v8) it is called as window
	- incase of node it is called as global
- this
	- at the global level this points to the GEC
```
var a = 10;
function a(){
    var x = 20;
}
console.log(window.a) // 10
console.log(a) // 10
console.log(this.a) // 10
console.log(x) // ERROR: X is not defined
```

---
Undefined vs Not defined
https://youtu.be/B7iF6G3EyIk

```
var a;
console.log(a); // undefined
a = 10;
console.log(a); // int 10
a = 'hitesh';
console.log(a); // string hitesh 
```

---
Scope, Scope chain and Lexical environment
https://youtu.be/uH-tVP8MUs8

```
function a() {
    console.log(b); // 10
}
var b = 10;
a();
```
- somehow in the EC of a() it finds the value of variable b from the GEC 

```
function a() {
    c();
    function c() {
        console.log(b) // 10
    }
}
var b = 10;
a();
```
- you can access the variables declared in GEC inside the EC of a function which is already inside the EC of another function

```
function a() {
    var b = 10;

    c();
    function c() {
        console.log(b) // 10
    }
}

a();
console.log(b) // ERROR: not defined
```
- the reverse of above two cases is not true

- scope: 
	- where you can access the specific var for fun in your code
	- scope is directly dependant on the lexical environment
- Lexical environment
	- Whenever an EC is created, a lexical environment is also created. 
	- Its the local memory along with Lexical environment of its parent
	- lexical, literally means hierarchy
	- in our case c() is lexically sitting inside  a() ie. code for c() is physically inside a()
	- and a() is lexically inside the global scope
	- whenever EC is created, you get reference to the lexical environment of its parent
	- GEC also has reference to the lexical environment which is null
	- so Finally Lexical Environment = local memory + Lexical Environment of Parent
	- 

	![lexical-environment-linked0list](assets/lexical-environment-linked0list.png)  
	  
- Scope Chaining:
```

function a() {
 

    c();
    function c() {
        console.log(b) // 10
    }
}

var b = 10;
a();

```

	- lets take the example of above code, when you do console.log(b) in c() it searches for var b in the EC of c()
	- it couldn't find it, so it moves on to EC of a() this is possible because inside EC of c() the lexical reference of a()'s EC is stored
	- it couldn't find var b inside EC of a() as well. Now in the EC of a() there exists a lexical reference of GEC, so it moves on to finding var b in GEC
	- now here it finds the value of var b, which is passed to EC of a() and then EC of c()
	- this as we can see is like a linked list
	- this is called scope chaining
---
Let & Const in JS | Temporal Dead Zone
https://youtu.be/BNC6slYCj50
- Are let and const hoisted in JS
	- Yes, these are in Temporal Dead Zone for the time being
	- example,
```
console.log(b) // undefined
console.log(a) // ERROR: cannot access variable `a` before initialization

let a = 10;
var b = 100;
```

- Here the reason why let gives an error is
	- incase of var, the memory is assigned to var and it is saved in GEC
	- but incase of let and const, the assigned memory is not stored in GEC but are stored in separate memory space, which you cannot access unless you assign some values to it
	- a demo of which can be seen if you do window.b you will get the value but if you do window.a you will get undefined, which proved a is not stored inside GEC
- Temporal Dead Zone : Time between the let variable initialization and the value assignment for that particular let variable
- To avoid TDZ,
	- always put all your declarations on the top, this shrinks TDZ window to 0
- For our code the temporal dead zone(TDZ) for let variable a is from line 1 to 3
- if you try to access a let or const variable inside the TDZ it will give reference error, which is the same what we get when we do not initialize the variable Error: not defined
- SyntaxError:
```
let a = 10;

let a = 100; // SyntaxError Identifies is already been declared

const b = 1000;

const b  = 10000; // SyntaxError Identifies is already been declared
```

- const
	- this is stricter then let
	- for let initialization first and value assignment later is allowed ie,
```
let a;

...some code...

a = 100;
```

	- but when you do the same with const you get SyntaxError: Missing Initializer in const declaration
- if you try to assign the value to const again ie.
```
const a = 100;

const a = 1000; // ERROR
```

- you get TypeError: Assignment to constant variable
- So we have seen 3 types of error
	- SyntaxError : if the code is not according to JS standard 
	- ReferenceError : Tries to find a specific var in memory but you cannot access it
	- TypeError : Trying to change the type of the variable or behaving with a type not according to its specification
---
Block Scope and shadowing in JS
https://youtu.be/lW_erSjyMeM
- Block
	- also known as compoud statement
	- used to combine multiple JS statement in a single group
	- for example { ...JS statements... }
	- reallife example, The actual syntax of if is something like this,
```
        if() return a;
```

	- ie. it expects single statement after if() 
	- but incase if we want to write muliple statement we use a block and wrap our code inside this block ie. { and } 
- Block Scope:
	- whatever var and fun we access inside the block
	- example
```
        {
            var a = 10; // this is hoisted in GEC
            let b = 20; // this is hoisted in the memory space resoved for this particular block
            const c = 30; // this is hoisted in the memory space resoved for this particular block
            console.log(a) // 10
            console.log(b) // 20
            console.log(c) // 30
        }
console.log(a) // 10
console.log(b) // Reference Error variable b is not defined
console.log(c) // Reference Error variable c is not defined
```

- Shadowing
	- if you same named variable outside the block, the variable inside the block shadows that particular variable which is present outside the block
	- example
```
        var a = 100;
        let b = 200;
        {
            var a = 10; // this replaces the value of variable `a` inside the GEC 
            let b = 20; // this assigns the value of variable `b` inside the Block Scope


            console.log(a) // 10 shadowed
            console.log(b) // 20 shadowed


        }
        console.log(a) // 10 shadowing continued
        console.log(b) // 200 Did not shadow
```

	- illegal shadowing:
```
let a = 20
{
    var a = 30 // this is illegal will throw reference error, since it will again try to store the value of `a` in the GEC
}
```

	- legal shadowing
```
let a = 10;
{
    let a = 20; // this is allowed, since it will try to store the value in Block Scope which is different than GEC
}
```

```
var a = 10;
{
    let a = 20; // this is also allowed since it will store the value of `a` in Block Scope instead of GEC
}
```

- lexical scope of blocks
```
const a = 100;
{
    const a = 200;
    {
        const a = 300;
        console.log(a) // 300
    }
    console.log(a) // 200
}
console.log(a) // 100
```

---
Closures
https://youtu.be/qikxEIxsXco

```
function x(){
    var a = 7;
    function y() {
        console.log(a) // 7
    }
    y();
}
x();
```

- closure: a function bound together with its lexical environment
- in JS function can be
	- returned from another function
```
function a(){
    var a = 7;
    function y(){
        console.log(a)
    }
    return y
}
var z = a();

// some code

z() // 7
```
		- Here you returned y() from a() which literally returned a function
		- once a is executed its EC is deleted from the callstack
		- if the EC of a() (which had the value of var a) is deleted from the call stack, when z() is executed later in a code it should give referenceError since it couldnt find the value of var a which got deleted along with the EC of a()
		- but this is not the case since when you do return y you return a closure. this has function + lexical environment ie. EC of y where the value of var a is stored
		- so it doent matter even if the call stack deleted EC of a() since we have already return the lexical scope of y() and its been stored in var z we can use it anywhere anytime in the coming code
		- 

	- passed as another function parameter
```
function a(y){ 
    
}
a(function y(){
        console.log("hello")
    })
```

	- assigned to a variable
```
var a = function y(){
        console.log("hello")
    }
```

- Uses of closure:
	- Module design pattern
	- currying
	- functions like once
	- memoize
	- maintaining the state in async world
	- setTimeouts
	- Iterators
