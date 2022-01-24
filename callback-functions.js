function makeUppercase(value) {
    console.log(value.toUpperCase());
}
makeUppercase('yo!')
/**
 * get function as a parameter
 */
function handleName(name, cb) {
    const fullName = `${name} ingale`
    cb(fullName)
}
handleName('hitesh', makeUppercase)
function reverseString(value) {
    console.log(value.split('').reverse().join(''));
}
handleName('hitesh', reverseString)
/**
 * instead of passing function name pass the function body
 */
handleName('prajwal', function(name) {
    console.log(name);
})
/**
 * instead of passing the entire body
 * shorten it using arrow functions
 */
handleName('prajwal', (name) => console.log(name))
/**
 * used it
 * array methods
 * setTimeout
 * event listeners
 */
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    console.log('invoked');
})