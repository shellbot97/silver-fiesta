const person = {
    firstName: "Bob",
    middleName: "Rambabu",
    lastName: "Biswas",
    city: "Kolkata",
    sibling: {
        sister: "Sally Biswas",
        brother: "John Biswas"
    }
}
/**
 * traditional way of getting values from object
 */
// const firstName = person.firstName
// console.log(firstName);
/**
 * destructuring into variables
 * order not important
 */
const {firstName, lastName, zip} =  person;
console.log(firstName);
/**
 * getting an undefined value
 */
console.log(zip);
/**
 * alias
 */
const {city:location} = person
console.log(location);
/**
 * destructuring the property which is object itself
 */
const {sibling:{sister:favoriteSibling}} = person
console.log(favoriteSibling);
/**
 * object destructuring the parameter of function
 * @param person
 */
function printPerson({firstName, lastName, city, sibling:{sister}}) {
    console.log(firstName, lastName, city, sister);
}

printPerson(person)