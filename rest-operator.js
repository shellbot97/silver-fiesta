const fruits = ['apple', 'banana', 'cherry', 'dates']
/**
 * rest operator when destructing an array
 */
const [first, second, ...restOfTheFruits] = fruits
console.log(first, second, restOfTheFruits);
const date = restOfTheFruits.find((fruit) => fruit == 'dates')
console.log(date);
/**
 * rest operator when destructing an object
 */
const persons = {
    firstName: "bob",
    lastName: "biswas"
}
const {firstName:name, ...rest} = persons
console.log(name, rest);
/**
 * functions
 */
/**
 * use rest to collect params in function
 */
const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, value) => {
        return total += value
    }, 0)/scores.length
    console.log(parseFloat(average.toFixed(2)));
}
/**
 * use spread to invoke the function
 */
const testScores = [100, 200, 300]
getAverage('hitesh', ...testScores)