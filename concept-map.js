const people = [
    {
        name: "Alice",
        age: 23,
        role: "Software Developer",
    },{
        name: "Bob",
        age: 24,
        role: "Web Application Developer",
    },{
        name: "Carry",
        age: 32,
        role: "Software Development Manager"
    },
    {
        name: "Dick",
        age: 19,
        role: "Intern"
    }
]
/**
 * getting the age from array
 */
const age = people.map((employee)=>{
    return employee['age']
})
/**
 * declaring a function in const and using it later inside a callback
 */
const getName = (employee) => employee['name']
const name = people.map(getName)
/**
 * returning an object from callbacl
 */
const getNameAgeData = people.map((employee) => {
    return {
        name:employee.name.toUpperCase(),
        age:employee['age']
    }
})
console.log(age, name, getNameAgeData)

/**
 * displaying the data inside the html
 */
const allPeopleToBeDisplayed = people.map((employee) => {
    return `<h2>${employee.name}</h2><h1>${employee.age}</h1>`
})
console.log(document.querySelector('#people'))
document.querySelector('#people').innerHTML = allPeopleToBeDisplayed.join('<br/>')