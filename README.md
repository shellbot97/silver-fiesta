# silver-fiesta
Showing off my very very basic node js skills ;) 

[Evenote Reference](https://www.evernote.com/shard/s343/sh/4d63aa06-07e0-052a-e1b6-e40a658872d8/5e55d8c18c3cd2d7a298508854674d1c)

https://www.youtube.com/playlist?list=PLsyeobzWxl7occsESx2X1E2R2Uw5wCoeG

What is nodejs and why is it so popular
https://youtu.be/yEHCfRWz-EI
- JS is developed is in 1995 by Mr. Eich
- Initially it was used only for client side development (compiling and interpreting inside a browser)
- Different browsers use different engines to read javascript (ie. converting JS code in machine language)
	- firefox: spidermonkey
	- chrome : v8
	- edge : some version of V8 
- Hence V8 which was developed by chrome got very popular
- This got JS authors thinking, what if we can use javascript everywhere, Developers can only learn 1 core language and use the different frameworks for different use cases(for server, for local machine, mobile applications etc)
- This gave birth to nodejs
- nodejs is not a language, but it is a js runtime environment (like JRE for Java)
- using this environment we can make JS applications on local machine independant of any browsers
- when this nodejs is installed on server and integrated with HTTP we got server runtime environment
- now we need a framework for javascript in which we can write js code for server side development
-  for which we use EXPRESS
- NPM is the central repo for all node based modules from where you can download all the required modules according to your project(like PEAR for php or pip for python)
---

### Installation:

https://youtu.be/JINE4D0Syqw
- check if nodejs is already present
	- node -v
- update node
	- https://nodejs.org/en/
	- read: https://nodejs.org/en/about/
	- versions: 
		- LTS(Long Term Support)
		- current
	- automatically install the necessary tools : YES
	- Chocolatey : package manager for windows
	- Version syntax
		- X.Y.Z
			- X:  Major release
			- Y: Minor release
			- Z: bug fixes
---

### Saying Hello and much more!

https://youtu.be/U5h97cFmj8I
- heythere.js
- addition.js
- demoHTTPService.js
	- web service is a block of code running on the server
	- this particular server to distinguish itself from all the other servers of the world has IP address
	- there might be multiple applications running on that server
	- each application will have a different port number which the entities outside this server will use to access
		- 192.0.0.12:7000 : 192[.]0[.]0[.]12 is the IP address and 7000 is the port number
	- module : HTTP
---

### How NodeJS works

https://youtu.be/YSyFSnisip0
- In the synchronous architecture
	- if single api takes 3 seconds to response and you have 10 clients waiting in queue for a response(single thread doing all the work), it will take server 30 seconds to respond to 10th client
	- incase of multi threading, each thread gets assigned to a request so every client will get response in 3 seconds! great! but what if you have limited number of thread
	- in JS there is not multi-threading,  but there are 2 concepts replacing multithreading
		- Non Blocking IO
		- Asynchronicity
			- when you receive a request the single thread will assign it to someone else(maybe db or another server in case of server-to-server call) and itself will get free
				- once the other worker is free it will give the response to single-thread in the form of event loop which that thread has assigned to this particular worker
			- when another request comes again the single thread is free to accept requests(since it has assigned the work of 1st request to some other worker). So it will accept the request and again will assign it to some other worker
			- Now what are these workers?? Aren't they just like threads so why not use threads instead
				- workers are implemented using libuv
					- it is built in c
						- c internally uses kernel
							- kernel has multiple threads
				- that means in nodejs we don't use threads, but behind the scene it does use thread!!!!
			- Incase of CPU intensive work WE DO NOT PREFER NODEJS
			- We use nodejs only for I/O INTENSIVE WORK
---
### NPM

https://youtu.be/M8nlgBQBxxo
- Node Package Manager
- equivalent to PEAR/Composer for PHP or pip for Python
- we constantly use in-build packages such as http, file system etc
- 1.3 million packages are contributed by awesome devs from all over the world
- Some of the common packages 
	- realtime data sending sockets : https://www.npmjs.com/package/socket.io
	- mongodb connectivity: https://www.npmjs.com/package/mongodb
	- express framework: https://www.npmjs.com/package/express
- package.json: packages required to make the project work (like requirement.txt for python or composer.json for php)
- commanf
```
conposer install <packege slug>
```

---
### Creating a Modules in Node JS

https://youtu.be/zKIV3A_aOkY
- Modules : Encapsulated unit inside a big applications
	- encapsulated : the functions declared inside will only be available in that specific modules
	- To use the module outside that module use
		- module.exports  = <function-name>
	- custom-modules/calc.js
	- custom-modules/using-modules.js
---
### FS Module from NPM

https://youtu.be/ZySsdm576wE
- write : wipe up the entire content and write your own content
- append
- unlink
---
ExpressJS
https://youtu.be/2ojkb44XObc
- when we have http module why do we need saperate framework for server related dev
	- to handle the real-world complexity of applications
	- for eg get all successful sales in a year under Rs. 5000 and get the loyal customer data regarding to it
- https://expressjs.com/
- 
