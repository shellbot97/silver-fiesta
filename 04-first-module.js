/**
 * encapsulated code by which you can share as minimum as required
 * used for modularizing the code (split the code into multiple files)
*/
// Modules

/**
 * this can be shared publicly
 */
const myName = "Hitesh";
const myFriend = "Rohit";
/**
 * this needs to be only local
 */
const secretFriend = "Susan";

/**
 * global variable giving module object
 * whatever you dump inside module.exports, you can access anywhere in the application
 */
console.log(module);

module.exports = {
    myName, // since we are using ES6 syntax the key name will be same as the value
    myFriend
}