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
