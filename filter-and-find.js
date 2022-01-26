const people = [
    {
        name: "hitesh",
        age:20,
        position:"Developer"
    },
    {
        name: "alice",
        age:20,
        position:"Frontend Developer"
    },
    {
        name: "bob",
        age:30,
        position:"Backend Developer"
    },
    {
        name: "Carrie",
        age:40,
        position:"Full stack developer"
    },
    {
        name: "Dick",
        age:34,
        position:"Project manager"
    }
]
/**
 * get all the people below age of 25
 */
const youngPeople = people.filter((person) => {
    if (person.age < 25){
        return true
    }
})
console.log(youngPeople)
/**
 * one liner to get all full stack devs
 */
const developer = people.filter((person) => {
    return person.position == 'Full stack developer'
})
console.log(developer);
/**
 * get people with age more than 50
 * no match
 */
const oldies = people.filter((person) => {
    return person.age > 50
})
console.log(oldies);
/**
 * one liner version for find
 */
const hitesh = people.find((person)=> person.name == 'hitesh')
console.log(hitesh);
/**
 * no match
 * find
 */
const lead = people.find((person)=> person.position == 'lead')
console.log(lead);
/**
 * till now we were finding values in array of objects, due to which the return type was always an object
 * now find the value in array of string, return type now is a string
 */
const fruits = ['apple', 'banana', 'cherry']
const banana = fruits.find((fruit) => fruit == 'banana')
console.log(banana)

const ageTwenty = people.find((person)=>person.age == 20)
console.log(ageTwenty)