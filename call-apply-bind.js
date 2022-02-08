let name = {
    firstName: "Hitesh",
    lastName: "Ingale",
    printFullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

// name.printFullName()

/**
 * problem: implement the printFullName for the below object
 * without copy-pasting the code in
 * Hint: Use call() method to borrow function from name
 */
let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

/**
 * call Method:
 * Using call method, we can do function borrowing
 * we can borrow functions from other objects    
 * every method in JS has access to this call(reference) method
 * first argument is the reference (what we want the "this" in the method(on which you are calling call() on) to be pointing to) 
 * in our case when we do this.firstName in name we want it to point to name2 (ie. Sachin)
 */
// name.printFullName.call(name2)

/**
 * but in general we dont follow this
 * we keep the method implementation separate in variable 
 * so that we can call() it on multiple objects
 * 
 * to pass parameters inside the function when it is being called 
 * using the call() method
 */
let printFullName = function () {
    console.log(this.firstName + ' ' + this.lastName);
}

// printFullName.call(name)
// printFullName.call(name2)


let printFullNameAndHomeTown = function(hometown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}

/**
 * In order to pass arguments to a method via call() function
 * the first argument has to be the reference
 * and then later on you can pass as many argument as required by the function definition
 */
// printFullNameAndHomeTown.call(name, 'Mumbai SubUrb', 'MH')
// printFullNameAndHomeTown.call(name2, 'Mumbai', 'MH')

/**
 * Apply Method
 * The only difference between call() and apply() is the way of passing the arguments
 * the arguments are passed in the array list in apply()
 */
//  printFullNameAndHomeTown.apply(name, ['Mumbai SubUrb', 'MH'])

/**
 * Bind Method
 * works as same as call()
 * the only difference is the return type
 * bind returns us a method which can be called later
 */
let printMyName = printFullNameAndHomeTown.bind(name, "Mumbai SubUrb", "MH")
// console.log(printMyName); // this gives us a function
// printMyName() // on invoking that function we get the desired output

/**
 * polyfill for bind
 * 
 * Polyfill : fallback for browser
 * suppose your browser doesn't support bind() and you have to write your own implementation for it
 * so polyfill is nothing but your own implementation
 */
let myName = {
    firstName: "Hitesh",
    lastName: "Ingale",
}

let printName =  function () {
    console.log(`${this.firstName} ${this.lastName}`);
}

Function.prototype.myBind = function(...args){
    let context = this
    return function (name) {
        context.printName()
    }
}

printMyName = printName.myBind(myName)
printMyName()