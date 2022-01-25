const fetch = require('node-fetch')
const apiURL = 'https://www.course-api.com/react-tours-projectss'
/**
 * handling http errors in fetch 
 */
const getAPIData = async() => {
    try {
        const response = await fetch(apiURL)
        if (!response.ok) {
            const msg = `There was an error ${response.status} ${response.statusText}`
            throw new Error(msg)
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAPIData()
