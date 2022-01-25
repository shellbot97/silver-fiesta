/**
 * Promise arguments:
 * 1. resolve: a callback function to be executed once resolved
 * 2. reject: a callback function to be executed once rejected
 * initially it will always be in a pending state
 */
 const promise = new Promise((resolve, reject) => {
    // resolve('hello promise')
    reject('there was an error')

})

console.log(promise);
/**
 * use of then and catch
 */
promise.then((data) => {
    /**
     * handle the promise when it resolves
     */
    console.log(data);
}).catch((error) => {
    /**
     * handle the promise when it is rejected
     */
    console.log(error);
})
/**
 * a real life use case
 * match a random number using promise
 */
const value = 2
const promise2 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random()*3)
    console.log(random);
    if (random == value) {
        resolve('resolved')
    }else{
        reject('rejected')
    }
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})