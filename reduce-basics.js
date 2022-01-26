const people = [
    {
        name: "hitesh",
        age:20,
        position:"Developer",
        salary: 100
    },
    {
        name: "alice",
        age:20,
        position:"Frontend Developer",
        salary: 200
    },
    {
        name: "bob",
        age:30,
        position:"Backend Developer",
        salary: 500
    },
    {
        name: "Carrie",
        age:40,
        position:"Full stack developer",
        salary: 900
    },
    {
        name: "Dick",
        age:34,
        position:"Project manager",
        salary: 1000
    }
]
/**
 * get the daily total salary of all the devs
 * use reduce
 * this takes a callback
 * which has 2 params 
 * 1. total(accumulator)
 * 2. person(current part of an object it is iterating)
 * along with callback it takes one more input which is the start value
 * this is set to 100 for us
 * this will be added in the final output
 */
const dailyTotal = people.reduce((total, person) => {
    console.log(total);
    console.log(person.salary);
    total += person.salary
    return total
}, 100)
console.log(dailyTotal);