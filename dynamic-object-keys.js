const person = {
    name: "john"
}
/**
 * accessing the key out of oject
 */
console.log(person.name)
/**
 * adding the key in object
 */
person.age = 35
console.log(person)
/**
 * having array as value in the object
 */
const items = {
    'features-items':['item1', 'item2']
}
console.log(items['features-items'])
console.log(person['name'])
/**
 * using dynamic keys in the object
 */
let appState = 'loading..'
const app = {
    [appState]:true
}
/**
 * adding a key name in the variable and using that
 */
const keyName = "Name"
console.log(app)
app[keyName] = "Hitesh"
console.log(app)
/**
 * updating the object using a function
 */
const state = {
    loading:true,
    name:"",
    job:""
}
function updateState(key, value) {
    state[key] = value
}
updateState('name', 'hitesh')
updateState('job', 'awesome developer')
updateState('age', '24')
console.log(state);