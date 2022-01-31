/**
 * the following variables (some of which needs to be kept secret) are available throughout the file
 * anyone by mistake can override them or use it in the place it is not supposed to be used in
 * 
 * For this Node's commonJS library
 * this makes every file in node becomes a module
 * 
 * so moving these to 04-first-modules
 */
// const secretFriend = "Susan";
// const myName = "Hitesh";
// const myFriend = "Rohit";


/**
 * suppose this function is going to be required for different friends and each friend
 * has his own class
 * In this case It will be easier to modularize this into a separate file and include
 * that file at multiple places
 * That is why we use Modules
 * 
 * so moving these to 05-utils-modules
 */
// const seHi = (name) => {
//     console.log(`hello ${name}`);
// } 

/**
 * every time requiring a module start it with ./
 * since your project can have third party module, custom modules & built-in modules
 * so just to avoid the confusion ALWAYS start it with ./
 */
const {myName, myFriend} = require('./04-first-module'); // destructuring the object
const sayHi = require('./05-utils-module'); // notice the variable the export module is received in(sayHi) has a different name then the function in module(SeHi)
const friends = require('./06-alternative-syntax');
require('./07-mindgranade');

sayHi(`Hello my name is ${myName}`)
sayHi(`and this is my friend ${myFriend}`)
sayHi(`and this is my school friend ${friends.otherFriends[0]}`)
sayHi(`and this is my school friend ${friends.otherFriends[1]}`)
sayHi(`and this is my colleague ${friends.colleague.name}`)