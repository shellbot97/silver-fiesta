const fetch = require('node-fetch')
const apiURL = 'https://www.course-api.com/react-tours-project'
/**
 * fetch by-default returns a promise
 */
console.log(fetch(apiURL));
/**
 * promise returned by fetch can be chained for further operations
 * since .json() also returns a promise its response can also be handled using then
 */
fetch(apiURL)
    .then((response) => response.json()
        .then((data) => console.log(data)))
    .catch((error) => console.log(error))
/**
 * async implementation of the above code
 */
const getAPIData = async() => {
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAPIData();