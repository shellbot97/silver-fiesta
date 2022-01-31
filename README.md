# Silver Fiesta
## _NodeJS and ExpressJS_

[Evenote Reference](https://www.evernote.com/shard/s343/sh/83a42806-ba10-b6a5-a9f8-9ba39848b913/d9e83f9d10b1cae5ad7410d73be25d0b)
References from where this repo's content is derived from:

https://youtu.be/Oe421EPjeBE

Topics:
- Node fundamentals
- express
- mongo db/mongoose
- application
- deployment
---
Requirements
- HTML
- CSS
- JS
	- ES6
	- Callbacks
	- Promises
	- async
- want to brush up on js : https://github.com/shellbot97/silver-fiesta/tree/js-nuggets 
---
Course Structure
https://youtu.be/Oe421EPjeBE?t=256
- Intro
	- Familier with NodeJS and Devs etup
- Install NodeJS
	- Difference between BrowserJS and NodeJS
- NodeJS Fundamentals
- ExpressJS
- Building apps
---
BrowserJS VS NodeJS
https://youtu.be/Oe421EPjeBE?t=299
- NodeJS
	- No Access to Web APIs 
	- No window
	- Server Side systems (Pure Logic, No interface)
	- File System
	- Versions
		- Incase if we build a browser api, It is out responsibilty to make sure ever browser on the planet supports it.
		- In case of Node App, you dont have to update the Node in your app incase Node releases the next version, unlike browser where you have to accommodate every browser update in order to provide uninterrupted access
	- CommonJS
		- This is like ES6 modules which we use in our browser
---
Installation
https://youtu.be/Oe421EPjeBE?t=470

- NodeJS.org LTS version : https://nodejs.org/en/download/
- check node version
```
node --version
```

- LTS : Long Time Support (strongly suggested for production apps)
---
Repl
https://youtu.be/Oe421EPjeBE?t=668

- How do we get node to execute out code
- We have two options
	- REPL Stands for Read Eval Print Loop
		- For play around
		- Go to CMD and type node
```
> const name = "hitesh"
undefined
> name
'hitesh'
```

		- To close cntrl + c
---
CLI
https://youtu.be/Oe421EPjeBE?t=807

- Files:
	- 01-intro.js
- To execute
```
node app.js
```

or 

```
node app
```

---
Global
https://youtu.be/Oe421EPjeBE?t=1227

- setInterval vs SetTimeout
- files
	- 02-globals.js
---
Modules
https://youtu.be/Oe421EPjeBE?t=1774
- files
	- 02-modules.js
---

First Module
https://youtu.be/Oe421EPjeBE?t=1966
- Files
	- 03-modules.js
	- 04-first-modules.js
	- 05-utils-modules.js
---
Alternative Syntax and Mind Granade!
https://youtu.be/Oe421EPjeBE?t=2732
- Files
	- 03-modules.js
	- 06-alternative-syntax.js
	- 07-mindGrenage.js
---
Built-in module Into
https://youtu.be/Oe421EPjeBE?t=3227
- Widely used built-in modules
	- OS
	- Path
	- FS
	- HTTP
- Docs : https://nodejs.org/docs/latest-v14.x/api/
---
OS Module
https://youtu.be/Oe421EPjeBE?t=3391
https://nodejs.org/docs/latest-v14.x/api/os.html
- Files:
	- 08-os-module.js
- Queries:
	- os.userInfo() returns null

---
Path Module
https://youtu.be/Oe421EPjeBE?t=3853
- Files
	- 09-path-module.js
---
FS Module
https://youtu.be/Oe421EPjeBE?t=4206
- Sync(Non Blocking)
	- Files:
		- 10-fs-sync.js
- Async:
	- files:
		- 11-fs-async.js
---
Sync vs Async
https://youtu.be/Oe421EPjeBE?t=5252
- Files
	- 12-sync-fs-vs-async-fs