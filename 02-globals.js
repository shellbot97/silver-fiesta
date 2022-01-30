// GLOBALS  - NO WINDOW !!!!
/**
 * in vanilla js window object is pointed to the GEC
 * in node there are global variables. These can be accessed from anywhere in the project
 * 
 * __dirname : path to current dir
 * __filename: current file
 * require: function to use modules (CommonJS)
 * module: info about the current module
 * process : info about the env where the code is executed
 *      comes in use when the app is deployed on the server
 *      based on that server environment it will come in handy to make important decision
 */

// console is also available glabally so it can be also counted as global variable
console.log(__dirname);

// similar with setInterval and setTimeout
setInterval(() => {
    console.log("hello world!!");
}, 1000);