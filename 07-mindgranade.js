const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is ${num1+num2}`);
}

/**
 * if this module is required anywhere in the codebase
 * the following function will be executed right away
 * it doesnt matter if you are not assigning it to any variable like const mindGrenade = require('./07-mindGrenade.js')
 * 
 * this is not unique, this can be also done in the es6 module
 * this type of setup is mostly used with the third party module
 */
addValues()